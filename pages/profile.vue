<template>
  <div>
    <div class="flex gap-2 flex-col items-center justify-center">
      <div
        v-if="status === 'authenticated'"
        class="flex items-center justify-center gap-4 max-w-md shadow-md mx-auto rounded bg-white p-4"
      >
        <img
          :src="data.user.image"
          alt="Avatar"
          class="w-[128px] h-[128px] rounded-full ring-2 ring-green-400 shadow"
        />

        <div class="flex flex-col gap-2">
          <h1 class="text-2xl font-bold text-center">
            🏷️ {{ data.user.name }}
          </h1>
          <p class="text-gray-500 text-sm text-center">
            {{ data.user.email }}
          </p>
          <button
            @click=""
            class="flex gap-2 items-center justify-center px-4 py-2 bg-red-400 rounded text-white shadow hover:bg-red-500 duration-200"
          >
            <Icon name="bx:bxs-user-account" />
            <span> Upload Avatar </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Database } from '~/types/database.types';
const supabase = useSupabaseClient<Database>();

const { data, status, signOut } = useAuth();

interface IProfile {
  id?: string;
  username?: string;
  email?: string;
  bio?: string;
  profile_picture?: string;
}

const profile = ref<IProfile>({});

const computedImgUrl = computed(() => {
  if (profile.value.profile_picture) {
    return profile.value.profile_picture;
  }

  return '/ganyu.png';
});

const handleUploadImg = async () => {
  const file = (document.getElementById('profileUpload') as HTMLInputElement)
    .files?.[0];
  if (!file) {
    return;
  }

  const fileExt = file.name.split('.').pop();
  // Upload Image to Storage

  const { data, error } = await supabase.storage
    .from('profile_img')
    .upload(`public/${profile.value.id}.${fileExt}`, file, {
      cacheControl: '0',
      upsert: true,
    });

  if (error) {
    alert(error.message);
    return;
  }
  if (data) {
    // Get Image Public URL
    const { data: getUrl } = await supabase.storage
      .from('profile_img')
      .getPublicUrl(`public/${profile.value.id}.${fileExt}`);

    if (getUrl) {
      profile.value.profile_picture = getUrl.publicUrl;
      onSave();
    }

    return ElMessage({
      message: 'Image uploaded successfully',
      type: 'success',
    });
  }
};

const onSave = async () => {
  const { error } = await supabase
    .from('profile')
    .update({
      username: profile.value.username,
      bio: profile.value.bio,
      profile_picture: profile.value.profile_picture,
    })
    //@ts-ignore - Supabase types are wrong ???
    .eq('id', profile.value.id?.toString());
  if (error) {
    alert(error.message);
    return;
  }

  return ElMessage('Profile saved.');
};

const logOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    alert(error);
    return null;
  }

  return navigateTo('/');
};

onMounted(() => {
  const getProfile = useProfile();

  profile.value = getProfile.value;
});
</script>

<style scoped>
.el-alert {
  margin: 20px 0 0;
}

.el-alert:first-child {
  margin: 0;
}
</style>

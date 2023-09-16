<template>
  <div>
    <BlockColumn>
      <BlockHeader title="Profile" class="w-full max-w-xl mx-auto">
        <div class="flex gap-2 flex-col items-center justify-center">
          <img
            :src="computedImgUrl"
            class="block items-center justify-center rounded-full ring-1 ring-purple-400 shadow w-[128px] h-[128px]"
            alt="Profile Picture"
          />
          <input
            type="file"
            @change="handleUploadImg"
            name="Profile Image Upload Btn"
            id="profileUpload"
            class="text-sm bg-yellow-300 rounded"
          />
        </div>

        <ElForm>
          <ElFormItem label="Username">
            <ElInput
              v-model="profile.username"
              placeholder="Username"
              class="w-full"
            />
          </ElFormItem>
          <ElFormItem label="Email">
            <ElInput
              v-model="profile.email"
              placeholder="Email"
              class="w-full"
              disabled
            />
          </ElFormItem>
          <ElFormItem label="Bio">
            <ElInput
              type="textarea"
              v-model="profile.bio"
              placeholder="Bio"
              class="w-full"
            />
          </ElFormItem>
          <div class="flex flex-row-reverse justify-between">
            <Button
              type="success"
              name="Save Settings"
              icon="bx:bxs-save"
              @click="onSave"
            />
            <Button
              type="danger"
              name="Logout"
              icon="bx:log-out"
              @click="logOut"
            />
          </div>
        </ElForm>
        <p class="text-sm text-purple-500 my-3 leading-6">
          {{ profile }}
        </p>
      </BlockHeader>
    </BlockColumn>
  </div>
</template>

<script setup lang="ts">
import type { Database } from '~/types/database.types';
const supabase = useSupabaseClient<Database>();

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

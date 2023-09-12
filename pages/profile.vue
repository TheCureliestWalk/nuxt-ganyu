<template>
  <BlockColumn>
    <BlockHeader title="Profile" class="w-full max-w-xl mx-auto">
      <ElAvatar
        src="/ganyu.png"
        size="large"
        class="inline-block items-center justify-center"
      />
      <ElUpload>
        <template #trigger>
          <el-button type="primary">+ profile picture</el-button>
        </template>
      </ElUpload>
      <span>Username</span>
      <ElInput v-model="user.username" />
      <div class="flex flex-col gap-2">
        <span>Email</span>
        <input type="text" v-model="user.email" class="p-2" disabled />
      </div>

      <div class="flex flex-col gap-2">
        <span>Bio</span>
        <ElInput
          type="textarea"
          v-model="user.bio"
          placeholder="no bio defined yet."
        ></ElInput>
      </div>
      <Button name="Save Settings" icon="bx:bxs-save" @click="onSave" />
      <Button name="Logout" icon="bx:log-out" @click="logOut" />
    </BlockHeader>
  </BlockColumn>
  {{ user }}
</template>

<script setup>
const user = ref({});
const supabase = useSupabaseClient();
const supabaseAuthUser = useSupabaseUser();
const logOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    alert(error);
    return null;
  }

  return navigateTo('/');
};

const onSave = async () => {
  const { error } = await supabase
    .from('profile')
    .update({
      username: user.value.username,
      bio: user.value.bio,
      picture: user.value.picture,
    })
    .eq('user_id', supabaseAuthUser?.value.id);
  if (error) {
    alert(error.message);
    return;
  }

  return ElMessage('Profile saved.');
};
onMounted(async () => {
  const { data, error } = await supabase
    .from('profile')
    .select('*')
    .eq('user_id', supabaseAuthUser?.value.id);
  if (data) {
    user.value = data[0];
  }
  if (error) {
    alert(error.message);
  }
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

<template>
  <BlockColumn class="max-w-md mx-auto">
    <BlockHeader title="Settings">
      <div class="flex flex-col items-center justify-center gap-3.5">
        <ElAvatar src="/ganyu.png" size="large" />
        <ElUpload>
          <template #trigger>
            <el-button type="primary">+ profile picture</el-button>
          </template>
        </ElUpload>
      </div>
      <span>Name</span>
      <ElInput v-model="name" />
      <ElButton type="success" @click="ElMessage('Settings saved.')">
        <Icon name="bx:bxs-save" />
        Save
      </ElButton>
    </BlockHeader>
  </BlockColumn>
</template>

<script setup lang="ts">
const name = ref<string>('');

onMounted(() => {
  const user = useSupabaseUser();
  name.value = user?.value?.user_metadata.name ?? 'no username defined';
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

<template>
  <div>
    <ElTable v-loading="isLoading" :data="items" style="width: 100%">
      <ElTableColumn prop="name" label="name" />
    </ElTable>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();

const items = ref([]);
const isLoading = ref(true);
onMounted(async () => {
  const { data, error } = await supabase.from('inventory').select('*');
  if (data) {
    items.value = data.slice();
    isLoading.value = false;
  }
  if (error) {
    alert(error.message);
  }
});
</script>

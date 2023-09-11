<template>
  <div
    v-if="isLoading"
    class="fixed bg-black bg-opacity-40 w-full z-40 flex h-full gap-6 items-center justify-center overflow-hidden text-4xl"
  >
    <Icon name="svg-spinners:180-ring" />
    <h3>Loading</h3>
  </div>
</template>

<script setup>
defineProps(['isLoading']);

defineEmits(['setLoading']);
</script>

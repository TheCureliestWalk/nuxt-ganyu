<template>
  <div
    v-if="isLoading"
    class="absolute fixed bg-black bg-opacity-40 w-[100%] z-40 flex w-full h-full gap-6 items-center justify-center overflow-hidden text-4xl"
  >
    <Icon name="svg-spinners:180-ring" />
    <h3>Loading</h3>
  </div>
</template>

<script setup>
defineProps(['isLoading']);

defineEmits(['setLoading']);
</script>

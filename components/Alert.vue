<script setup lang="ts">
const props = defineProps<{
  title: string,
  message: string
}>()
</script>

<template>
  <div class="absolute mx-auto top-20">
    <div class="px-4 py-2 bg-amber-300 text-white">
      <h1 class="font-bold">{{ props.title }}</h1>
      <p>{{ props.message }}</p>
    </div>
  </div>
</template>

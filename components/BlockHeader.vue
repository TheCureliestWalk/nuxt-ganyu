<script setup lang="ts">
const props = defineProps<{
  title: String;
}>();
</script>

<template>
  <div class="bg-white/30 border border-zinc-300">
    <div class="border-b border-zinc-300 pl-4 pt-4">
      <h1 class="font-bold text-base mb-3">{{ props.title }}</h1>
    </div>
    <div class="p-4 space-y-2.5">
      <slot />
    </div>
  </div>
</template>

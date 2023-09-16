<script setup lang="ts">
const props = defineProps<{
  name: string;
  disabled?: boolean;
  placeholder?: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-2.5 justify-center items-center">
    <label :for="props.name" class="text-base text-gray-700 font-bold">{{
      props.name
    }}</label>
    <textarea
      :name="props.name"
      class="w-full p-2.5 bg-white/70 rounded border border-gray-300"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
    ></textarea>
  </div>
</template>

<style>
textarea:disabled {
  @apply bg-gray-300;
}
</style>

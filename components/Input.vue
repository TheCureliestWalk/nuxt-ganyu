<script setup lang="ts">
const props = defineProps<{
  name: string;
  type?: 'text' | 'password';
  disabled?: boolean;
}>();

const value = ref('');
</script>

<template>
  <div class="flex flex-col gap-2.5 justify-center items-center">
    <label :for="props.name" class="text-base text-gray-700 font-bold">{{
      props.name
    }}</label>
    <input
      :type="props.type ?? 'text'"
      :name="props.name"
      class="w-full p-2.5 bg-white/70 rounded border border-gray-300"
      :disabled="props.disabled"
      @input="$emit('value', $event.target.value)"
    />
  </div>
</template>

<style>
input:disabled {
  @apply bg-gray-300;
}
</style>

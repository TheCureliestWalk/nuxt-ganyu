<script setup lang="ts">
const props = defineProps<{
  name: string
  type: 'text'|'password'
}>()

</script>

<template>
  <div class="mb-2 flex gap-2.5 justify-center items-center">
    <label :for="props.name" class="text-lg text-gray-700 font-bold">{{ props.name }}</label>
    <input :type="props.type" :name="props.name" class="p-2.5 bg-white/70 rounded border border-gray">
  </div>
</template>
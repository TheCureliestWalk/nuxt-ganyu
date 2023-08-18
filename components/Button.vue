<script setup lang="ts">
const props = defineProps<{
  type?: 'primary'|'secondary',
  name: String,
  link?: String
}>()
</script>

<template>
  <div>
    <a :href="props.link" class="px-4 py-2 cursor-pointer bg-amber-300 text-amber-700 rounded hover:bg-amber-500 hover:text-white duration-200 ">{{ props.name ?? 'undefined button'}}</a>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  type?: 'primary'|'secondary',
  icon?: string,
  name: String,
  link?: String
}>()
</script>

<template>
  <div>
    <NuxtLink :to="props.link" class="px-4 py-2 flex gap-2 items-center cursor-pointer bg-amber-300 text-amber-700 rounded hover:bg-amber-500 hover:text-white duration-200 ">
      <Icon :name="props.icon ?? ''"/>
      <span>{{ props.name ?? 'undefined button'}}</span>
    </NuxtLink>
  </div>
</template>
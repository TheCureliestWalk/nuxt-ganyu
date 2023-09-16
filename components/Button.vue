<script setup lang="ts">
const props = defineProps<{
  type?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success';
  icon?: string;
  name: String;
  link?: String;
}>();
</script>

<template>
  <div>
    <NuxtLink
      :to="props.link"
      class="px-4 py-2 flex gap-2 tracking-6 items-center cursor-pointer rounded hover:text-white duration-200"
      :class="[
        {
          'bg-amber-300 text-amber-700 hover:bg-amber-500':
            props.type === 'primary' || !props.type,
        },
        {
          'bg-gray-300 text-gray-700 hover:bg-gray-500':
            props.type === 'secondary',
        },
        { 'bg-red-300 text-red-700 hover:bg-red-500': props.type === 'danger' },
        {
          'bg-yellow-300 text-yellow-700 hover:-yellow-500':
            props.type === 'warning',
        },
        {
          'bg-sky-300 text-sky-700 hover:bg-sky-500': props.type === 'success',
        },
      ]"
    >
      <Icon :name="props.icon ?? ''" />
      <span>{{ props.name ?? 'undefined button' }}</span>
    </NuxtLink>
  </div>
</template>

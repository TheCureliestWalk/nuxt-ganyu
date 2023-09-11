<script setup lang="ts">
const props = defineProps<{
  size?: 'l' | 'm' | 's';
  border?: String;
}>();

const size = computed(() => {
  if (props.size === 'l') return 'col-span-9';
  else if (props.size === 'm') return 'col-span-6';
  else if (props.size === 's') return 'col-span-3';
  else return 'col-span-3';
});
</script>

<template>
  <div :class="{ 'bg-red-700': props.border }">
    <div
      class="bg-white/30 p-4 border border-zinc-300 flex flex-col items-center"
      :class="size"
    >
      <slot />
    </div>
  </div>
</template>

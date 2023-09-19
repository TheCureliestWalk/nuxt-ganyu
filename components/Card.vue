<script lang="ts" setup>
const props = defineProps<{
  name?: string;
  icon?: string;
  number?: string | number;
}>();
</script>

<template>
  <div
    class="p-4 flex flex-col rounded shadow-md w-full bg-gradient-to-r from-red-400 to-purple-400 hover:scale-110 duration-200 delay-50 cursor-pointer"
  >
    <div class="flex gap-2 items-center text-white font-bold text-xl">
      <Icon :name="props.icon" />
      <h1>{{ props.name }}</h1>
    </div>
    <div>
      <h2 class="text-white font-bold text-4xl text-right">
        {{ props.number }}
      </h2>
    </div>
  </div>
</template>

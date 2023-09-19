<script setup lang="ts">
const props = defineProps<{
  title: string;
  message: string;
}>();
</script>

<template>
  <!-- Alert Notification -->
  <div
    class="p-4 w-full flex justify-between bg-white border-1 border-gray-100 shadow-sm rounded"
  >
    <div class="flex flex-col gap-2 items-baseline">
      <h1
        class="flex items-center font-bold text-red-500 tracking-wide text-lg"
      >
        <Icon name="bx:bxs-bell-ring" />
        <span class="pl-2"> Warning: </span>
      </h1>
      <p class="text-gray-700 text-sm">
        There's no error here, just testing message
      </p>
    </div>

    <div
      class="text-gray-700 font-bold hover:bg-gray-300 rounded cursor-pointer"
    >
      <Icon name="bx:x" size="22" />
    </div>
  </div>
</template>

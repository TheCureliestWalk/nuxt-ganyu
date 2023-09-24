<template>
  <div
    class="absolute left-0 right-0 top-10 mx-auto max-w-sm bg-green-400 text-white py-2 px-4 rounded-md shadow-lg duration-300 transition-all"
    :class="{ hidden: !message }"
  >
    <div class="flex gap-2 items-center justify-between">
      <div class="flex gap-2 items-center">
        <Icon name="bx:check-circle" class="w-4 h-4" />
        <span class="font-semibold">{{ message ?? 'no message' }}</span>
      </div>

      <div>
        <Icon name="bx:x-circle" class="w-4 h-4" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['message']);
</script>

<template>
  <div class="p-4 col-span-3 w-full bg-white rounded shadow">
    <h1 class="text-lg font-bold text-gray-700 tracking-wide">Users</h1>
    <div class="divide-x divide-gray-500" />

    <p v-if="user">{{ user }}</p>
    <p v-if="pending" class="font-bold text-center text-sky-700">
      Loading Data...
    </p>
    <p v-if="error" class="text-red-400">{{ error.message }}</p>
  </div>
</template>

<script setup>
const {
  data: user,
  error,
  pending,
} = await useLazyFetch('/api/user/getAllUsers', {
  method: 'GET',
});
</script>

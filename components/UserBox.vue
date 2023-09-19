<template>
  <div class="p-4 col-span-3 w-full bg-white rounded shadow">
    <h1 class="text-lg font-bold text-gray-700 tracking-wide">Users</h1>
    <div class="divide-x divide-gray-500" />

    <p>{{ user }}</p>
    <p v-if="error" class="text-red-400">{{ error.message }}</p>
  </div>
</template>

<script setup>
const { data: user, error } = useFetch('/api/user/getAllUsers');
</script>

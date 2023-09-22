<template>
  <div class="p-4 col-span-6 w-full bg-white rounded shadow">
    <h1 class="text-lg font-bold text-gray-700 tracking-wide">
      Users ({{ users ? users?.length : 0 }})
    </h1>
    <div class="divide-x divide-gray-500" />

    <div v-if="users">
      <table class="table-fixed w-full">
        <thead class="bg-purple-400 shadow-xs">
          <tr class="tracking-wide text-white">
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" class="text-sm">
            <td class="border-r">{{ user.id }}</td>
            <td class="border-r">{{ user.username }}</td>
            <td class="border-r">{{ user.email }}</td>
            <td class="overflow-auto">{{ user.password }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-if="pending" class="font-bold text-center text-sky-700">
      Loading Data...
    </p>
    <p v-if="error" class="text-red-400">{{ error.message }}</p>
  </div>
</template>

<script setup>
const {
  data: users,
  error,
  pending,
} = await useLazyFetch('/api/user', {
  method: 'GET',
});
</script>

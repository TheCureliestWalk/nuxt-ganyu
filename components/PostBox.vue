<template>
  <div class="p-4 col-span-4 w-full bg-white">
    <h1 class="text-lg font-bold text-gray-700 tracking-wide">Posts</h1>
    <div class="divide-x divide-gray-500" />
    <!-- Action Button -->
    <div class="flex gap-2 items-center my-2 tracking-wide">
      <div v-if="pending" class="font-bold text-xs mx-auto">Loading...</div>
      <button
        class="px-4 py-2 bg-emerald-500 font-bold text-white rounded shadow hover:bg-emerald-700"
      >
        <Icon name="bx:list-plus" size="22" />
        <span>Create</span>
      </button>
    </div>
    <!-- Latest Post -->
    <p class="text-sm text-gray-500">Latest Posts (10)</p>
    <ul>
      <li v-for="post in posts" class="cursor-pointer hover:text-gray-500">
        <div class="flex gap-2 items-center">
          <span class="font-bold tracking-wide">-> {{ post.title }}</span>
          <span class="text-sm">10 min ago | by: Iho</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: posts, pending } = await useFetch('/api/post/getAllPosts', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
});
</script>

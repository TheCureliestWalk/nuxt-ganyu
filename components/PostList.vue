<script setup lang="ts">
interface posts {
  posts: {
    id: number;
    title: string;
    reaction: number;
    userId: number;
  };
}
const { data } = await useFetch<{ posts: posts[] }>(
  'https://dummyjson.com/posts?limit=10&skip=10&select=title,reactions,userId'
);
</script>

<template>
  <div>
    <NuxtLink to="/" v-for="post in data.posts" :key="post.id">{{
      post.title
    }}</NuxtLink>
  </div>
</template>

<style scoped>
a {
  @apply flex font-bold underline underline-offset-4 hover:text-amber-500;
}
</style>

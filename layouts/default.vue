<template>
  <div
    class="flex bg-gradient-to-r from-sky-100 to-pink-100 w-full min-h-screen"
  >
    <Sidebar />
    <div class="w-full">
      <Header />
      <Suspense>
        <template #default>
          <NuxtPage class="p-4" />
        </template>
      </Suspense>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

body {
  font-family: 'Open Sans', 'Roboto', sans-serif;
}
</style>

<script setup lang="ts">
import Sidebar from '~/components/Sidebar.vue';
</script>

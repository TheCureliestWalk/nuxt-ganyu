<template>
  <div
    class="flex bg-gradient-to-r from-sky-100 to-pink-100 w-full min-h-screen"
  >
    <ClientOnly>
      <Sidebar />
    </ClientOnly>
    <div class="w-full">
      <ClientOnly>
        <Header />
        <NuxtLoadingIndicator />
        <Toast />
      </ClientOnly>
      <NuxtPage class="p-4" />
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

<script setup lang="ts">
import Sidebar from '~/components/Sidebar.vue';
</script>

<template>
  <div
    class="flex bg-gradient-to-r from-sky-100 to-pink-100 w-full min-h-screen"
  >
    Mobile Version
    <div class="w-full">
      <Header />
      <NuxtPage class="p-4" />
    </div>
  </div>
</template>

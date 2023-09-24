<template>
  <div
    :class="isCollapse ? 'w-64' : 'w-16'"
    class="relative top-0 left-0 flex flex-col min-h-screen bg-slate-900 text-white shadow-md overflow-hidden duration-300"
  >
    <!-- Logo -->
    <div class="text-4xl font-bold leading-6 my-8 mx-auto">
      <NuxtLink
        class="flex flex-col gap-2 items-center hover:text-sky-500 duration-200"
        href="/"
      >
        <img
          alt="Ganyu"
          src="/ganyu.png"
          :class="isCollapse ? 'w-32 h-32' : 'w-12 h-12'"
        />
        <h3 v-if="isCollapse" class="font-bold text-2xl">Ganyu</h3>
      </NuxtLink>
    </div>
    <!-- Menu -->
    <ul class="p-4">
      <NuxtLink
        :to="menu.link"
        v-for="menu in menus"
        class="flex gap-2 tracking-6 items-center p-2 cursor-pointer rounded hover:bg-slate-300 hover:text-slate-900 hover:font-bold duration-100 hover:scale-110 hover:translate-x-5"
        :class="[
          {
            hidden: !user && menu.onlyAuthed,
          },
        ]"
      >
        <Icon :name="menu.icon" />
        <span v-if="isCollapse">{{ menu.name }}</span>
      </NuxtLink>
    </ul>
    <!-- Collapse button -->
    <button
      @click="() => (isCollapse = !isCollapse)"
      class="mt-8 py-2 bg-slate-800 hover:bg-slate-300 hover:text-slate-900 duration-100"
    >
      <Icon name="bx:arrow-back" :class="{ 'rotate-180': !isCollapse }" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useStorage } from '@vueuse/core';
const userFromStorage = JSON.parse(localStorage.getItem('user')!);
const user = ref(userFromStorage);

type MenuType = {
  name: string;
  link: string;
  icon: string;
  onlyAuthed?: boolean;
};

const isCollapse = useStorage('sidebar-collapse', true);

const menus = ref<MenuType[]>([
  {
    name: 'Home',
    link: '/',
    icon: 'bx:bxs-home',
    onlyAuthed: false,
  },
  {
    name: 'Apps',
    link: '/app',
    icon: 'game-icons:abstract-050',
    onlyAuthed: true,
  },
  {
    name: 'My Profile',
    link: '/profile',
    icon: 'bx:user',
    onlyAuthed: true,
  },
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: 'fluent-emoji-high-contrast:bubbles',
    onlyAuthed: true,
  },
  {
    name: 'Settings',
    link: '/settings',
    icon: 'bx:bxs-cog',
    onlyAuthed: true,
  },
]);
</script>

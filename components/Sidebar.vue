<template>
  <div
    :class="isCollapse ? 'w-64' : 'w-16'"
    class="flex flex-col min-h-screen bg-slate-900 text-white shadow-md overflow-hidden duration-300"
  >
    <div class="text-4xl font-bold leading-6 my-8 mx-auto">
      <NuxtLink
        class="flex flex-col gap-2 items-center hover:text-sky-500 duration-200"
        href="/"
      >
        <NuxtImg
          src="/ganyu.png"
          :class="isCollapse ? 'w-32 h-32' : 'w-8 h-8'"
        />
        <h3 v-if="isCollapse" class="font-bold text-2xl">Ganyu</h3>
      </NuxtLink>
    </div>
    <!-- Full Size -->
    <ul v-if="isCollapse" class="p-4">
      <NuxtLink
        :to="menu.link"
        v-for="menu in menus"
        class="flex gap-2 items-center p-2 cursor-pointer rounded hover:bg-slate-300 hover:text-slate-900 hover:font-bold duration-100 hover:scale-110 hover:translate-x-5"
        :class="{ 'hidden': (!user && menu.onlyAuthed) || (user && menu.hideWhenAuth) }"
      >
        <Icon :name="menu.icon" />
        <span>{{ menu.name }}</span>
      </NuxtLink>
    </ul>
    <!-- Minimal Size -->
    <ul v-else class="flex flex-col gap-4">
      <NuxtLink
        :to="menu.link"
        v-for="menu in menus"
        class="flex gap-2 justify-center w-16 h-16 items-center cursor-pointer rounded hover:bg-slate-300 hover:text-slate-900 hover:font-bold duration-100"
      >
        <Icon :name="menu.icon" size="24" />
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
const user = useSupabaseUser()

type MenuType = {
  name: string;
  link: string;
  icon?: string;
  onlyAuthed?: boolean;
  hideWhenAuth?: boolean;
};

const isCollapse = useStorage('sidebar-collapse', true);

const menus = ref<MenuType[]>([
  {
    name: 'Home',
    link: '/',
    icon: 'bx:bxs-home',
    onlyAuthed: false,
    hideWhenAuth: false,
  },
  {
    name: 'Apps',
    link: '/app',
    icon: 'game-icons:abstract-050',
    onlyAuthed: true,
    hideWhenAuth: false,
  },
  {
    name: 'My Profile',
    link: '/profile',
    icon: 'bx:user',
    onlyAuthed: true,
    hideWhenAuth: false,
  },
  {
    name: 'Register',
    link: '/register',
    icon: 'bx:bxs-user-plus',
    onlyAuthed: false,
    hideWhenAuth: true,
  },
  {
    name: 'Login',
    link: '/login',
    icon: 'bx:bxs-user',
    onlyAuthed: false,
    hideWhenAuth: true,
  },
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: 'fluent-emoji-high-contrast:bubbles',
    onlyAuthed: true,
    hideWhenAuth: false,
  },
  {
    name: 'Settings',
    link: '/settings',
    icon: 'bx:bxs-cog',
    onlyAuthed: true,
    hideWhenAuth: false,
  },
]);
</script>

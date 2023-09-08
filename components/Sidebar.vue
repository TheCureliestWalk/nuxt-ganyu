

<template>
  <div :class="isCollapse ? 'w-64' : 'w-16'" class="flex flex-col min-h-screen bg-slate-900 text-white shadow-md overflow-hidden duration-300">
    <div class="text-4xl font-bold leading-6 my-8 mx-auto">
      <NuxtLink class="flex flex-col gap-2 items-center hover:text-sky-500 duration-200" href="/">
        <NuxtImg src="/ganyu.png" :class="isCollapse ? 'w-32 h-32': 'w-8 h-8' "/>
        <h3 v-if="isCollapse" class="font-bold text-2xl">Ganyu</h3>
      </NuxtLink>
    </div>
    <!-- Full Size -->
    <ul v-if="isCollapse" class="p-4">
      <NuxtLink :to="menu.link" v-for="menu in menus" class="flex gap-2 items-center p-2 cursor-pointer rounded hover:bg-slate-300 hover:text-slate-900 hover:font-bold duration-100 hover:scale-110 hover:translate-x-5">
        <Icon :name="menu.icon"/>
        <span>{{ menu.name }}</span>
      </NuxtLink>
    </ul>
    <!-- Minimal Size -->
    <ul v-else class="flex flex-col gap-4">
      <NuxtLink :to="menu.link" v-for="menu in menus" class="flex gap-2 justify-center w-16 h-8 items-center cursor-pointer rounded hover:bg-slate-300 hover:text-slate-900 hover:font-bold duration-100">
        <Icon :name="menu.icon" size="20"/>
      </NuxtLink>
    </ul>
    <!-- Collapse button -->
    <button @click="() => isCollapse = !isCollapse" class="mt-8 p-2 bg-slate-800 hover:bg-slate-300 hover:text-slate-900 duration-100">
      <Icon name="bx:arrow-back"/>
    </button>

  </div>
</template>

<script setup lang="ts">
type MenuType = {
  name: string,
  link: string|undefined,
  icon?: string|undefined
}

const isCollapse = ref(false)

const menus = ref<MenuType[]>([
  {
    name: 'Home',
    link: '/',
    icon: 'bx:bxs-home'
  },
  {
    name: 'Apps',
    link: '/app',
    icon: 'game-icons:abstract-050'
  },
  {
    name: 'My Profile',
    link: '/profile',
    icon: 'bx:user'
  },
  {
    name: 'Register',
    link: '/register',
    icon: 'bx:bxs-user-plus'
  },
  {
    name: 'Login',
    link: '/login',
    icon: 'bx:bxs-user'
  },
  {
    name: 'Quest/Bounty',
    link: '/quests',
    icon: 'fluent-emoji-high-contrast:bubbles'
  },
  {
    name: 'Settings',
    link: '/settings',
    icon: 'bx:bxs-cog'
  }
])
</script>
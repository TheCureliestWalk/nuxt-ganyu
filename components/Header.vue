<template>
  <div class="p-4 bg-gradient-to-r from-slate-700 to-slate-900 flex flex-col md:flex-row justify-between shadow text-white">
    <h1 class="text-2xl font-bold">
      <NuxtLink class="hover:text-sky-500 duration-200" href="/">
        Ganyu
      </NuxtLink>
    </h1>
    <ul class="flex items-center flex-col md:flex-row">
      <li v-for="menu in menus">
        <NuxtLink class="flex gap-1 px-2 items-center hover:text-amber-500 hover:bg-gray-900 duration-100 delay-75" :to="menu.link">
          <Icon v-if="menu.icon" :name="menu.icon"/>
          {{ menu.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
type MenuType = {
  name: string,
  link: string,
  icon?: string
}

const menus = ref<MenuType[]>([
  {
    name: 'Home',
    link: '/',
    icon: 'bx:bxs-home'
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
    name: 'Apps',
    link: '/app',
    icon: 'game-icons:abstract-050'
  },
  {
    name: 'Settings',
    link: '/settings',
    icon: 'bx:bxs-cog'
  }
])
</script>

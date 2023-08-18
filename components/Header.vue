<template>
  <div class="p-4 bg-gradient-to-r from-slate-700 to-slate-900 flex flex-col md:flex-row justify-between shadow text-white">
    <h1 class="text-2xl font-bold">
      <a class="hover:text-sky-500 duration-200" href="/">
        Ganyu
      </a>
    </h1>
    <ul class="flex items-center flex-col md:flex-row">
      <li v-for="menu in menus">
        <a class="px-2 hover:text-amber-500 hover:bg-gray-900 duration-100 delay-75" :href="menu.link">
          {{ menu.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
type MenuType = {
  name: string,
  link: string
}

const menus = ref<MenuType[]>([
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Quest/Bounty',
    link: '/quests'
  },
  {
    name: 'Character',
    link: '/characters'
  },
  {
    name: 'Settings',
    link: '/settings'
  }
])
</script>

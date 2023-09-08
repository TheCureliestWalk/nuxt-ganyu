<template>
  <div v-if="user" class="p-4 bg-gradient-to-r from-slate-700 to-slate-900 flex gap-6 justify-end items-center shadow text-white">

    <div>status: online</div>

    <!-- Profile Button -->
    <HlPopover>
      <HlPopoverButton class="outline-none flex items-center ">
        <NuxtImg src="/ganyu.png" class="w-8 h-8 outline outline-2 outline-offset-2 rounded-full"/>
        <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0">

            <HlPopoverPanel class="fixed z-10 top-12 right-4 flex flex-col gap-2 bg-slate-700 p-4 shadow rounded">
              <NuxtLink v-for="menu in menus" :to="menu.link"
                        class="flex gap-2 items-center p-1 border-b border-slate-700 hover:text-slate-700 hover:bg-slate-300 rounded">
                <Icon :name="menu.icon"/>
                {{ menu.name }}
              </NuxtLink>
            </HlPopoverPanel>

        </transition>
      </HlPopoverButton>
    </HlPopover>
  </div>
</template>

<script setup>
const user = useSupabaseUser()

const menus = ref([
  {
    name: 'My Profile',
    icon: 'bx:bxs-user',
    link: '/profile'
  },
  {
    name: 'Mailbox',
    icon: 'bx:bxs-envelope-open',
    link: '/mail'
  },
  {
    name: 'Settings',
    icon: 'bx:bxs-cog',
    link: '/settings'
  },
  {
    name: 'Log Out',
    icon: 'bx:log-out',
    link: ''
  },
])
</script>

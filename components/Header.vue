<template>
  <div
    v-if="user"
    class="flex gap-2 p-4 bg-gradient-to-r from-slate-700 to-slate-900 flex gap-6 justify-end items-center shadow text-white"
  >
    <!-- Account Balance -->
    <div class="flex gap-1 items-center">
      <Icon name="bx:coin" />
      <span>{{ '0' }}</span>
    </div>
    <!-- Status -->
    <div class="flex gap-1 items-center">
      <i class="rounded-full p-1 bg-emerald-300" />
      <span>online</span>
      <span> | </span>
      <span>{{ user.username }}</span>
    </div>

    <!-- Profile Button -->
    <HlPopover>
      <HlPopoverButton class="outline-none flex items-center">
        <img
          :src="user.avatar"
          class="w-8 h-8 outline outline-2 outline-offset-2 rounded-full"
        />
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="translate-y-1 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-1 opacity-0"
        >
          <HlPopoverPanel
            class="fixed z-10 top-12 right-4 flex flex-col gap-2 bg-white text-gray-700 dark:bg-slate-700 p-4 shadow rounded"
          >
            <NuxtLink
              v-for="menu in menus"
              :to="menu.link"
              class="flex gap-2 items-center p-1 text-sm hover:text-slate-700 hover:bg-slate-300 rounded"
            >
              <Icon :name="menu.icon" />
              {{ menu.name }}
            </NuxtLink>

            <button
              class="flex gap-2 items-center p-1 text-sm text-red-700 hover:bg-slate-300 rounded"
              @click="logOut"
            >
              <Icon name="bx:log-out" />
              <span>Log Out</span>
            </button>
          </HlPopoverPanel>
        </transition>
      </HlPopoverButton>
    </HlPopover>
  </div>
</template>

<script setup>
const userFromStorage = JSON.parse(localStorage.getItem('user'));
const user = ref(userFromStorage);

const logOut = () => {
  const { data } = useFetch('/api/auth/logout', { method: 'POST' });
  if (data) {
    return navigateTo('/');
  }
};
const menus = ref([
  {
    name: 'My Profile',
    icon: 'bx:bxs-user',
    link: '/profile',
  },
  {
    name: 'Mailbox',
    icon: 'bx:bxs-envelope-open',
    link: '/mail',
  },
  {
    name: 'Settings',
    icon: 'bx:bxs-cog',
    link: '/settings',
  },
]);
</script>

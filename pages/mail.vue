<template>
  <div>
    <!-- Mailbox -->
    <HlTabGroup
      as="div"
      vertical
      class="grid grid-cols-5 gap-2 bg-white"
      :defaultIndex="0"
    >
      <HlTabList class="col-span-1 flex flex-col w-[300px]">
        <HlTab
          v-for="(tab, idx) in mailTabs"
          as="div"
          :key="idx"
          v-slot="{ selected }"
          class="flex gap-2 items-center font-bold p-4 border-t border-b text-gray-700 hover:bg-gray-100 cursor-pointer"
          :class="{ 'bg-red-400': selected }"
        >
          <Icon :name="tab.icon" />
          <span>
            {{ tab.name }}
          </span></HlTab
        >
      </HlTabList>

      <HlTabPanels class="p-4 col-span-3">
        <HlTabPanel class="overflow-auto">
          <h1 class="font-bold text-2xl tracking-wide">Title of The Message</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            reprehenderit distinctio sequi repudiandae voluptatem recusandae
            corrupti. A voluptatem ipsum ex harum cum asperiores, iure odio
            perspiciatis magni at nulla dolorem?
          </p>
        </HlTabPanel>
        <HlTabPanel> this is 2 MESSAGE </HlTabPanel>
        <HlTabPanel> this is 3 MESSAGE </HlTabPanel>
      </HlTabPanels>
    </HlTabGroup>
  </div>
</template>

<script setup>
const mailTabs = ref([
  {
    name: 'All Messages',
    icon: 'bx:bxs-envelope',
    message: [
      {
        id: 1,
        text: 'Hey, I wannaF U!',
      },
    ],
  },
  { name: 'Unread Messages', icon: 'bx:bxs-envelope', message: [] },
  { name: 'Important Messages', icon: 'bx:bxs-envelope', message: [] },
]);
</script>

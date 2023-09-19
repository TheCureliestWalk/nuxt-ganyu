<template>
  <div class="flex flex-col gap-6">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card
        v-for="card in cardData"
        :key="card.name"
        :name="card.name"
        :icon="card.icon"
        :number="card.number"
      />
    </div>

    <Alert />

    <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <Chatbox />
      <PostBox />
      <UserBox />
    </div>
  </div>
</template>

<script setup>
const cardData = ref([
  {
    name: 'Total Users',
    icon: 'bx:bxs-user',
    number: '3,212',
  },
  {
    name: 'Active Users',
    icon: 'bx:user-check',
    number: 100,
  },
  {
    name: 'Total Revenue',
    icon: 'bx:circle-three-quarter',
    number: '$100,000',
  },
  {
    name: 'Bandwidth Usage',
    icon: 'bx:meteor',
    number: '31.2 GB',
  },
]);
</script>

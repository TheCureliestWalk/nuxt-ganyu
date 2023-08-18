<template>
  <div>
    <BlockColumn>
      <Block size="l">
        <img class="mb-2 ganyu-img" src="/ganyu.png" width="128" height="128" alt="Ganyu" />
        <h3 class="font-bold text-2xl">Her Name is</h3>
        <h1 class="font-bold tracking-wide text-4xl text-sky-500">~Ganyu~</h1>
        <small class="tracking-wide text-sm">She is pout when you make her disappoint.</small>
      </Block>
      <Block size="s">
        <img class="mb-2 ganyu-img" src="/782410848014041108.png" width="128" height="128" alt="Ganyu" />
        <h3 class="font-bold text-2xl">Her Name is</h3>
        <h1 class="font-bold tracking-wide text-4xl text-sky-500">~KeqAwkward~</h1>
        <small class="tracking-wide text-sm">She is pout when you make her disappoint.</small>
      </Block>
    </BlockColumn>

    <BlockColumn>
      <BlockHeader title="Authentication">
        <h1>You need to login to view your stats.</h1>
        <Button name="Login" link="https://www.bungie.net/en/OAuth/Authorize?client_id=44772&response_type=code"/>
      </BlockHeader>
      <Block size="s">
        <img class="mb-2 ganyu-img" src="/766139105645035540.png" width="128" height="128" alt="Ganyu" />
        <h3 class="font-bold text-2xl">Her Name is</h3>
        <h1 class="font-bold tracking-wide text-4xl text-sky-500">~KeqLove~</h1>
        <small class="tracking-wide text-sm">She is pout when you make her disappoint.</small>
      </Block>
      <BlockHeader title="News">
        <h1>Action Button</h1>
        <p>~ There is no news now. Please come back and check regulary.</p>
      </BlockHeader>
    </BlockColumn>

    <BlockColumn>
      <BlockHeader title="Test Loading Timeout">
      <p v-if="isLoading">Loading...</p>
        <p v-else>Done Loading</p>
      </BlockHeader>
    </BlockColumn>
    <Alert title="TITLE" message="MESSAGE"/>
  </div>
</template>

<script setup>
import Block from '~/components/Block.vue'
import BlockColumn from "~/components/BlockColumn.vue";
import Alert from "~/components/Alert.vue";

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  },1000)
})
</script>
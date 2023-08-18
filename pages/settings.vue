<script setup lang="ts">

import Input from "~/components/Input.vue";
</script>

<template>
  <BlockColumn>
    <BlockHeader title="Settings">
      <Input name="Name" type="text"/>
      <Button name="Save"/>
    </BlockHeader>
  </BlockColumn>
</template>

<style scoped>

</style>
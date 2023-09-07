<script setup lang="ts">

import Input from "~/components/Input.vue";
</script>

<template>
  <BlockColumn class="max-w-md mx-auto">
    <BlockHeader title="Settings">
      <Input name="Name" type="text"/>
      <Button name="Save" icon="bx:bxs-save"/>
    </BlockHeader>
  </BlockColumn>
</template>

<style scoped>

</style>
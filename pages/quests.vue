<template>
  <div>
    <BlockColumn>
      <BlockHeader title="Destiny 2">
        Query_name: {{ $route.query.code }}
      </BlockHeader>
    </BlockColumn>
  </div>
</template>

<script setup>
const route = useRoute()

onMounted(() => console.log(route.query.code))
</script>

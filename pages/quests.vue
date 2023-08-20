<template>
  <div>
    <BlockColumn>
      <BlockHeader title="Destiny 2">
        Query_name: {{ code }}
      </BlockHeader>
    </BlockColumn>
  </div>
</template>

<script setup>

const route = useRoute()
const code = useState('code', () => route.query.code)

</script>

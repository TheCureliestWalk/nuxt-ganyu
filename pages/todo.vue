<script setup>
  const supabase = useSupabaseClient()
  const { data, error } = supabase.from('todo').select('*')
</script>

<template>
  <BlockColumn>
    <Block>
      {{ data }}
    </Block>
  </BlockColumn>
</template>
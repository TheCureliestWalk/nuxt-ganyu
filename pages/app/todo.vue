<script setup>
const supabase = useSupabaseClient();
const { data, error } = await supabase.from('profile').select('*');
</script>

<template>
  <BlockColumn>
    <Block>
      {{ data }}
    </Block>
  </BlockColumn>
</template>

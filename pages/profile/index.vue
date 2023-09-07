<template>
  <BlockColumn>
    <BlockHeader title="Profile" class="max-w-md mx-auto" v-if="user">
      <NuxtImg :v-if="true" src="ganyu.png" class="rounded-full w-32 h-32 mx-auto"/>
      <h3>{{ user?.email }}</h3>
      <Button name="Logout" icon="bx:log-out" @click="logOut"/>
    </BlockHeader>
    <p v-else>~You are not logged in.~</p>
  </BlockColumn>
  {{ user }}
</template>

<script setup>

const user = useSupabaseUser()

const logOut = async() => {
  const supabase = useSupabaseClient()

  const { error } = await supabase.auth.signOut()

  if (error) {
    alert(error)
    return null;
  }

  return navigateTo('/')
}
</script>

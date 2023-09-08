<template>
  <BlockColumn>
    <BlockHeader title="Profile" class="max-w-md mx-auto">
      <NuxtImg :src="user?.user_metadata?.avatar_url ?? 'ganyu.png'" class="rounded-full w-32 h-32 mx-auto"/>
      <h3>{{ user?.email ?? 'no email found.'}}</h3>
      <Button name="Logout" icon="bx:log-out" @click="logOut"/>
    </BlockHeader>
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

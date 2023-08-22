<template>
  <BlockColumn>
    <BlockHeader title="Login">
      <p>Status: {{ userState }}</p>
      <p>Data: {{ data }}</p>
      <img v-if="status === 'authenticated'" :src="data?.user.image" alt="Profile Image">
      <Button v-if="status === 'unauthenticated'" name="Login" @click="login()"/>
      <Button v-else name="Logout" @click="logout()"/>
    </BlockHeader>
  </BlockColumn>
</template>

<script setup>
const { status, data, signIn, signOut } = useAuth()

const userState = computed(() => {
  if (status.value === 'unauthenticated') {
    return 'Not Logged In'
  }
  else if (status.value === 'authenticated') {
    return 'Logged In'
  }
})
async function login() {
  await signIn('github') // Sign in the user
}

async function logout() {
  await signOut({ callbackUrl: '/' }) // Sign out the user
}
</script>
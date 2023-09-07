<template>
  <BlockColumn>
    <BlockHeader title="Login" class="max-w-md mx-auto">
      <div class="flex flex-col justify-center items-center gap-2.5">
        <Input name="Email" type="text" v-model="email"/>
        <Input name="Password" type="password" v-model="password"/>
        <Button name="Sign In" icon="bx:bxs-user" @click="signInPassword" :disabled="isLoading"/>
        <Button name="Sign In /w GitHub" icon="bx:bxs-user" @click="signInGitHub" :disabled="isLoading"/>
      </div>

    </BlockHeader>
  </BlockColumn>
</template>

<script setup>

const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')
const isLoading = ref(false)

const signInPassword = async () => {
  try {
    isLoading.value = true
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
    if (error) throw error
    if (!error) navigateTo('/app')
    alert('Check your email for the login link!')
  } catch (error) {
    alert(error.error_description || error.message)
  } finally {
    isLoading.value = false
  }
}

const signInGitHub = async () => {
  try {
    isLoading.value = true
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'github' })

    if (error) throw error
  } catch (error) {
    alert(error.error_description || error.message)
  } finally {
    isLoading.value = false
  }
}
</script>
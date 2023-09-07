<template>
  <BlockColumn>
    <BlockHeader title="Register a New Account" class="max-w-md mx-auto">
      <form class="flex flex-col justify-center items-center gap-2.5">
        <label for="email">Email</label>
        <input name="email" type="text" v-model="email" class="p-1.5 bg-gray-300 rounded">
        <label for="email">Password</label>
        <input name="password" type="password" v-model="password" class="p-1.5 bg-gray-300 rounded">
        <button type="submit" @click.prevent="signUpPassword" :disabled="isLoading" class="mt-2.5 p-2 bg-amber-500 text-white rounded cursor-pointer">
          <Icon name="bx:bxs-user"/>
          <span>
            Register / Sign Up
          </span>
        </button>
      </form>
    </BlockHeader>
  </BlockColumn>
</template>

<script setup>

const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')
const isLoading = ref(false)

const signUpPassword = async () => {
  try {
    isLoading.value = true
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value
    })
    if (error) throw error
    if (data) {
      alert('Registered! Please comfirm your email.')
      navigateTo('/')
    }

  } catch (error) {
    alert(error.error_description || error.message)
  } finally {
    isLoading.value = false
  }
}
</script>
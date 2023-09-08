<template>
  <BlockColumn>
    <BlockHeader title="Register a New Account" class="max-w-md mx-auto">
      <form class="flex flex-col justify-center items-center gap-2.5">
        <label for="email">Email</label>
        <ElInput name="email" type="text" v-model="email" class="p-1.5" />
        <label for="email">Password</label>
        <ElInput name="password" type="password" v-model="password" class="p-1.5" />
        <ElButton type="success" @click.prevent="signUpPassword" :disabled="isLoading" class="mt-2.5">
          <Icon name="bx:bxs-user"/>
          <span>
            Register / Sign Up
          </span>
        </ElButton>
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
    alert(error)
  } finally {
    isLoading.value = false
  }
}
</script>
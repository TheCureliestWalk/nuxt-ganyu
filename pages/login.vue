<template>
  <BlockColumn>
    <BlockHeader title="Login" class="max-w-md mx-auto">
      <form class="flex flex-col justify-center items-center gap-2.5">
        <label for="email">Email</label>
        <ElInput name="email" type="text" v-model="email" class="p-1.5" />
        <label for="email">Password</label>
        <ElInput
          name="password"
          type="password"
          v-model="password"
          class="p-1.5"
        />
        <ElButton
          type="primary"
          @click.prevent="signInPassword"
          :disabled="isLoading"
          class="mt-2.5"
        >
          <Icon :name="isLoading ? 'svg-spinners:180-ring' : 'bx:bxs-user'" />
          <span> Login /w Password </span>
        </ElButton>
        <ElButton
          type="warning"
          @click.prevent="signInGitHub"
          :disabled="isLoading"
          class="p-2"
        >
          <Icon :name="isLoading ? 'svg-spinners:180-ring' : 'bx:bxs-user'" />
          <span> Login /w GitHub </span>
        </ElButton>
      </form>
    </BlockHeader>
  </BlockColumn>
</template>

<script setup>
const supabase = useSupabaseClient();
const email = ref('');
const password = ref('');
const isLoading = ref(false);

const signInPassword = async () => {
  try {
    isLoading.value = true;
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    if (!error) navigateTo('/app');
  } catch (error) {
    alert(error.error_description || error.message);
  } finally {
    isLoading.value = false;
  }
};

const signInGitHub = async () => {
  try {
    isLoading.value = true;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });

    if (error) throw error;
  } catch (error) {
    alert(error.error_description || error.message);
  } finally {
    isLoading.value = false;
  }
};
</script>

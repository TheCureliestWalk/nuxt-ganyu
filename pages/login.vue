<template>
  <div>
    <BlockColumn>
      <BlockHeader title="Login" class="w-full max-w-md mx-auto">
        <div class="flex flex-col items-center gap-2.5">
          <label for="email">Email</label>
          <ElInput name="email" type="text" v-model="email" />
          <label for="email">Password</label>
          <ElInput name="password" type="password" v-model="password" />

          <ElButton
            type="success"
            @click.prevent="signInPassword"
            :disabled="isLoading"
            class="w-full"
          >
            <div class="flex gap-1">
              <Icon
                :name="isLoading ? 'svg-spinners:180-ring' : 'bx:bxs-user'"
              />
              <span> Login /w Password </span>
            </div>
          </ElButton>

          <ElButton
            type="warning"
            @click.prevent="signInGitHub"
            :disabled="isLoading"
            class="w-full"
          >
            <div class="flex gap-1">
              <Icon
                :name="isLoading ? 'svg-spinners:180-ring' : 'bx:bxl-github'"
              />
              <span> Login /w GitHub </span>
            </div>
          </ElButton>
        </div>
      </BlockHeader>
    </BlockColumn>
  </div>
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
    if (!error) {
      ElMessage({
        message: 'Login success.',
        type: 'success',
      });
      return navigateTo('/app');
    }
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
    if (!error) {
      ElMessage({
        message: 'Login success.',
        type: 'success',
      });
      return navigateTo('/app');
    }
  } catch (error) {
    alert(error.error_description || error.message);
  } finally {
    isLoading.value = false;
  }
};
</script>

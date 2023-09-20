<template>
  <div>
    <BlockColumn>
      <BlockHeader title="Login" class="w-full max-w-md mx-auto">
        <div class="flex flex-col items-center gap-2.5">
          <label for="email" class="font-bold">Email</label>
          <input
            type="text"
            class="w-min-md w-full py-2 px-4 rounded text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            v-model="email"
            placeholder="user@email.com"
          />
          <label for="email" class="font-bold">Password</label>
          <input
            type="text"
            class="w-min-md w-full py-2 px-4 rounded text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            v-model="password"
            placeholder="your secret password"
          />

          <button
            @click.prevent="signInPassword"
            :disabled="isLoading"
            class="w-full bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <div
              class="flex gap-1 items-center justify-center font-semibold tracking-wide"
            >
              <Icon
                :name="isLoading ? 'svg-spinners:180-ring' : 'bx:bxs-user'"
              />
              <span> Login /w Password </span>
            </div>
          </button>

          <button
            type="warning"
            @click.prevent="signInGitHub"
            :disabled="isLoading"
            class="w-full bg-emerald-400 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
          >
            <div
              class="flex gap-1 items-center justify-center text-base tracking-wide"
            >
              <Icon
                :name="isLoading ? 'svg-spinners:180-ring' : 'bx:bxl-github'"
              />
              <span> Login /w GitHub </span>
            </div>
          </button>
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
    const { signIn } = useAuth();
    await signIn('credentials', {
      email: email.value,
      password: password.value,
    });
  } catch (error) {
    alert(error);
  }
};

const signInGitHub = async () => {
  try {
    isLoading.value = true;
    const { data, signIn } = useAuth();
    await signIn('github');
    if (data.value) navigateTo('/test');
  } catch (e) {
    alert(e.message);
  } finally {
    isLoading.value = false;
  }
};

definePageMeta([
  {
    auth: {
      unauthenticatedOnly: true,
      navigateAuthenticatedTo: '/profile',
    },
  },
]);
</script>

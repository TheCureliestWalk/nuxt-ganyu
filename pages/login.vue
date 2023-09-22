<template>
  <div>
    <BlockColumn>
      <BlockHeader title="Login" class="w-full max-w-md mx-auto">
        <div class="flex flex-col items-center gap-2.5">
          <label for="email" class="font-bold">Email</label>
          <input
            type="text"
            name="email"
            class="w-min-md w-full py-2 px-4 rounded text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            v-model="email"
            placeholder="user@email.com"
          />
          <label for="email" class="font-bold">Password</label>
          <input
            type="password"
            name="password"
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
import { useStorage } from '@vueuse/core';

const user = useUser();
const email = ref('');
const password = ref('');
const isLoading = ref(false);

const signInPassword = async () => {
  try {
    isLoading.value = true;
    const { data } = await useFetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    if (data.value) {
      useStorage('token', data.value.access_token);
      useStorage('user', data.value.user);
      user.setUser(data.value.user);
      return navigateTo('/app');
    }
  } catch (error) {
    alert(error);
  } finally {
    isLoading.value = false;
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

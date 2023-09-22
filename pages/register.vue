<template>
  <div>
    <BlockColumn>
      <BlockHeader
        title="Register a New Account"
        class="w-full max-w-md mx-auto"
      >
        <div class="flex flex-col items-center gap-2.5">
          <label for="username" class="font-bold">Username</label>
          <input
            type="text"
            class="w-min-md w-full py-2 px-4 rounded text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            v-model="username"
            placeholder="john123"
          />
          <label for="email" class="font-bold">Email</label>
          <input
            type="text"
            class="w-min-md w-full py-2 px-4 rounded text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            v-model="email"
            placeholder="user@email.com"
          />
          <label for="email" class="font-bold">Password</label>
          <input
            type="password"
            class="w-min-md w-full py-2 px-4 rounded text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            v-model="password"
            placeholder="your secret password"
          />

          <button
            @click.prevent="signUpPassword"
            :disabled="isLoading"
            class="w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
          >
            <div
              class="flex gap-1 items-center justify-center font-semibold tracking-wide"
            >
              <Icon
                :name="isLoading ? 'svg-spinners:180-ring' : 'bx:bxs-user-plus'"
              />
              <span> Register </span>
            </div>
          </button>
        </div>
      </BlockHeader>
    </BlockColumn>
  </div>
</template>

<script setup>
const username = ref('');
const email = ref('');
const password = ref('');
const isLoading = ref(false);
const signUpPassword = async () => {
  try {
    isLoading.value = true;
    const { data } = await useFetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
      }),
    });

    if (data.value) {
      alert('Registration successful!');
      return navigateTo('/profile');
    }
  } catch (error) {
    alert(error);
  } finally {
    isLoading.value = false;
  }
};
</script>

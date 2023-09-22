<script setup>
const { status, data, signIn, signOut } = useAuth();
</script>

<template>
  <div>
    <div
      v-if="status === 'authenticated'"
      class="flex items-center justify-center gap-4 max-w-md shadow-md mx-auto rounded bg-white p-4"
    >
      <img
        :src="data.user.image"
        alt="Avatar"
        class="w-[128px] h-[128px] rounded-full ring-2 ring-green-400 shadow"
      />

      <div class="flex flex-col gap-2">
        <h1 class="text-2xl font-bold text-center">🏷️ {{ data.user.name }}</h1>
        <p class="text-gray-500 text-sm text-center">{{ data.user.email }}</p>
        <button
          @click="signOut"
          class="px-4 py-2 bg-red-400 rounded text-white shadow hover:bg-red-500 duration-200"
        >
          Sign Out
        </button>
      </div>
    </div>

    <p class="text-green-500">{{ useUser() }}</p>
    <p class="text-purple-500">status: {{ status }}</p>
    <p class="text-red-500">data: {{ data }}</p>
    <div v-if="status === 'unauthenticated'">
      <button @click="signIn" class="px-4 py-2 bg-green-400 text-white">
        Sign In
      </button>
    </div>
  </div>
</template>

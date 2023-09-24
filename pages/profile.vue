<template>
  <div>
    <ClientOnly>
      <div class="flex gap-2 flex-col items-center justify-center">
        <div v-if="pending" class="font-bold text-purple-500">
          Loading Data...
        </div>
        <div
          v-if="user"
          class="flex items-center justify-center gap-4 max-w-md shadow-md mx-auto rounded bg-white p-4"
        >
          <img
            :src="user?.avatar"
            alt="Avatar"
            class="w-[128px] h-[128px] rounded-full ring-2 ring-green-400 shadow"
          />

          <div class="flex flex-col gap-2">
            <h1 class="text-2xl font-bold text-center">🏷️ {{ user?.name }}</h1>

            <p class="text-gray-500 text-sm text-center">
              {{ user?.email }}
            </p>
            <p class="text-sm text-gray-700 text-center">
              {{ user?.username }}
            </p>
            <button
              @click=""
              class="flex gap-2 items-center justify-center px-4 py-2 bg-red-400 rounded text-white shadow hover:bg-red-500 duration-200"
            >
              <Icon name="bx:bxs-user-account" />
              <span> Upload Avatar </span>
            </button>
          </div>
        </div>
        <div v-else class="mx-auto">~ No profile found ~</div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { Profile } from '~/types/typeProfile';

let user: object = reactive({});
const { data: x, pending } = useLazyFetch<Profile>('/api/user/me', {
  method: 'GET',
});

user = x;

const onSave = async () => {};

const logOut = async () => {};
</script>

<style scoped>
.el-alert {
  margin: 20px 0 0;
}

.el-alert:first-child {
  margin: 0;
}
</style>

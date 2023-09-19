<script lang="ts" setup></script>

<template>
  <!-- Card -->
  <div class="p-4 col-span-2 w-full bg-white">
    <!-- Header -->
    <h1 class="text-lg font-bold text-gray-700 tracking-wide">Chatbox</h1>
    <div class="divide-x divide-gray-500" />

    <!-- Message View -->
    <div class="py-4 flex flex-col gap-2 text-gray-700">
      <!-- Their Message -->
      <div class="px-2 py-1 flex gap-2 items-center">
        <img
          src="https://i.pravatar.cc/300"
          alt="Avatar"
          class="w-8 h-8 rounded-full ring-2 ring-green-400 shadow"
        />
        <div class="flex flex-col">
          <h3 class="font-bold text-sm">Someone</h3>
          <p>Hi~ I have some question with you to ask...</p>
        </div>
      </div>
      <!-- My Message -->
      <div class="rounded px-2 py-1 flex gap-2 items-center justify-end">
        <div class="flex flex-col">
          <h3 class="font-bold text-sm text-right">You</h3>
          <p>Okay, Let me check this out!</p>
        </div>
        <img
          src="https://i.pravatar.cc/300"
          alt="Avatar"
          class="w-8 h-8 rounded-full ring-2 ring-green-400 shadow"
        />
      </div>
    </div>
    <!-- Sending Message -->
    <div class="flex gap-2 c">
      <input type="text" class="w-full p-2 bg-gray-100 rounded outline-none" />

      <button
        class="flex gap-2 items-center p-2 bg-blue-500 text-white shadow rounded px-2 hover:bg-blue-700"
      >
        <Icon name="bx:bxs-send" />
        <span class="text-sm font-bold tracking-wide">Send</span>
      </button>
    </div>
  </div>
</template>

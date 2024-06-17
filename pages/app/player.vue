<template>
  <div class="max-w-md bg-white shadow mx-auto mt-10">
    <div class="grid grid-cols-9 mb-4">
      <div class="col-span-3">
        <img
          src="https://placehold.co/600x400"
          alt="album"
          class="w-24 h-24 object-cover rounded-md"
        />
      </div>
      <div class="col-start-4 col-span-6">
        <div class="flex flex-col justify-center h-full">
          <h3 class="text-lg font-semibold">Song Title</h3>
          <span class="text-sm text-gray-500">Artist Name</span>
        </div>
      </div>
    </div>
    <div class="flex justify-between">
      <!-- Player Control -->
      <div class="flex gap-2">
        <button
          class="flex items-center rounded-full w-8 h-8 p-2 border hover:bg-gray-100"
        >
          <Icon name="bx:play" />
        </button>
        <button
          class="flex items-center rounded-full w-8 h-8 p-2 border hover:bg-gray-100"
        >
          <Icon name="bx:square" />
        </button>
      </div>
      <div>
        <span>00:00 | 00:00</span>
      </div>
    </div>
    <!-- Song Selector -->
    <div class="mt-2 flex flex-col">
      <p class="text-xs tracking-wider text-gray-500 font-semibold my-1">
        Tracks
      </p>
      <button
        v-for="music in musics"
        class="px-1 py-2 border text-sm hover:scale-110 duration-100"
      >
        <span class="font-bold">{{ music.title }} - {{ music.artist }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const musics = ref([
  {
    id: 1,
    title: 'In The End',
    artist: 'Linkin Park',
    cover: 'https://placehold.co/600x400',
    src: '',
  },
  {
    id: 2,
    title: 'Complicated',
    artist: 'Avril Lavigne',
    cover: 'https://placehold.co/600x400',
    src: '',
  },
  {
    id: 3,
    title: 'Bad Blood',
    artist: 'Taylor Swift',
    cover: 'https://placehold.co/600x400',
    src: '',
  },
]);
</script>

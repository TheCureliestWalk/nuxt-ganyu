<template>
  <div>
    <BlockColumn>
      <BlockHeader title="Your Profile">
        <code v-if="pending">Loading...</code>
        <div class="flex gap-4 justify-center items-center p-4 cursor-pointer shadow-md bg-white rounded">
          <img src="`https://www.bungie.net${data.profilePicturePath}`" alt="D2 Profile" class="rounded-full w-12 h-12 outline outline-green-500">
          <h2 class="font-bold text-2xl">{{ data.uniqueName }}</h2>
        </div>

      </BlockHeader>
      <BlockHeader/>
      <BlockHeader/>
      <BlockHeader/>
      <BlockHeader/>
    </BlockColumn>
  </div>
</template>

<script setup>

const route = useRoute()
const code = useState('code', () => route.query.code)
const { data, pending } = await useFetch('/api/d2/profile')

</script>

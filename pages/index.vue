<template>
  <div
    class="flex flex-col gap-3 w-full h-screen m-auto justify-center items-center"
  >
    <img class="mb-2" src="/ganyu.png" alt="Ganyu" />
    <h1 class="font-bold tracking-wide text-4xl text-sky-500">~Ganyu~</h1>
    <small class="tracking-wide text-sm"
      >Welcome to Ganyu App, here you will find my maybe (useless) apps.</small
    >
    <div class="flex gap-4">
      <Button name="Login" icon="bx:bxs-user" link="/login" v-if="!user" />
      <Button
        name="Register"
        icon="bx:bxs-user-plus"
        link="/register"
        v-if="!user"
      />
    </div>
  </div>
</template>

<script setup>
const { user } = useUser();
</script>

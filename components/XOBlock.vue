<script setup>
const props = defineProps(['value']);

const currentPlayer = computed(() => {
  if (props.id === 'X') return 'O';
  else return 'X';
});

const current = ref(null);
const clickHandle = () => {
  if (current.value === 'X') {
    return (current.value = 'O');
  } else return (current.value = 'X');
};
</script>

<template>
  <div class="border" @click="clickHandle">
    <button class="w-16 h-16 -mx-1 -p-1 left font-bold text-4xl">
      {{ props.value }}
    </button>
  </div>
</template>

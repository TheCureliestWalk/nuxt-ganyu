<template>
  <div class="mx-auto max-w-md mt-10">
    <form @submit.prevent="onSubmit" class="flex gap-2">
      <input
        type="text"
        class="w-full shadow-lg p-2"
        placeholder="+ todo"
        v-model="newTask"
      />
      <button
        type="submit"
        class="rounded bg-green-500 border border-green-400 px-4 px-3 text-white shadow-lg hover:bg-green-600 duration-100 hover:scale-110 font-bold text-xl"
      >
        +
      </button>
    </form>

    <div class="mt-6 bg-white p-4 shadow">
      <p class="font-bold tracking-wider text-sm">
        Tasks ({{ computedTasks }})
      </p>

      <p class="font-bold text-center text-sm text-purple-500" v-if="pending">
        Loading Data...
      </p>

      <div class="flex flex-col gap-2">
        <!-- Task lists -->
        <div
          class="flex gap-2 justify-between items-center"
          v-for="(task, idx) in tasks"
        >
          <span
            class="w-full hover:font-bold hover:pl-2 hover:bg-green-400 hover:text-white rounded duration-100"
            >{{ idx }}. {{ task.task }}</span
          >
          <button
            class="rounded bg-red-500 border border-red-400 px-4 px-3 text-white shadow-lg hover:bg-red-600 duration-100 hover:scale-110 font-bold text-xl"
            @click="onDelete(idx)"
          >
            <Icon name="bx:trash" class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Task {
  id?: string;
  task: string;
  done: boolean;
}
const newTask = ref<string | null>('');

const computedTasks = computed(() => tasks.value.length);
const tasks = ref<Task[] | object[]>([]);

const { data: fetchTodo, pending } = await useLazyFetch('/api/todo');
tasks.value = fetchTodo.value || [];

const onSubmit = () => {
  if (newTask.value) {
    tasks.value.push({
      task: newTask.value,
      done: false,
    });

    const { data, error } = useFetch('/api/todo', {
      method: 'POST',
      body: JSON.stringify({
        task: newTask.value,
      }),
    });

    if (data.value) {
      newTask.value = '';
    }
    if (error) {
      alert(error.value);
    }
  }
};

const onDelete = (id: number) => {
  // tasks.value = tasks.value.filter((task) => 1 - 1 !== id);
};
</script>

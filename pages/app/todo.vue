<template>
  <div>
    <form class="flex gap-2">
      <label for="task">Task: </label>
      <input name="task" type="text" class="p-2 border-1" />
      <input
        type="submit"
        value="+ new task"
        class="px-4 py-2 rounded bg-purple-400 text-white"
      />
    </form>

    <ul class="p-4 text-gray-900 bg-white mt-6">
      <li v-for="task in tasks">{{ task.task }}</li>
    </ul>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();

const tasks = ref([]);

mounted(async () => {
  const { data, error } = await supabase.from('todo').select('*');
  if (data) {
    tasks.value = data.slice();
  }
});
</script>

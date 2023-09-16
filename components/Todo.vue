<template>
  <div>
    <form class="flex gap-2">
      <label for="task">Task: </label>
      <input name="task" type="text" />
      <input type="submit" value="+ new task" />
    </form>
    <ul>
      <li v-for="task in tasks" class="list-disc">{{ task.name }}</li>
    </ul>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();

const tasks = ref({});
const { data, error } = await supabase.from('todo').select('*');
if (data) {
  tasks.value = data.slice();
}
if (error) {
  alert(error.message);
}
</script>

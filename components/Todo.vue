<template>
  <div>
    <ul>
      <li v-for="task in tasks" class="list-disc">{{ task.name }}</li>
    </ul>
  </div>
</template>

<script setup>
  const supabase = useSupabaseClient()

  const tasks = ref({})
  const { data, error } = await supabase.from('todo').select('*')
    if (data) {
      tasks.value = data.slice()
    }
    if (error) {
      alert(error.message)
    }

</script>

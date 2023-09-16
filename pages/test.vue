<template>
  <div>
    <img :src="computedImgUrl" alt="profile image" class="rounded-full p-2" />
  </div>
  <div class="p-2 bg-emerald-300">
    <input type="file" accept="image/*" @change="handleUploadImg" />
  </div>

  <div>
    {{ file }}
  </div>

  <div>
    {{ useProfile() }}
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const file = ref();
const imgUrl = ref(null);
const computedImgUrl = computed(() => {
  if (imgUrl.value) {
    return imgUrl.value;
  } else {
    return 'https://via.placeholder.com/150';
  }
});

onMounted(() => {
  downloadProfileImg();
});

function handleUploadImg(e) {
  const event = e.target.files;
  console.log(event);
  file.value = event[0];
}

async function downloadProfileImg() {
  const { data, error } = await supabase.storage
    .from('avatars')
    .download(`public/profile/${user?.value.id}.jpg`);

  if (data) {
    console.log(data);
    imgUrl.value = data;
  }
  if (error) {
    console.log('Error downloading image: ', error.message);
  }
}
</script>

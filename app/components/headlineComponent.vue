<template>
  <div class="bg-[#F7F7F7] rounded-lg shadow-sm border px-3 py-5 border-gray-200 h-full">
    <img
      :src="imageSrc"
      alt="Card image"
      class="w-full h-68.5 object-cover rounded-t-xl rounded-b-xl"
    />
    <div class="p-4 flex flex-col gap-2">
      <p class="font-bold text-2xl text-[#00708B]">{{ title }}</p>
      <div class="text-gray-500 text-sm flex justify-between">
        <span> •{{ authorName }} </span>
        <span>{{ date }}</span>
      </div>

      <p class="text-gray-600 text-sm">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageSrc: string;
  authorName: string;
  date: string;
  title: string;
  description: string;
}>();
</script>

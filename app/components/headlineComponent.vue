<template>
  <div class="bg-[#F7F7F7] rounded-lg shadow-sm border px-3 py-5 border-gray-200 h-full flex flex-col">
    <img
      :src="imageSrc"
      alt="Card image"
      class="w-full h-48 md:h-56 lg:h-68.5 object-cover rounded-xl mb-4"
    />
    <div class="flex flex-col gap-2 flex-1">
      <p class="font-bold text-lg md:text-xl lg:text-2xl text-[#00708B] line-clamp-2">{{ title }}</p>
      <div class="text-gray-500 text-xs md:text-sm flex justify-between">
        <span> •{{ authorName }} </span>
        <span>{{ date }}</span>
      </div>

      <p class="text-gray-600 text-xs md:text-sm line-clamp-3">{{ description }}</p>
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

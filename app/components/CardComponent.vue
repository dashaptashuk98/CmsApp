<template>
  <UCard class="h-full">
    <img :src="imageSrc" alt="Card image" class="w-full h-48 object-cover rounded-xl mb-4" />
    <div>
      <h3 class="text-2xl font-bold mb-2 text-center text-[#00708B]">
        {{ title }}
      </h3>
      <p class="text-gray-600">{{ description }}</p>
    </div>
  </UCard>
</template>

<script setup lang="ts">
const props = defineProps<{
  imageSrc: string;
  title: string;
  description: string;
}>();
</script>

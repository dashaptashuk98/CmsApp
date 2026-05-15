<template>
  <UCard :class="isFirst ? 'h-full max-h-173.5 flex flex-col' : 'h-full flex flex-col'">
    <img
      :src="imageSrc"
      alt="Card image"
      :class="
        isFirst ? 'w-full object-cover rounded-xl mb-4' : 'w-full h-48 object-cover rounded-xl mb-4'
      "
      :style="isFirst ? 'max-height: 600px' : ''"
    />
    <div class="flex flex-col gap-2 flex-1 overflow-hidden">
      <div class="text-gray-500 text-sm">{{ authorName }} • {{ formattedDate }}</div>
      <p class="text-gray-900 line-clamp-3">{{ description }}</p>
      <div class="flex flex-wrap gap-2 mt-auto">
        <span
          v-for="(tag, index) in tags"
          :key="index"
          class="px-3 py-1 text-sm text-gray-900 border border-gray-900 rounded-full bg-white"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
const props = defineProps<{
  imageSrc: string;
  authorName: string;
  date: string;
  description: string;
  isFirst?: boolean;
  tags?: string[];
}>();

const formattedDate = computed(() => {
  const dateObj = new Date(props.date);
  return dateObj.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
});
</script>

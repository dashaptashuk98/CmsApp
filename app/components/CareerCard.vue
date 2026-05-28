<template>
  <div
    class="bg-[#F7F7F7] rounded-lg shadow-sm border border-gray-200 p-6 md:p-8 flex flex-col h-full"
  >
    <div class="flex justify-between items-start mb-4">
      <UButton
        icon="i-lucide-heart"
        variant="ghost"
        size="lg"
        class="text-gray-600 hover:text-red-500"
      />
      <h2 class="text-2xl md:text-3xl font-bold text-[#00708B] text-center flex-1">
        {{ title }}
      </h2>
      <UButton icon="i-lucide-share-2" variant="ghost" size="lg" class="text-gray-600" />
    </div>

    <div class="flex flex-wrap justify-center gap-4 md:gap-6 mb-4">
      <div class="flex items-center gap-2 text-gray-700">
        <UIcon name="i-lucide-user" class="w-5 h-5" />
        <span class="text-sm md:text-base">{{ employmentType }}</span>
      </div>
      <div class="flex items-center gap-2 text-gray-700">
        <UIcon name="i-lucide-map-pin" class="w-5 h-5" />
        <span class="text-sm md:text-base">{{ location }}</span>
      </div>
      <div class="flex items-center gap-2 text-gray-700">
        <UIcon name="i-lucide-building" class="w-5 h-5" />
        <span class="text-sm md:text-base">{{ workType }}</span>
      </div>
    </div>

    <p class="text-gray-600 text-center text-sm md:text-base px-4 mb-6 flex-1">
      {{ description }}
    </p>

    <div class="mt-auto">
      <div class="flex justify-center mb-4">
        <UButton
          trailing-icon="i-lucide-arrow-right"
          size="lg"
          class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8"
        >
          LEARN MORE
        </UButton>
      </div>

      <p class="text-gray-500 text-center text-sm">Posted on {{ formatted }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFormattedDate } from "~/composables/useFormattedDate";
const props = defineProps<{
  title: string;
  employmentType: string;
  location: string;
  workType: string;
  description: string;
  postedDate: string;
}>();
const formatted = useFormattedDate(props.postedDate);
</script>

<template>
  <div
    class="bg-[#F7F7F7] rounded-lg shadow-sm border border-gray-200 px-4 md:px-5 py-6 md:py-8 flex flex-col justify-center items-center w-full"
    style="max-width: 456px;"
  >
    <div>
      <h3 class="text-xl md:text-2xl font-bold text-center mb-4 md:mb-5 text-[#00708B]">
        {{ title }}
      </h3>
      <p class="text-gray-600 text-sm md:text-base font-light font-[Poppins] mx-auto">
        {{ description }}
      </p>
      <div class="flex justify-center">
        <UButton
          trailing-icon="i-lucide-arrow-right"
          size="md"
          class="mt-6 md:mt-8 gap-3 bg-orange-500 hover:bg-orange-600"
        >
          {{ buttonText }}
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  buttonText: string;
}>();
</script>

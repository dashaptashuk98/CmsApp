<template>
  <div
    class="bg-[#F7F7F7] rounded-lg shadow-sm border border-gray-200 px-5 py-8 flex flex-col justify-center items-center max-w-114"
  >
    <div>
      <h3 class="text-2xl font-bold text-center mb-5 text-[#00708B]">
        {{ title }}
      </h3>
      <p class="text-gray-600 text-base font-ligh font-[Poppins] mx-auto">
        {{ description }}
      </p>
      <div class="flex justify-center">
        <UButton
          trailing-icon="i-lucide-arrow-right"
          size="md"
          class="mt-8 gap-3 bg-orange-500 hover:bg-orange-600"
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

<template>
  <div :class="[bgColor || 'bg-[#EAF0F1]', 'py-8']">
    <div class="mx-auto px-4 flex items-center justify-between" style="max-width: 1408px">
      <div>
        <h2 :class="[textColor === 'light' ? 'text-white' : 'text-[#222E31]', 'text-2xl font-bold mb-2']">
          {{ title }}
        </h2>
        <p :class="[textColor === 'light' ? 'text-white/80' : 'text-gray-500', 'text-sm']">
          {{ description }}
        </p>
      </div>
      <UButton
        trailing-icon="i-lucide-arrow-right"
        class="bg-[#00708B] hover:bg-[#005a6b] text-white font-semibold px-6 whitespace-nowrap"
      >
        {{ buttonText }}
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  buttonText?: string;
  bgColor?: string;
  textColor?: 'dark' | 'light';
}>();
</script>

<template>
  <div
    class="bg-[#F7F7F7] rounded-lg shadow-sm border border-gray-200 px-4 md:px-5 py-6 md:py-8 flex flex-col justify-center items-center w-full"
  >
    <div>
      <h3 class="text-xl md:text-2xl font-bold text-center mb-4 md:mb-5 text-[#00708B]">
        {{ title }}
      </h3>
      <p class="text-gray-600 text-sm md:text-base font-light font-[Poppins] mx-auto mb-4">
        {{ description }}
      </p>

      <div class="flex justify-center">
        <ul class="list-disc list-inside text-sm md:text-base">
          <li v-for="(item, index) in splitItems" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  liItem: string;
}>();

const splitItems = computed(() => {
  return props.liItem
    .split(".")
    .map((item) => item.trim())
    .filter((item) => item);
});
</script>

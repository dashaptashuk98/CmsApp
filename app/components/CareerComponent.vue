<template>
  <div
    class="bg-[#F7F7F7] rounded-lg shadow-sm border border-gray-200 px-5 py-8 flex flex-col justify-center items-center max-w-85"
  >
    <div>
      <h3 class="text-2xl font-bold text-center mb-5 text-[#00708B]">
        {{ title }}
      </h3>
      <p class="text-gray-600 text-base font-ligh font-[Poppins] mx-auto">
        {{ description }}
      </p>

      <div class="flex justify-center">
        <ul class="list-disc list-inside">
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

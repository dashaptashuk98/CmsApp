<template>
  <div
    class="bg-[#F7F7F7] flex flex-col justify-center items-center shadow-sm border border-gray-200 px-3.5 py-5 gap-5"
  >
    <img
      :src="imageSrc"
      alt="Card image"
      class="imageClass rounded-full"
      height="150"
      width="150"
    />
    <div class="flex flex-col gap-6">
      <p class="text-black text-lg font-medium font-[Poppins] mx-auto">
        {{ words }}
      </p>
      <p class="text-gray-600 text-base font-light font-[Poppins] mx-auto">
        {{ description }}
      </p>
      <h3 class="text-2xl font-bold text-center text-[#00708B]">
        {{ name }}
      </h3>
      <p class="text-[#6A6F74] text-base font-light text-center font-[Poppins] max-w-78 mx-auto">
        {{ position }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<Props>();

interface Props {
  imageSrc: string;
  name: string;
  words: string;
  description: string;
  position: string;
}
</script>

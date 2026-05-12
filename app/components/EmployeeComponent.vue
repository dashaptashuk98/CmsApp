<template>
  <div
    class="bg-[#F7F7F7] flex flex-col justify-center items-center shadow-sm border border-gray-200 px-3 md:px-3.5 py-4 md:py-5 gap-4 md:gap-5"
  >
    <img
      :src="imageSrc"
      alt="Card image"
      class="imageClass rounded-full w-24 h-24 md:w-32 md:h-32 lg:w-38 lg:h-38 object-cover"
    />
    <div class="flex flex-col gap-4 md:gap-6">
      <p class="text-black text-base md:text-lg font-medium font-[Poppins] mx-auto text-center">
        {{ words }}
      </p>
      <p class="text-gray-600 text-sm md:text-base font-light font-[Poppins] mx-auto text-center">
        {{ description }}
      </p>
      <h3 class="text-xl md:text-2xl font-bold text-center text-[#00708B]">
        {{ name }}
      </h3>
      <p class="text-[#6A6F74] text-sm md:text-base font-light text-center font-[Poppins] mx-auto">
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

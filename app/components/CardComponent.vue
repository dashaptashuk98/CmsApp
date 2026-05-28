<template>
  <div :class="cardClass" class="bg-white rounded-lg shadow-sm border border-gray-200 px-3.5 py-5">
    <img :src="imageSrc" alt="Card image" :class="imageClass" />
    <div>
      <h3 class="text-xl md:text-2xl font-bold text-center text-[#00708B]">
        {{ title }}
      </h3>
      <p
        class="text-base md:text-lg text-gray-600 font-light text-center font-[Poppins] max-w-78 mx-auto"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { CardProps } from "@/types/index.ts";

const props = withDefaults(defineProps<CardProps>(), {
  isFirst: false,
});

const cardClass = computed(() => {
  return "h-auto min-h-[500px] md:h-[690px]";
});

const imageClass = computed(() => {
  return "w-full h-[200px] md:h-[274px] object-cover rounded-xl mb-6 md:mb-[46px]";
});
</script>

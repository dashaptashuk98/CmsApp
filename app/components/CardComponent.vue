<template>
  <div :class="cardClass" class="bg-white rounded-lg shadow-sm border border-gray-200 px-3.5 py-5">
    <img :src="imageSrc" alt="Card image" :class="imageClass" />
    <div>
      <h3 class="text-2xl font-bold text-center text-[#00708B]">
        {{ title }}
      </h3>
      <p class="text-gray-600 text-lg font-light text-center font-[Poppins] max-w-78 mx-auto">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  imageSrc: string;
  title: string;
  description: string;
  isFirst?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isFirst: false,
});

const cardClass = computed(() => {
  return "h-[690px]";
});

const imageClass = computed(() => {
  return "w-full h-[274px] object-cover rounded-xl mb-[46px]";
});
</script>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  buttonText?: string;
  imageUrl?: string;
  hideImage?: boolean;
}>();
</script>
<template>
  <div class="bg-[#00708B]">
    <div class="mx-auto px-4" style="max-width: 1408px">
      <div class="flex flex-row items-center pt-16 pb-16">
        <div :class="props.hideImage ? 'w-full text-left' : 'flex flex-col gap-8'">
          <p
            :class="
              props.hideImage
                ? 'font-[Poppins] font-bold text-[64px] leading-21.5 text-white max-w-225'
                : 'font-[Poppins] font-bold text-[64px] leading-21.5 text-white max-w-225'
            "
          >
            {{ props.title }}
          </p>
          <p
            :class="
              props.hideImage
                ? 'font-[Poppins] font-regular text-[20px] text-white  max-w-225'
                : 'font-[Poppins] font-regular text-[20px] text-white max-w-225'
            "
          >
            {{ props.description }}
          </p>
          <UButton
            v-if="props.buttonText"
            trailing-icon="i-lucide-arrow-right"
            size="md"
            :class="
              props.hideImage
                ? 'mx-auto mt-8 gap-3 bg-orange-500 hover:bg-orange-600'
                : 'self-start gap-3 bg-orange-500 hover:bg-orange-600'
            "
            >{{ props.buttonText }}</UButton
          >
        </div>
        <img
          v-if="props.imageUrl && !props.hideImage"
          :src="props.imageUrl"
          alt=""
          class="flex-1 min-w-0 object-contain"
        />
      </div>
    </div>
  </div>
</template>

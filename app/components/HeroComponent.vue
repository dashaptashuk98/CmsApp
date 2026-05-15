<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  buttonText?: string;
  buttonText2?: string;
  imageUrl?: string;
  hideImage?: boolean;
  outlineButton?: boolean;
}>();
</script>
<template>
  <div class="bg-[#00708B]">
    <div class="mx-auto px-4" style="max-width: 1408px">
      <div class="flex flex-row items-center pt-8 pb-8 md:pt-16 md:pb-16">
        <div
          :class="
            props.hideImage
              ? 'w-full text-left flex flex-col gap-4 md:gap-8'
              : 'flex flex-col gap-4 md:gap-8'
          "
        >
          <p
            class="font-[Poppins] font-bold text-[32px] md:text-[48px] lg:text-[64px] leading-tight text-white max-w-225"
          >
            {{ props.title }}
          </p>
          <p
            class="font-[Poppins] font-regular text-[16px] md:text-[18px] lg:text-[20px] text-white max-w-225"
          >
            {{ props.description }}
          </p>
          <div class="flex gap-3">
            <UButton
              v-if="props.buttonText"
              trailing-icon="i-lucide-arrow-right"
              size="md"
              :class="props.outlineButton ? 'self-start gap-3 bg-[#00708B] border-2 border-white text-white hover:bg-[#005a6e] uppercase' : 'self-start gap-3 bg-orange-500 hover:bg-orange-600 uppercase'"
              >{{ props.buttonText }}</UButton
            >
            <UButton
              v-if="props.buttonText2"
              trailing-icon="i-lucide-arrow-right"
              size="md"
              :class="props.outlineButton ? 'self-start gap-3 bg-[#00708B] border-2 border-white text-white hover:bg-[#005a6e] uppercase' : 'self-start gap-3 bg-orange-500 hover:bg-orange-600 uppercase'"
              >{{ props.buttonText2 }}</UButton
            >
          </div>
        </div>
        <img
          v-if="props.imageUrl && !props.hideImage"
          :src="props.imageUrl"
          alt=""
          class="hidden xl:block flex-1 min-w-0 object-contain"
        />
      </div>
    </div>
  </div>
</template>

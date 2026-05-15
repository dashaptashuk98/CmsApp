<template>
  <div class="partner relative w-full overflow-hidden rounded-lg">
    <div class="ocean__container w-full relative">
      <img
        :src="backgroundImage"
        :alt="title"
        class="ocean__pic w-full h-64 md:h-96 lg:h-125 object-cover"
      />
    </div>
    <div class="ocean__wrap absolute inset-0 flex flex-col justify-between p-4 md:p-6 lg:p-8">
      <div class="ocean__top flex flex-col items-center gap-2 md:gap-3">
        <img
          :src="logo"
          :alt="title"
          width="303"
          class="ocean__logo h-12 md:h-16 lg:h-20 w-full max-w-[303px] object-contain"
        />

        <h2
          class="ocean__title font-[Poppins] text-xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-white text-center leading-tight px-2"
        >
          {{ title }}
        </h2>
      </div>
      <div class="ocean__bottom flex flex-col items-center gap-2 md:gap-3 lg:gap-4">
        <h3
          class="ocean desc font-[Poppins] text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white text-center leading-tight px-2"
        >
          {{ subtitle }}
        </h3>
        <p
          class="ocean__text font-[Poppins] text-sm md:text-base lg:text-lg xl:text-xl font-medium text-white text-center max-w-3xl px-4"
        >
          {{ description }}
        </p>
        <UButton
          trailing-icon="i-lucide-arrow-right"
          size="md"
          class="gap-3 bg-orange-500 hover:bg-orange-600 mt-2"
          @click="handleButtonClick"
        >
          {{ buttonText }}
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
  description: string;
  logo: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
}

const props = withDefaults(defineProps<Props>(), {
  buttonText: "Learn more",
  buttonLink: "#",
});

const emit = defineEmits<{
  buttonClick: [link: string];
}>();

const handleButtonClick = () => {
  emit("buttonClick", props.buttonLink);
};
</script>

<style scoped></style>

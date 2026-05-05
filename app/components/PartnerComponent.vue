<template>
  <div class="partner relative">
    <div class="ocean__container w-full relative">
      <img :src="backgroundImage" :alt="title" class="ocean__pic" />
    </div>
    <div class="ocean__wrap absolute top-0 left-0 right-0 bottom-0 z-1 flex flex-col gap-11 p-8">
      <div class="ocean__top flex flex-col items-center">
        <img :src="logo" :alt="title" class="ocean__logo" />
        <div class="ocean__title font-[Poppins] text-6xl font-bold text-white">{{ title }}</div>
      </div>
      <div class="ocean__bottom flex flex-col items-center gap-4">
        <div class="ocean desc font-[Poppins] text-4xl font-bold text-white">
          {{ subtitle }}
        </div>
        <div class="ocean__text font-[Poppins] text-xl font-medium text-white text-center">
          {{ description }}
        </div>
        <UButton
          trailing-icon="i-lucide-arrow-right"
          size="md"
          class="gap-3 bg-orange-500 hover:bg-orange-600"
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

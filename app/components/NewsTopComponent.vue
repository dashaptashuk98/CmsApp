<script setup lang="ts">
const props = defineProps<{
  title: string;
  date: string;
  author?: string;
}>();
const formattedDate = computed(() => {
  const dateObj = new Date(props.date);
  return dateObj.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
});
</script>
<template>
  <div class="bg-[#00708B]">
    <div class="mx-auto px-4" style="max-width: 1408px">
      <div class="flex flex-row items-center py-8 md:py-12 lg:py-16">
        <div class="w-full text-left">
          <NuxtLink :to="`/news`" class="text-sm font-[Poppins] text-medium text-white">
            < Blog / {{ props.title }}
          </NuxtLink>
          <p class="font-[Poppins] font-semibold text-base md:text-lg lg:text-xl text-white my-2">
            {{ formattedDate }}
          </p>

          <p
            class="font-[Poppins] font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-white mb-2"
          >
            {{ props.title }}
          </p>
          <p class="font-[Poppins] font-semibold text-base md:text-lg lg:text-xl text-white">
            {{ props.author }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

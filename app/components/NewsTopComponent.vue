<script setup lang="ts">
const props = defineProps<{
  title: string;
  date: string;
  author?: string;
}>();
</script>
<template>
  <div class="bg-[#00708B]">
    <div class="mx-auto px-4" style="max-width: 1408px">
      <div class="flex flex-row items-center pt-16 pb-16">
        <div class="w-full text-left">
          <p class="font-[Poppins] font-semibold text-[20px] text-white">
            {{ props.date }}
          </p>

          <p class="font-[Poppins] font-bold text-[64px] leading-21.5 text-white">
            {{ props.title }}
          </p>
          <p class="font-[Poppins] font-semibold text-[20px] leading-21.5 text-white">
            {{ props.author }}
          </p>

          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHeroData } from "~/composables/useHeroData";

const { data: heroData } = await useHeroData("news");
</script>

<template>
  <div>
    <div class="relative">
      <div
        class="absolute inset-0 bg-[url('/images/bgColor.png')] bg-cover bg-center pointer-events-none z-0"
      />
      <div class="relative z-10">
        <HeroComponent
          :title="heroData?.[2]?.title || 'About Us'"
          :description="heroData?.[2]?.description || 'Learn more about Edmundson Electrical'"
          :image-url="heroData?.[2]?.imgUrl || undefined"
          button-text="Contact US"
        />
      </div>
    </div>

    <UMain>
      <div class="py-12 mx-auto px-4" style="max-width: 1408px">
        <h1 class="text-4xl font-bold text-[#00708B] mb-8">Our Story</h1>
        <div class="prose max-w-none">
          <p class="text-lg text-gray-600 mb-6">
            Donec vestibulum eros eget sem tincidunt, sit amet auctor odio convallis.
          </p>
        </div>
      </div>
    </UMain>
  </div>
</template>

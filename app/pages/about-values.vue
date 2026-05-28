<template>
  <div class="flex flex-col min-h-screen">
    <div class="relative">
      <HeroComponent
        :title="heroData?.[1]?.title || 'About Us'"
        :description="heroData?.[1]?.description || 'Learn more about Edmundson Electrical'"
        :hide-image="true"
        button-text="Contact US"
        class="z-10"
      />
      <div
        class="absolute inset-0 bg-[url('/images/bgColor.png')] bg-cover bg-center pointer-events-none mix-blend-mode opacity-30 z-0"
      />
    </div>

    <UMain class="flex flex-col flex-1">
      <div
        class="space-y-12 md:space-y-16 py-8 md:py-12 px-4 md:px-6 lg:px-0 mx-auto flex-1 w-full"
        style="max-width: 1408px"
      >
        <section>
          <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#222E31] mb-2 md:mb-4">
            Our Values
          </h1>
          <p class="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
            Donec vestibulum eros eget sem tincidunt, sit amet auctor odio convallis.
          </p>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6 md:mt-8"
          >
            <CardComponent
              v-for="value in values"
              :key="value.id"
              :image-src="value.logo?.url ? `${config.public.strapiUrl}${value.logo.url}` : ''"
              :title="value.title"
              :description="value.description"
            />
          </div>
        </section>

        <section>
          <blockquote
            class="pl-4 md:pl-6 py-4 md:py-6 my-6 md:my-8 font-bold text-black-600 text-lg md:text-2xl bg-[#E5F1F3] rounded-r-lg font-[Poppins]"
          >
            In hac habitasse platea dictumst. Mauris facilisis tellus in dolor accumsan auctor.
            Quisque bibendum diam vitae ultrices aliquet. Donec et elit quis nisi dignissim
            condimentum.
          </blockquote>
        </section>
      </div>
      <AlertsComponnet
        title="Let's Connect!"
        description="Whether you're looking to partner with us, work with us, or join our team, we'd love to hear from you. Reach out today and let's build something great together!"
        button-text="Contact Us"
        bg-color="bg-[#00708B]"
        text-color="light"
        class="mt-auto"
      />
    </UMain>
  </div>
</template>

<script setup lang="ts">
import { useHeroData } from "~/composables/useHeroData";
import { useQuery } from "@tanstack/vue-query";
import { API_ENDPOINTS, QUERY_KEYS } from "~/constants/api";
import type { Value } from "~/types";
const config = useRuntimeConfig();

const { data: values } = useQuery<Value[]>({
  queryKey: [QUERY_KEYS.VALUES],
  queryFn: async () => {
    const res = await $fetch<{ data: Value[] }>(
      `${config.public.strapiUrl}/api/${API_ENDPOINTS.VALUES}?populate=*`
    );
    return res.data ?? [];
  },
});
const { data: heroData } = await useHeroData(API_ENDPOINTS.NEWS);
</script>

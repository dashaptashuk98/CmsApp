<script setup lang="ts">
import { useHeroData } from "~/composables/useHeroData";
import { useQuery } from "@tanstack/vue-query";

const config = useRuntimeConfig();

interface Values {
  id: number;
  title: string;
  description: string;
  logo?: { url: string };
}

const { data: values } = useQuery<Values[]>({
  queryKey: ["values"],
  queryFn: async () => {
    const res = await $fetch<{ data: Values[] }>(
      `${config.public.strapiUrl}/api/values?populate=*`
    );
    return res.data ?? [];
  },
});
const { data: heroData } = await useHeroData("news");
</script>

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
      <div class="space-y-16 py-12 mx-auto flex-1" style="max-width: 1408px">
        <section>
          <h1 class="text-4xl font-bold text-[#222E31] mb-4">Our Values</h1>
          <p class="text-gray-600 text-lg">
            Donec vestibulum eros eget sem tincidunt, sit amet auctor odio convallis.
          </p>
          <div class="flex gap-4 mt-8 items-stretch">
            <CardComponent
              v-for="value in values"
              :key="value.id"
              :image-src="value.logo?.url ? `${config.public.strapiUrl}${value.logo.url}` : ''"
              :title="value.title"
              :description="value.description"
              class="w-full sm:w-auto"
              style="flex-basis: 340px; max-width: 340px"
            />
          </div>
        </section>

        <section>
          <blockquote
            class="pl-6 py-6 my-6 font-bold text-black-600 text-2xl bg-[#E5F1F3] rounded-r-lg font-[Poppins]"
          >
            In hac habitasse platea dictumst. Mauris facilisis tellus in dolor accumsan auctor.
            Quisque bibendum diam vitae ultrices aliquet. Donec et elit quis nisi dignissim
            condimentum.
          </blockquote>
        </section>
      </div>
      <AlertsComponnet
        title="Let’s Connect!"
        description="Whether you’re looking to partner with us, work with us, or join our team, we’d love to hear from you. Reach out today and let’s build something great together!"
        button-text="Contact Us"
        bg-color="bg-[#00708B]"
        text-color="light"
        class="mt-auto"
      />
    </UMain>
  </div>
</template>

<template>
  <div class="flex flex-col min-h-screen">
    <HeroComponent
      :title="heroData?.[0]?.title || 'Powering Innovation, Delivering Excellence'"
      :description="heroData?.[0]?.description || ''"
      :imageUrl="heroData?.[0]?.imgUrl || undefined"
      button-text="Button"
      outline-button
    />
    <UMain class="flex flex-col flex-1">
      <div
        class="space-y-8 md:space-y-12 lg:space-y-16 py-6 md:py-10 lg:py-12 px-4 mx-auto flex-1"
        style="max-width: 1408px; width: 100%"
      >
        <section>
          <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#222E31] mb-3 md:mb-4">
            Our Services
          </h1>
          <p class="text-gray-600 text-base md:text-lg">
            At Edmundson Electrical, we don't just provide service – we deliver excellence. Our
            commitment to quality, reliability, and customer satisfaction sets us apart.
          </p>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6 md:mt-8"
          >
            <CardComponent
              v-for="service in services"
              :key="service.id"
              :image-src="service.img?.url ? `${config.public.strapiUrl}${service.img.url}` : ''"
              :title="service.title"
              :description="service.description"
            />
          </div>
        </section>
        <MapComponent />

        <section>
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#222E31] mb-6 md:mb-8 px-4">
            Our Partners
          </h2>
          <PartnerComponent
            v-for="partner in partnerData"
            :key="partner.id"
            :title="partner.title"
            :subtitle="partner.subtitle"
            :description="partner.description"
            :logo="partner.logo"
            :background-image="partner.backgroundImage"
            button-text="Learn more"
            class="mb-6 md:mb-8"
          />
        </section>
        <section class="px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <NewsCard
              v-if="notionData?.[0]"
              :image-src="notionData[0].logo"
              :author-name="notionData[0].authorName"
              :date="notionData[0].data"
              :description="notionData[0].description"
              :tags="['tag1', 'tag2', 'tag3']"
              :is-first="true"
              class="md:row-span-2 h-full"
            />
            <NewsCard
              v-if="notionData?.[1]"
              :image-src="notionData[1].logo"
              :author-name="notionData[1].authorName"
              :date="notionData[1].data"
              :description="notionData[1].description"
              :tags="['tag1', 'tag2', 'tag3']"
            />
            <NewsCard
              v-if="notionData?.[2]"
              :image-src="notionData[2].logo"
              :author-name="notionData[2].authorName"
              :date="notionData[2].data"
              :description="notionData[2].description"
              :tags="['tag1', 'tag2', 'tag3']"
            />
          </div>
        </section>
        <section class="px-4">
          <div
            class="locator__wrapper flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          >
            <div class="locator__container flex flex-col gap-3">
              <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#222E31] mb-4 md:mb-8">
                Locator App
              </h2>
              <p class="text-gray-600 text-base md:text-lg mb-4">
                Download Our Locator App Available on iPhone and Android. Find your nearest
                Edmundson Electrical branch with just a tap!
              </p>
            </div>
            <div class="img__container flex gap-4 md:gap-6 flex-wrap xl:flex-nowrap">
              <img src="~/assets/images/pay.png" alt="" class="pay w-32 md:w-42 h-auto" />
              <img src="~/assets/images/google.png" alt="" class="pay w-32 md:w-42 h-auto" />
            </div>
          </div>
        </section>
      </div>
      <AlertsComponnet
        title="Join Our Team at Edmundson Electrical"
        description="Integer maximus, tellus ut semper porta, massa sem rutrum dolor, vel fermentum ligula dolor at lectus."
        button-text="Find out more"
        class="mt-auto"
      />
    </UMain>
  </div>
</template>

<script setup lang="ts">
import HeroComponent from "~/components/HeroComponent.vue";
import CardComponent from "~/components/CardComponent.vue";
import MapComponent from "~/components/MapComponent.vue";
import PartnerComponent from "~/components/PartnerComponent.vue";
import NewsCard from "~/components/NewsCard.vue";

import { useQuery } from "@tanstack/vue-query";

import { API_ENDPOINTS, QUERY_KEYS } from "~/constants/api";

import type { Service } from "~/types";

const config = useRuntimeConfig();
const { data: heroData } = await useHeroData(API_ENDPOINTS.NEWS);
const { data: partnerData } = await usePartnerData(API_ENDPOINTS.PARTNERS);
const { data: notionData } = await useNotionData(API_ENDPOINTS.NOTIONS);

const { data: services } = useQuery<Service[]>({
  queryKey: [QUERY_KEYS.SERVICES],
  queryFn: async () => {
    const res = await $fetch<{ data: Service[] }>(
      `${config.public.strapiUrl}/api/${API_ENDPOINTS.SERVICES}?populate=*`
    );
    return res.data ?? [];
  },
});
</script>

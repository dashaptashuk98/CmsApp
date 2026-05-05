<script setup lang="ts">
import HeroComponent from "~/components/HeroComponent.vue";
import CardComponent from "~/components/CardComponent.vue";
import MapComponent from "~/components/MapComponent.vue";
import PartnerComponent from "~/components/PartnerComponent.vue";
import NewsCard from "~/components/NewsCard.vue";
import { useQuery } from "@tanstack/vue-query";

const config = useRuntimeConfig();

interface Service {
  id: number;
  title: string;
  description: string;
  img?: { url: string };
}

const { data: services } = useQuery<Service[]>({
  queryKey: ["services"],
  queryFn: async () => {
    const res = await $fetch<{ data: Service[] }>(
      `${config.public.strapiUrl}/api/services?populate=*`
    );
    return res.data ?? [];
  },
});

const { data: heroData, imageUrl } = await useHeroData("news");

const { data: partnerData } = await usePartnerData("partners");

const { data: notionData } = await useNotionData("notions");

const handlePartnerClick = (link: string) => {
  console.log("Partner link clicked:", link);
};
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <HeroComponent
      :title="heroData?.[0]?.title || 'Powering Innovation, Delivering Excellence'"
      :description="heroData?.[0]?.description || ''"
      :imageUrl="imageUrl || undefined"
      button-text="Button"
    />
    <UMain class="flex flex-col flex-1">
      <div class="space-y-16 py-12 mx-auto flex-1" style="max-width: 1408px">
        <section>
          <h1 class="text-4xl font-bold text-[#222E31] mb-4">Our Services</h1>
          <p class="text-gray-600 text-lg">
            At Edmundson Electrical, we don't just provide service – we deliver excellence. Our
            commitment to quality, reliability, and customer satisfaction sets us apart.
          </p>
          <div class="flex gap-4 mt-8 items-stretch">
            <CardComponent
              v-for="service in services"
              :key="service.id"
              :image-src="service.img?.url ? `${config.public.strapiUrl}${service.img.url}` : ''"
              :title="service.title"
              :description="service.description"
              class="w-full sm:w-auto"
              style="flex-basis: 340px; max-width: 340px"
            />
          </div>
        </section>
        <MapComponent />

        <section>
          <h2 class="text-4xl font-bold text-[#222E31] mb-8">Our Partners</h2>
          <PartnerComponent
            v-for="partner in partnerData"
            :key="partner.id"
            :title="partner.title"
            :subtitle="partner.subtitle"
            :description="partner.description"
            :logo="partner.logo"
            :background-image="partner.backgroundImage"
            button-text="Learn more"
            @button-click="handlePartnerClick"
            class="mb-8"
          />
        </section>
        <section>
          <div class="grid grid-cols-2 gap-6" style="grid-template-rows: auto auto">
            <NewsCard
              v-if="notionData?.[0]"
              :image-src="notionData[0].logo"
              :author-name="notionData[0].authorName"
              :date="notionData[0].data"
              :description="notionData[0].description"
              :tags="['tag1', 'tag2', 'tag3']"
              :is-first="true"
              class="row-span-2 h-full"
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
        <section>
          <div class="locator__wrapper flex justify-between items-center">
            <div class="locator__container flex flex-col gap-3">
              <h2 class="text-4xl font-bold text-[#222E31] mb-8">Locator App</h2>
              <p class="text-gray-600 text-lg mb-4 max-w-238.25">
                Download Our Locator App Available on iPhone and Android. Find your nearest
                Edmundson Electrical branch with just a tap!
              </p>
            </div>
            <div class="img__container flex gap-6">
              <img src="../assets/images/pay.png" alt="" class="pay" width="169" height="50" />
              <img src="../assets/images/google.png" alt="" class="pay" width="169" height="50" />
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

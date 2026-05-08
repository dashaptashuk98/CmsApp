<template>
  <div>
    <div class="relative">
      <HeroComponent
        :title="heroData?.[4]?.title || 'About Us'"
        :description="heroData?.[4]?.description || 'Learn more about Edmundson Electrical'"
        :hide-image="true"
        button-text="Explore Opportunities"
        button-text2="Contact US"
        class="z-10"
      />
      <div
        class="absolute inset-0 bg-[url('/images/bgColor.png')] bg-cover bg-center pointer-events-none mix-blend-mode opacity-30 z-0"
      />
    </div>
    <UMain>
      <div class="py-12 mx-auto" style="max-width: 1408px">
        <h1 class="text-4xl font-bold text-black mb-8">Our Expectations</h1>
        <p class="text-lg text-gray-600 mb-8">
          Donec vestibulum eros eget sem tincidunt, sit amet auctor odio convallis.
        </p>
        <div class="flex gap-4 mb-5">
          <CareerComponent
            v-for="value in CareerData"
            :key="value.id"
            :title="value.name"
            :description="value.description"
            :li-item="value.liItem"
          />
        </div>
        <h1 class="text-4xl font-bold text-black mb-8">Our Commitment to You</h1>
        <p class="text-lg text-gray-600 mb-8">
          Donec vestibulum eros eget sem tincidunt, sit amet auctor odio convallis.
        </p>
        <div class="flex gap-4 mt-8 mb-6 items-stretch">
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
        <section>
          <div class="relative rounded-xl mb-5">
            <img src="../assets/images/bgAbout.png" alt="" class="w-full rounded-xl" />
            <div
              class="absolute inset-0 z-10 rounded-xl"
              style="background: linear-gradient(180deg, rgba(0, 112, 139, 0.6) 0%, #004759 100%)"
            ></div>

            <img
              src="../assets/images/ee-Logo.png"
              alt=""
              class="absolute z-20 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />

            <div
              class="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[rgba(210,210,210,0.5)] rounded-full p-4 flex items-center justify-center"
            >
              <img src="../assets/images/play_arrow.png" alt="" />
            </div>
          </div>
        </section>
        <h1 class="text-4xl font-bold text-black mb-8">Our People, Their Stories</h1>
        <p class="text-lg text-gray-600 mb-8">
          Donec vestibulum eros eget sem tincidunt, sit amet auctor odio convallis.
        </p>
        <UCarousel v-slot="{ item }" dots :items="EmployeeData || []" :ui="{ item: 'basis-1/3' }">
          <EmployeeComponent
            :name="item.name"
            :position="item.position"
            :words="item.words"
            :description="item.description"
            :image-src="item.logo"
          />
        </UCarousel>
      </div>
    </UMain>
    <AlertsComponnet
      title="Join the Edmundson Electrical Family"
      description="If you're ready to be part of a team that values your skills, supports your ambitions, and encourages you to excel, Edmundson Electrical is the place for you. Explore our current openings and take the next step in your career journey."
      button-text="Explore Opportunities"
      class="mt-auto"
      text-color="light"
      bg-color="bg-[#00708B]"
    />
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";

const config = useRuntimeConfig();
const { data: heroData } = await useHeroData("news");
const { data: CareerData } = useCareerData("careers");
const { data: EmployeeData } = useEmployeesData("employees");

interface Values {
  id: number;
  title: string;
  description: string;
  logo?: { url: string };
}

const { data: values } = useQuery<Values[]>({
  queryKey: ["commitments"],
  queryFn: async () => {
    const res = await $fetch<{ data: Values[] }>(
      `${config.public.strapiUrl}/api/commitments?populate=*`
    );
    return res.data ?? [];
  },
});
</script>

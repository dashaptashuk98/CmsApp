<script setup lang="ts">
import { useHeroData } from "~/composables/useHeroData";

const { data: heroData } = await useHeroData("news");
const { data: AboutData } = await useAboutData("abouts");
const { data: imgData } = useImgData("photos");
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
      <div class="py-12 mx-auto" style="max-width: 1408px">
        <h1 class="text-4xl font-bold text-[#00708B] mb-8">Our Story</h1>
        <div class="prose max-w-none">
          <p class="text-lg text-gray-600 mb-6">
            Donec vestibulum eros eget sem tincidunt, sit amet auctor odio convallis.
          </p>
          <p class="text-lg text-gray-600 mb-6">
            Joshua Edmundson founded the company in Dublin in 1801. Originally an ironmongery
            business, the company was an innovator of clockwork driven compressed oil lamps used in
            lighthouses but by 1860 had opened offices in London and had embraced the new
            technological innovation of electricity. By the end of the 19th century Edmundson had
            become a major generator and supplier of electrical power and employed over 13,000
            people nationally. Power generation remained the company’s main business activity until
            nationalisation of the electricity generating industry in 1948. Nationalisation took the
            company in a different direction and Edmundson began to supply electrical products
            instead of electrical power. The electrical wholesale business grew rapidly and in 1969
            Edmundson was sold to an investment bank. Ten years later the company changed hands
            again and was acquired by private entrepreneurs, who remain the company’s current
            owners. Since 1979 Edmundson has grown to become the UK’s largest and most successful
            electrical wholesaler.
          </p>
        </div>
        <section>
          <blockquote
            class="pl-6 py-6 my-6 font-bold text-black-600 text-2xl bg-[#E5F1F3] rounded-r-lg font-[Poppins]"
          >
            In hac habitasse platea dictumst. Mauris facilisis tellus in dolor accumsan auctor.
            Quisque bibendum diam vitae ultrices aliquet. Donec et elit quis nisi dignissim
            condimentum.
          </blockquote>
        </section>
        <div
          v-if="imgData?.length"
          class="grid grid-cols-2 gap-6 mb-9"
          style="grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 230px 230px"
        >
          <img
            v-if="imgData[1]?.img?.[0]?.url"
            :src="imgData[1]?.img?.[0]?.url"
            alt="Story"
            class="row-span-2"
          />

          <img v-if="imgData[0]?.img?.[0]?.url" :src="imgData[0]?.img?.[0]?.url" alt="Story" />

          <img
            v-if="imgData[3]?.img?.[0]?.url"
            :src="imgData[3]?.img?.[0]?.url"
            alt="Story"
            class="row-span-2"
          />
          <img v-if="imgData[2]?.img?.[0]?.url" :src="imgData[2]?.img?.[0]?.url" alt="Story" />
        </div>

        <div class="flex flex-wrap gap-5 mb-9">
          <AboutCard
            v-for="value in AboutData"
            :title="value.name"
            :description="value.description"
            :button-text="value.buttonText"
          />
        </div>
        <section>
          <div class="relative rounded-xl">
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
      </div>
    </UMain>
  </div>
</template>

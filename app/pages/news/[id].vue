<template>
  <div>
    <div class="relative">
      <NewsTopComponent
        :title="newsItem?.title || ''"
        :author="newsItem?.author || ''"
        :date="newsItem?.date || ''"
        class="z-10"
      />
      <div
        class="absolute inset-0 bg-[url('/images/bgColor.png')] bg-cover bg-center pointer-events-none mix-blend-mode opacity-30 z-0"
      />
    </div>
    <UMain>
      <div class="py-6 md:py-10 lg:py-12 mx-auto px-4" style="max-width: 1408px">
        <div class="flex flex-wrap gap-2 mb-4 md:mb-6">
          <span
            v-for="(tag, index) in newsItem?.tags"
            :key="index"
            class="px-3 py-1 text-xs md:text-sm border border-gray-900 rounded-full cursor-pointer"
          >
            {{ tag.name }}
          </span>
        </div>
        <p class="text-base md:text-lg text-gray-700 mb-6 md:mb-8">{{ newsItem?.description }}</p>

        <div v-if="groupedContent.length" class="space-y-6 md:space-y-8">
          <template v-for="(group, index) in groupedContent" :key="group.text.id">
            <div class="flex flex-col-reverse space-y-reverse space-y-6 md:space-y-8">
              <ul v-if="group.points.length" class="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
                <li v-for="point in group.points" :key="point.id">
                  <span class="font-semibold">Sed posuere</span>
                  <span v-if="'point1' in point">{{ point.point1 }}</span>
                  <span v-else-if="'point2' in point">{{ point.point2 }}</span>
                  <span v-else-if="'point3' in point">{{ point.point3 }}</span>
                </li>
              </ul>
              <p v-if="group.desc" class="text-sm md:text-base text-gray-700">
                {{ group.desc.description }}
              </p>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900">
                {{ index + 1 }}. {{ group.text.Name }}
              </h3>
            </div>
          </template>
        </div>
        <section>
          <blockquote
            class="pl-4 md:pl-6 py-4 md:py-6 my-6 font-bold text-black-600 text-lg md:text-2xl bg-[#E5F1F3] rounded-r-lg font-[Poppins]"
          >
            In hac habitasse platea dictumst. Mauris facilisis tellus in dolor accumsan auctor.
            Quisque bibendum diam vitae ultrices aliquet. Donec et elit quis nisi dignissim
            condimentum.
          </blockquote>
        </section>
      </div>
    </UMain>
    <AlertsComponnet
      title="Want to learn more?"
      description="Duis posuere enim lorem, eget hendrerit nisl rutrum non. In sodales faucibus tortor eu commodo."
      button-text="Find out more"
      class="mt-auto"
      text-color="light"
      bg-color="bg-[#00708B]"
    />
    <UMain>
      <div class="py-6 md:py-10 lg:py-12 mx-auto px-4" style="max-width: 1408px">
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#222E31] mb-6 md:mb-9">Related News</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          <NuxtLink
            v-for="item in headlines?.slice(0, 3)"
            :key="item.id"
            :to="`/news/${item.id}`"
          >
            <HeadlineComponent
              :image-src="item.imageUrl || ''"
              :author-name="item.author || ''"
              :date="item.date || ''"
              :title="item.title || ''"
              :description="item.description || ''"
            />
          </NuxtLink>
        </div>
        <div class="flex justify-center mt-6 md:mt-8">
          <UButton
            trailing-icon="i-lucide-arrow-right"
            class="bg-[#00708B] hover:bg-[#005a6b] text-white font-semibold px-6 whitespace-nowrap"
          >
            VIEW more
          </UButton>
        </div>
      </div>
    </UMain>
  </div>
</template>

<script setup lang="ts">
import NewsTopComponent from "~/components/NewsTopComponent.vue";
import { API_ENDPOINTS } from "~/constants/api";
import type {
  Headline,
  ContentBlock,
  ContentGroup,
  TextBlock,
  DescBlock,
  Point1Block,
  Point2Block,
  Point3Block,
} from "~/types/index";

const route = useRoute();
const { data: headlines } = useHeadlinesData(API_ENDPOINTS.HEADLINES);

const newsItem = computed<Headline | undefined>(() =>
  headlines.value?.find((item: Headline) => item.id === Number(route.params.id))
);

function isPointBlock(block: ContentBlock): block is Point1Block | Point2Block | Point3Block {
  return (
    block.__component === "news.point1" ||
    block.__component === "news.point2" ||
    block.__component === "news.point3"
  );
}
const groupedContent = computed<ContentGroup[]>(() => {
  if (!newsItem.value?.ContentBlock) return [];

  const groups: ContentGroup[] = [];
  let currentGroup: ContentGroup | null = null;

  newsItem.value.ContentBlock.forEach((block: ContentBlock) => {
    if (block.__component === "news.text") {
      currentGroup = {
        text: block as TextBlock,
        desc: null,
        points: [],
      };
      groups.push(currentGroup);
    } else if (currentGroup) {
      if (block.__component === "news.desc") {
        currentGroup.desc = block as DescBlock;
      } else if (isPointBlock(block)) {
        currentGroup.points.push(block);
      }
    }
  });

  return groups;
});
</script>

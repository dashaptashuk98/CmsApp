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
      <div class="py-12 mx-auto px-4" style="max-width: 1408px">
        <div class="flex flex-wrap gap-2 mt-auto">
          <span
            v-for="(tag, index) in newsItem?.tags"
            :key="index"
            class="px-3 py-1 text-sm border border-gray-900 rounded-full cursor-pointer"
          >
            {{ tag.name }}
          </span>
        </div>
        <p class="text-lg text-gray-700 mb-8">{{ newsItem?.description }}</p>

        <div v-if="groupedContent.length" class="space-y-8">
          <template v-for="(group, index) in groupedContent" :key="group.text.id">
            <div class="flex flex-col-reverse space-y-reverse space-y-8">
              <ul v-if="group.points.length" class="list-disc list-inside text-gray-700 space-y-2">
                <li v-for="point in group.points" :key="point.id">
                  <span class="font-semibold">Sed posuere</span>
                  <span v-if="'point1' in point">{{ point.point1 }}</span>
                  <span v-else-if="'point2' in point">{{ point.point2 }}</span>
                  <span v-else-if="'point3' in point">{{ point.point3 }}</span>
                </li>
              </ul>
              <p v-if="group.desc" class="text-base text-gray-700">
                {{ group.desc.description }}
              </p>
              <h3 class="text-2xl font-bold text-gray-900">
                {{ index + 1 }}. {{ group.text.Name }}
              </h3>
            </div>
          </template>
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
      <div class="py-12 mx-auto" style="max-width: 1408px">
        <h1 class="text-4xl font-bold text-[#222E31] mb-9">Related News</h1>
        <div class="flex gap-5 flex-wrap">
          <NuxtLink
            v-for="item in headlines?.slice(0, 3)"
            :key="item.id"
            :to="`/news/${item.id}`"
            class="max-w-114"
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
        <div class="flex justify-center mt-8">
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
const { data: headlines } = useHeadlinesData("headlines");

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

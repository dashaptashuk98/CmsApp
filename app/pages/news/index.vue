<template>
  <div>
    <HeroComponent
      :title="heroData?.[3]?.title || 'News'"
      :description="heroData?.[3]?.description || ''"
      :imageUrl="heroData?.[3]?.imgUrl || undefined"
    />
    <UMain>
      <div class="py-6 md:py-10 lg:py-12 px-4 mx-auto" style="max-width: 1408px">
        <div
          class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-8"
        >
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tag, index) in TagsData"
              :key="index"
              @click="filterByTag(tag.name)"
              :class="[
                'px-3 py-1 text-sm border border-gray-900 rounded-full cursor-pointer',
                selectedTag === tag.name ? 'bg-gray-900 text-white' : 'text-gray-900 bg-white',
              ]"
            >
              {{ tag.name }}
            </span>
          </div>
          <div class="flex gap-2 items-center">
            <span class="text-sm md:text-base">Sort by</span>
            <USelect v-model="value" :items="items" />
          </div>
        </div>

        <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#222E31] mb-3 md:mb-4">
          Featured News
        </h1>
        <p class="text-gray-600 text-base md:text-lg mb-6">
          Donec vestibulum eros eget sem tincidunt, sit amet auctor odio convallis.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          <NuxtLink v-for="item in displayedItems" :key="item.id" :to="`/news/${item.id}`">
            <HeadlineComponent
              :image-src="item.imageUrl || ''"
              :author-name="item.author || ''"
              :date="item.date || ''"
              :title="item.title || ''"
              :description="item.description || ''"
            />
          </NuxtLink>
        </div>
        <div v-if="hasMore" class="flex justify-center mt-8">
          <UButton
            @click="loadMoreItems"
            trailing-icon="i-lucide-arrow-right"
            class="bg-[#00708B] hover:bg-[#005a6b] text-white font-semibold px-6 whitespace-nowrap"
          >
            VIEW MORE
          </UButton>
        </div>
      </div>
    </UMain>
  </div>
</template>

<script setup lang="ts">
import HeroComponent from "~/components/HeroComponent.vue";
import { useTagsData } from "~/composables/useTagsData";
import { API_ENDPOINTS } from "~/constants/api";
import type { NewsTag, Headline } from "~/types";
const { data: heroData } = await useHeroData(API_ENDPOINTS.NEWS);
const items = ref(["Newest", "Latest"]);
const value = ref("Newest");
const { data: TagsData } = useTagsData(API_ENDPOINTS.TAGS);

const selectedTag = ref<string | null>(null);

const { data: headlines } = useHeadlinesData(API_ENDPOINTS.HEADLINES);

const filteredHeadlines = computed(() => {
  if (!selectedTag.value) return headlines.value || [];
  return (headlines.value || []).filter((item) =>
    item.tags.some((tag: NewsTag) => tag.name === selectedTag.value)
  );
});

function filterByTag(tagName: string) {
  if (selectedTag.value === tagName) {
    selectedTag.value = null;
  } else {
    selectedTag.value = tagName;
  }
}

const sortHeadlines = computed(() => {
  const sorted = [...(filteredHeadlines.value || [])];
  if (value.value === "Newest") {
    return sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } else {
    return sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }
});

const { displayedItems, hasMore, loadMore: loadMoreItems } = useLoadMore(sortHeadlines, 3, 3);
</script>

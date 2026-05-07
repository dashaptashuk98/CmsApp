<template>
  <div>
    <HeroComponent
      :title="heroData?.[3]?.title || 'News'"
      :description="heroData?.[3]?.description || ''"
      :imageUrl="heroData?.[3]?.imgUrl || undefined"
    />
    <UMain>
      <div class="py-12 mx-auto" style="max-width: 1408px">
        <div class="flex justify-between mb-8">
          <div class="flex flex-wrap gap-2 mt-auto">
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
            <span>Sort by</span>
            <USelect v-model="value" :items="items" />
          </div>
        </div>

        <h1 class="text-4xl font-bold text-[#222E31] mb-4">Featured News</h1>
        <p class="text-gray-600 text-lg">
          Donec vestibulum eros eget sem tincidunt, sit amet auctor odio convallis.
        </p>
        <div class="flex gap-5 flex-wrap">
          <NuxtLink
            v-for="item in sortHeadlines"
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
            @click="loadMore"
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
import HeroComponent from "~/components/HeroComponent.vue";
import { useTagsData } from "~/composables/useTagsData";
import type { NewsTag, Headline } from "~/types";
const page = ref(1);
const { data: heroData } = await useHeroData("news");
const items = ref(["Newest", "Latest"]);
const value = ref("Newest");
const { data: TagsData } = useTagsData("tags");
const allHeadlines = ref<Headline[]>([]);

const selectedTag = ref<string | null>(null);

const { data: headlines } = useHeadlinesData("headlines", page);

watch(
  headlines,
  (newHeadlines) => {
    if (newHeadlines) {
      allHeadlines.value = [...allHeadlines.value, ...newHeadlines];
    }
  },
  { immediate: true }
);

const filteredHeadlines = computed(() => {
  if (!selectedTag.value) return allHeadlines.value;
  return allHeadlines.value.filter((item) =>
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

function loadMore() {
  page.value++;
}
</script>

<template>
  <div>
    <div class="relative">
      <HeroComponent
        :title="leadingHero?.title || 'About Us'"
        :description="leadingHero?.description || 'Learn more about Edmundson Electrical'"
        :hide-image="true"
        button-text="Contact US"
        class="z-10"
      />
      <div
        class="absolute inset-0 bg-[url('/images/bgColor.png')] bg-cover bg-center pointer-events-none mix-blend-mode opacity-30 z-0"
      />
    </div>
    <UMain>
      <div class="py-6 md:py-10 lg:py-12 px-4 mx-auto" style="max-width: 1408px">
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 md:mb-8">
          Open Roles
        </h1>
        <p class="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
          Donec vestibulum eros eget sem tincidunt, sit amet auctor odio convallis.
        </p>
        <div class="flex flex-col md:flex-row gap-4 items-stretch mb-8 md:mb-12">
          <div class="flex-1">
            <UInput
              v-model="searchQuery"
              placeholder="Role"
              size="lg"
              class="w-full"
              icon="i-lucide-search"
              :ui="{ base: 'h-12' }"
            />
          </div>
          <div class="flex-1">
            <USelect
              v-model="selectedCountry"
              placeholder="Work type"
              :items="countries"
              size="lg"
              class="w-full"
              :ui="{ base: 'h-12' }"
            />
          </div>
          <div class="flex-1">
            <UInput
              v-model="locationQuery"
              placeholder="Location"
              size="lg"
              class="w-full"
              icon="i-lucide-map-pin"
              :ui="{ base: 'h-12' }"
            />
          </div>
          <UButton
            size="lg"
            class="bg-[#00708B] hover:bg-[#005a6b] text-white font-semibold px-8 h-12 whitespace-nowrap"
            @click="handleSearch"
          >
            SEARCH
          </UButton>
          <div class="flex gap-2">
            <UButton
              variant="ghost"
              size="lg"
              icon="i-lucide-x"
              class="text-gray-600 h-12 w-12"
              square
              @click="resetSearch"
            />
            <UButton
              variant="ghost"
              size="lg"
              icon="i-lucide-grid"
              class="text-gray-600 h-12 w-12"
              square
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 md:mb-12">
          <CareerCard
            v-for="value in filteredRoles"
            :key="value.id"
            :title="value.title"
            :employment-type="value.employmentType"
            :location="value.location"
            :work-type="value.workType"
            :description="value.description"
            :posted-date="value.date"
          />
        </div>

        <div v-if="filteredRoles?.length === 0 && hasSearched" class="text-center py-12">
          <p class="text-xl text-gray-600">No roles found matching your search criteria.</p>
        </div>
      </div>
    </UMain>
    <AlertsComponnet
      title="Ready to Take the Next Step?"
      description="Click on any job title above to learn more about the role and apply today. If you're unsure which opportunity is the best fit, contact our recruitment team—we'd be happy to guide you."
      button-text="Contact Us"
      class="mt-auto"
      text-color="light"
      bg-color="bg-[#00708B]"
    />
  </div>
</template>

<script setup lang="ts">
import { API_ENDPOINTS } from "~/constants/api";

const { data: heroData } = await useHeroData(API_ENDPOINTS.NEWS);
const { data: RoleData } = useRoleData(API_ENDPOINTS.ROLE);

const searchQuery = ref("");
const locationQuery = ref("");
const selectedCountry = ref("");
const hasSearched = ref(false);

const countries = ref(["Remote", "Onsite"]);

const searchRole = ref("");
const searchLocation = ref("");
const searchCountry = ref("");

const filteredRoles = computed(() => {
  if (!RoleData.value) return [];

  if (!hasSearched.value) return RoleData.value;

  return RoleData.value.filter((role) => {
    const matchesRole =
      !searchRole.value || role.title?.toLowerCase().includes(searchRole.value.toLowerCase());

    const matchesLocation =
      !searchLocation.value ||
      role.location?.toLowerCase().includes(searchLocation.value.toLowerCase());

    const matchCountry =
      !searchCountry.value ||
      role.workType?.toLowerCase().includes(searchCountry.value.toLowerCase());

    return matchesRole && matchesLocation && matchCountry;
  });
});

const handleSearch = () => {
  searchRole.value = searchQuery.value;
  searchLocation.value = locationQuery.value;
  searchCountry.value = selectedCountry.value;
  hasSearched.value = true;
};

const resetSearch = () => {
  searchQuery.value = "";
  locationQuery.value = "";
  selectedCountry.value = "";
  searchRole.value = "";
  searchLocation.value = "";
  hasSearched.value = false;
};

const leadingHero = useFindHero(heroData, "Explore Opportunities at Edmundson Electrical");
</script>

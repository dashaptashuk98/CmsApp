<template>
  <div class="locate-us-container">
    <h2 class="text-4xl font-bold text-gray-800 mb-8">Locate Us Nearby</h2>

    <div class="flex gap-6">
      <div class="w-96 shrink-0">
        <div class="mb-6 w-full">
          <UInput
            v-model="searchQuery"
            placeholder="London"
            class="w-full border-0 rounded-lg h-12"
            icon="i-lucide-search"
          />
          <UButton
            @click="searchLocation"
            class="w-full mt-4 bg-[#00708B] hover:bg-[#005a6b] h-12 text-white font-semibold rounded-lg flex items-center justify-center"
          >
            SEARCH
          </UButton>
        </div>

        <div class="space-y-4">
          <div
            v-for="(location, index) in locations"
            :key="index"
            class="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
            @click="selectLocation(location)"
          >
            <div class="mb-2">
              <span class="text-sm font-medium text-gray-600">Branch Manager</span>
              <span class="text-sm text-gray-800 ml-1">{{ location.manager }}</span>
            </div>
            <div class="mb-2">
              <span class="text-sm font-medium text-gray-600">Contact No.</span>
              <span class="text-sm text-gray-800 ml-1">{{ location.phone }}</span>
            </div>
            <div class="mb-3">
              <span class="text-sm font-medium text-gray-600">Email</span>
              <a :href="`mailto:${location.email}`" class="text-sm text-blue-600 underline ml-1">{{
                location.email
              }}</a>
            </div>
            <div class="font-semibold text-gray-800 mb-2">{{ location.name }}</div>
            <div class="flex items-center text-sm text-gray-600 mb-2">
              <UIcon name="i-lucide-map-pin" class="w-4 h-4 mr-1" />
              {{ location.address }}
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-orange-500 font-medium">{{ location.distance }}</span>
              <UButton
                variant="outline"
                size="sm"
                class="text-[#00708B] border-[#00708B] hover:bg-[#00708B] hover:text-white"
                @click.stop="viewOnMap(location)"
              >
                VIEW ON MAP
              </UButton>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1">
        <ClientOnly>
          <div id="map" class="h-157.75 w-full rounded-lg shadow-sm"></div>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useMapLocations } from "~/composables/useLocationsData";
import type { Map, Marker, DivIcon } from "leaflet";
import type { MappedLocation, NominatimResult } from "~/types";

const searchQuery = ref<string>("London");
let map: Map | null = null;
let markers: Marker[] = [];

const { data: locations } = useMapLocations("locations");

const searchLocation = async (): Promise<void> => {
  if (!searchQuery.value || !map) return;

  try {
    const res = await $fetch<NominatimResult[]>(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(searchQuery.value)}&format=json&limit=1`
    );

    if (res?.length) {
      map.setView([parseFloat(res?.[0]?.lat), parseFloat(res[0].lon)], 13);
    }
  } catch (error) {
    console.error("Error searching location:", error);
  }
};

const selectLocation = (location: MappedLocation): void => {
  if (map && location.lat && location.lng) {
    map.setView([location.lat, location.lng], 15);
  }
};

const viewOnMap = (location: MappedLocation): void => {
  if (map && location.lat && location.lng) {
    map.setView([location.lat, location.lng], 16);
  }
};

const addMarkersToMap = (L: typeof import("leaflet")): void => {
  if (!map || !locations.value || !locations.value.length) return;

  markers.forEach((marker) => {
    if (map) marker.remove();
  });
  markers = [];

  const customIcon: DivIcon = L.divIcon({
    html: `<div style="
      background-color: #ff6b35;
      width: 28px;
      height: 28px;
      border-radius: 50% 50% 50% 0;
      border: 3px solid white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      transform: rotate(-45deg);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <div style="
        background-color: white;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        transform: rotate(45deg);
      "></div>
    </div>`,
    className: "custom-marker",
    iconSize: [28, 28],
    iconAnchor: [14, 28],
  });

  locations.value.forEach((location) => {
    if (!location.lat || !location.lng) return;

    const marker = L.marker([location.lat, location.lng], { icon: customIcon }).addTo(map);

    marker.bindPopup(`
      <div style="min-width: 200px;">
        <h3 style="margin: 0 0 8px 0; font-weight: bold; color: #00708B;">${location.name}</h3>
        <p style="margin: 4px 0; font-size: 14px; color: #666;">${location.address}</p>
        <p style="margin: 4px 0; font-size: 14px; color: #666;">Manager: ${location.manager}</p>
        <p style="margin: 4px 0; font-size: 14px; color: #666;">Phone: ${location.phone}</p>
        <p style="margin: 4px 0; font-size: 14px; color: #ff6b35; font-weight: bold;">${location.distance}</p>
      </div>
    `);

    markers.push(marker);
  });
};

onMounted(async () => {
  try {
    const L = await import("leaflet");

    map = L.map("map").setView([51.5074, -0.1278], 12);

    // Добавляем тайловый слой
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    watch(
      locations,
      () => {
        if (locations.value && locations.value.length) {
          addMarkersToMap(L);
        }
      },
      { immediate: true }
    );
  } catch (error) {
    console.error("Error initializing map:", error);
  }
});
</script>

<style>
@import "leaflet/dist/leaflet.css";

.locate-us-container {
  max-width: 1408px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

#map {
  z-index: 1;
}

.custom-marker {
  background: transparent !important;
  border: none !important;
}
</style>

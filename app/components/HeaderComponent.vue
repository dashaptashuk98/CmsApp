<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: "/",
    active: route.path === "/",
  },
  {
    label: "About Us",
    to: "/about",
  },
  {
    label: "Contact Us",
    to: "/contact",
  },
  { label: "Catalogue", to: "/catalogue" },
  { label: "News", to: "/news" },
  { label: "Careers", to: "/careers" },
  { label: "Accounts", to: "/accounts" },
  { label: "Specialist", to: "/specialist" },
]);
</script>

<template>
  <UHeader
    :toggle="{
      color: 'primary',
      variant: 'subtle',
      class: 'rounded-full',
    }"
    class="bg-[#00708B]"
    :ui="{ container: 'flex items-center justify-between gap-10 h-full' }"
  >
    <template #title>
      <img src="../assets/images/ee-Logo.png" alt="" class="h-8 w-auto" />
    </template>
    <template #right>
      <UNavigationMenu
        :items="items"
        :ui="{
          link: 'font-[Poppins] font-light text-[18px] py-1 leading-[27px] text-white hover:text-white/80 aria-[current=page]:bg-[#F97316] aria-[current=page]:text-white aria-[current=page]:rounded-md aria-[current=page]:px-3 aria-[current=page]:font-semibold',
          list: 'gap-10',
        }"
      />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>

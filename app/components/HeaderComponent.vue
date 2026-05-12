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
    children: [
      {
        label: "About Us",
        to: "/about",
        active: route.path === "/about",
      },
      {
        label: "Values",
        to: "/about-values",
        active: route.path === "/about-values",
      },
    ],
  },
  {
    label: "Contact Us",
    to: "/contact",
  },
  { label: "Catalogue", to: "/catalogue" },
  { label: "News", to: "/news" },
  {
    label: "Careers",
    children: [
      {
        label: "Career",
        to: "/careers",
        active: route.path === "/careers",
      },
      {
        label: "Career choice",
        to: "/career-choice",
        active: route.path === "/career-choice",
      },
    ],
  },
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
    :ui="{ container: 'flex items-center justify-between gap-4 lg:gap-10 h-full' }"
  >
    <template #title>
      <img src="../assets/images/ee-Logo.png" alt="" class="h-8 w-auto" />
    </template>
    <template #right>
      <UNavigationMenu
        :items="items"
        class="hidden lg:flex"
        :ui="{
          link: 'font-[Poppins] font-light text-[18px] py-1 leading-[27px] text-white hover:text-white/80 aria-[current=page]:bg-[#F97316] aria-[current=page]:text-white aria-[current=page]:rounded-md aria-[current=page]:px-3 aria-[current=page]:font-semibold',
          list: 'gap-6 xl:gap-10',
        }"
      />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>

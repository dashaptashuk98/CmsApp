<template>
  <div>
    <UMain>
      <div class="py-12 mx-auto px-4" style="max-width: 1408px">
        <h1 class="text-4xl font-bold text-[#00708B] mb-8">News</h1>
        <p class="text-lg text-gray-600 mb-8">
          Stay updated with the latest news and developments from Edmundson Electrical.
        </p>
        <div class="space-y-6">
          <UCard v-for="i in 5" :key="i">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">News Article {{ i }}</h3>
              <p class="text-gray-500 text-sm mb-3">Published on January {{ i }}, 2024</p>
              <p class="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <UButton variant="ghost" class="mt-4">Read More</UButton>
            </div>
          </UCard>
        </div>
      </div>
    </UMain>
  </div>
</template>
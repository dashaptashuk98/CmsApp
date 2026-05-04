<template>
  <div>
    <UMain>
      <div class="py-12 mx-auto px-4" style="max-width: 1408px">
        <h1 class="text-4xl font-bold text-[#00708B] mb-8">Catalogue</h1>
        <p class="text-lg text-gray-600 mb-8">
          Browse our comprehensive range of electrical products and solutions.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UCard v-for="i in 6" :key="i">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Product Category {{ i }}</h3>
              <p class="text-gray-600">Description of product category and available items.</p>
            </div>
          </UCard>
        </div>
      </div>
    </UMain>
  </div>
</template>
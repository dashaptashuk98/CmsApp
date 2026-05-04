<template>
  <div>
    <UMain>
      <div class="py-12 mx-auto px-4" style="max-width: 1408px">
        <h1 class="text-4xl font-bold text-[#00708B] mb-8">Careers</h1>
        <p class="text-lg text-gray-600 mb-8">
          Join our team and be part of our electrical innovation journey.
        </p>
        <div class="space-y-6">
          <UCard v-for="i in 4" :key="i">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Position {{ i }}</h3>
              <p class="text-gray-500 text-sm mb-3">Full-time • Location</p>
              <p class="text-gray-600 mb-4">
                Job description and requirements for this position at Edmundson Electrical.
              </p>
              <UButton class="bg-[#00708B] hover:bg-[#005a6b]">Apply Now</UButton>
            </div>
          </UCard>
        </div>
      </div>
    </UMain>
  </div>
</template>
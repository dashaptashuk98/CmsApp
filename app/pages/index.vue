<script setup lang="ts">
import HeroComponent from "~/components/HeroComponent.vue";
import CardComponent from "~/components/CardComponent.vue";
</script>

<template>
  <div>
    <HeroComponent />
    <UMain>
      <div class="space-y-16 py-12 mx-auto px-4" style="max-width: 1408px">
        <section>
          <h1 class="text-4xl font-bold text-[#00708B] mb-4">Our Services</h1>
          <p class="text-gray-600 text-lg">
            At Edmundson Electrical, we don't just provide service – we deliver excellence. Our
            commitment to quality, reliability, and customer satisfaction sets us apart.
          </p>
          <div class="flex flex-wrap justify-center gap-6 mt-8">
            <CardComponent
              image-src="/images/card1.png"
              title="Electrical Installation"
              description="Professional electrical wiring and installation for residential and commercial properties."
              class="w-full sm:w-auto"
              style="flex-basis: calc(340px - 1.5rem); max-width: 100%"
            />
            <CardComponent
              image-src="/images/card2.png"
              title="Maintenance Services"
              description="Regular maintenance to keep your electrical systems running smoothly."
              class="w-full sm:w-auto"
              style="flex-basis: calc(340px - 1.5rem); max-width: 100%"
            />
            <CardComponent
              image-src="/images/card3.png"
              title="Emergency Repairs"
              description="24/7 emergency electrical repairs to get you back up and running fast."
              class="w-full sm:w-auto"
              style="flex-basis: calc(340px); max-width: 100%"
            />
            <CardComponent
              image-src="/images/card4.png"
              title="Lighting Solutions"
              description="Custom lighting design and installation for any space."
              class="w-full sm:w-auto"
              style="flex-basis: calc(340px - 1.5rem); max-width: 100%"
            />
          </div>
        </section>
      </div>
    </UMain>
  </div>
</template>
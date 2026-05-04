<template>
  <div>
    <UMain>
      <div class="py-12 mx-auto px-4" style="max-width: 1408px">
        <h1 class="text-4xl font-bold text-[#00708B] mb-8">Specialist Services</h1>
        <p class="text-lg text-gray-600 mb-8">
          Specialized electrical solutions for complex projects and unique requirements.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UCard v-for="service in services" :key="service.title">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-3">{{ service.title }}</h3>
              <p class="text-gray-600 mb-4">{{ service.description }}</p>
              <UButton variant="outline">Learn More</UButton>
            </div>
          </UCard>
        </div>
      </div>
    </UMain>
  </div>
</template>

<script setup>
const services = [
  {
    title: "Industrial Solutions",
    description: "Heavy-duty electrical systems for industrial applications."
  },
  {
    title: "Smart Home Integration",
    description: "Modern smart home electrical solutions and automation."
  },
  {
    title: "Renewable Energy",
    description: "Solar panels and renewable energy system installation."
  },
  {
    title: "Data Centers",
    description: "Specialized electrical infrastructure for data centers."
  },
  {
    title: "Healthcare Facilities",
    description: "Medical-grade electrical systems and emergency power."
  },
  {
    title: "Educational Institutions",
    description: "Safe and reliable electrical systems for schools and universities."
  }
];
</script>
<script setup>
import MapComponent from "~/components/MapComponent.vue";
</script>

<template>
  <div>
    <UMain>
      <div class="py-12 mx-auto px-4" style="max-width: 1408px">
        <h1 class="text-4xl font-bold text-[#00708B] mb-8">Contact Us</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 class="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p class="text-gray-600 mb-6">
              Ready to discuss your electrical needs? Contact our team today.
            </p>
            <div class="space-y-4">
              <div>
                <h3 class="font-semibold">Phone</h3>
                <p class="text-gray-600">+44 (0) 123 456 7890</p>
              </div>
              <div>
                <h3 class="font-semibold">Email</h3>
                <p class="text-gray-600">info@edmundsonelectrical.co.uk</p>
              </div>
            </div>
          </div>
          <div>
            <UCard>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-4">Send us a message</h3>
                <form class="space-y-4">
                  <UInput placeholder="Your Name" />
                  <UInput placeholder="Your Email" type="email" />
                  <UTextarea placeholder="Your Message" rows="4" />
                  <UButton class="w-full bg-[#00708B] hover:bg-[#005a6b]"> Send Message </UButton>
                </form>
              </div>
            </UCard>
          </div>
        </div>
      </div>
    </UMain>
  </div>
</template>

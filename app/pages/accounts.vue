<template>
  <div>
    <UMain>
      <div class="py-12 mx-auto px-4" style="max-width: 1408px">
        <h1 class="text-4xl font-bold text-[#00708B] mb-8">Accounts</h1>
        <p class="text-lg text-gray-600 mb-8">
          Manage your account and access exclusive trade pricing.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UCard>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-4">Login</h3>
              <form class="space-y-4">
                <UInput placeholder="Email" type="email" />
                <UInput placeholder="Password" type="password" />
                <UButton class="w-full bg-[#00708B] hover:bg-[#005a6b]">
                  Login
                </UButton>
              </form>
            </div>
          </UCard>
          <UCard>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-4">Register</h3>
              <p class="text-gray-600 mb-4">
                Create an account to access trade pricing and exclusive offers.
              </p>
              <UButton variant="outline" class="w-full">
                Register Now
              </UButton>
            </div>
          </UCard>
        </div>
      </div>
    </UMain>
  </div>
</template>
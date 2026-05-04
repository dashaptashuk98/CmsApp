<script setup lang="ts">
// const config = useRuntimeConfig();

// const { data } = await useFetch(`${config.public.strapiUrl}/api/new?populate=*`, {
//   transform: (res: any) => {
//     const item = res.data?.[0];
//     if (!item) return null;
//     return {
//       title: item.title?.[0]?.children?.[0]?.text ?? null,
//       description: item.decription?.[0]?.children?.[0]?.text ?? null,
//       imgUrl: item.img?.[0]?.url ? `${config.public.strapiUrl}${item.img[0].url}` : null,
//     };
//   },
// });
</script>
<template>
  <div class="bg-[#00708B]">
    <div class="mx-auto px-4" style="max-width: 1408px">
      <div class="flex flex-row items-center pt-16 pb-16">
        <div class="flex flex-col gap-8">
          <p class="font-[Poppins] font-bold text-[64px] leading-21.5 text-white w-[712px]">
            Powering Innovation, Delivering Excellence
          </p>
          <p class="font-[Poppins] font-regular text-[20px] text-white w-[712px]">
            At Edmundson Electrical, we are your trusted partner in electrical distribution,
            combining over two centuries of expertise with a commitment to quality, innovation, and
            exceptional service. Together, let's build a brighter future.
          </p>
          <UButton
            trailing-icon="i-lucide-arrow-right"
            size="md"
            class="self-start gap-3 bg-orange-500 hover:bg-orange-600"
            >Button</UButton
          >
        </div>
        <img src="../assets/images/main.png" alt="" class="flex-1 min-w-0 object-contain" />
      </div>
    </div>
  </div>
</template>

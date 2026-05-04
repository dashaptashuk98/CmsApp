// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/styles/main.css", "~/assets/styles/fonts.css"],
  modules: ["@nuxt/eslint", "@nuxt/test-utils", "@nuxt/ui"],
  runtimeConfig: {
    public: {
      strapiUrl: "http://localhost:1337",
    },
  },
});

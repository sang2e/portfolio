// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  components: true,

  app: {
    baseURL: '/portfolio/',
  },
  generate: {
    dir: 'docs' as const, // 타입 단언으로 해결
  },

  css: ['@/assets/css/tailwind.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxt/image',
    // "@pinia/nuxt", 
    "@nuxtjs/tailwindcss"
  ]
})
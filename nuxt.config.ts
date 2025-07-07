// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  components: true,
  // ssr: false,
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
  },
  generate: {
    dir: 'docs',
    fallback: true, // ✅ 404.html 생성 (SPA 라우팅 대응)
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
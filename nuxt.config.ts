// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  components: true,
  // ssr: false,
  app: {
    // baseURL: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
    cdnURL: '/portfolio/',  // ✅ 반드시 필요함
    baseURL: '/portfolio/', // 있으면 더 좋고, 없어도 cdnURL만 있어도 됨
  },
  generate: {
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
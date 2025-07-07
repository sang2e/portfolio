// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  components: true,

  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
  },
  nitro: {
    preset: 'static',
    static: {
      // GitHub Pages용
      publicDir: 'docs',
    },
  },
  router: {
    options: {
      // GitHub Pages용 라우터 경로 설정
      base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
    },
  },
  generate: {
    dir: 'docs',
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
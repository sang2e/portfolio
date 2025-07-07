// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  components: true,

  app: {
    baseURL: '/portfolio/',        // GitHub Pages용 서브 경로
    buildAssetsDir: '/portfolio/_nuxt/', // 정적 자산 경로도 맞춰야 함
  },
  generate: {
    dir: 'docs',                   // GitHub Pages용 빌드 경로
  },
  nitro: {
    preset: 'static',
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
<template>
  <div id="app-wrapper" class="scroll-smooth overflow-x-hidden">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script setup>
const config = useRuntimeConfig()

const base = config.app.baseURL // '/portfolio/' or '/'

useHead({
  title: "SangYi's Web Portfolio",
  titleTemplate: "%s",
  meta: [
      {
          name: "viewport",
          content:
              "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover",
      },
      {
          name: "description",
          content: "SangYi's Web portfolio",
      },
      {
          name: "keywords",
          content:
              "박상이, web portfolio, webportfolio, 웹퍼블리셔, 포트폴리오",
      },
      { property: "og:title", content: "Web Portfolio" },
      {
          property: "og:description",
          content: "SangYi's Web portfolio",
      },
      {
          property: "og:image",
          content: base + "img/thumbnail.png",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sang2e.github.io/portfolio/" },
      {
          name: "naver-site-verification",
          content: "0c45b8f31f79b3c1f4765da975406015cc05ac56",
      },
  ],
  link: [
    {
        rel: "icon",
        type: "image/png",
        href: base + "img/favicon.png",
    },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Rethink+Sans&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Meddon&display=swap'
    }
  ]
})

import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.from('#app-wrapper', {
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
  })
})
</script>
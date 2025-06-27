<template>
  <div id="app-wrapper">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Rethink+Sans&display=swap'
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
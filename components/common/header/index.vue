<template>
    <div 
        :class="[
        'w-full h-[80px] fixed top-0 left-0 transition-colors duration-300 z-[999]',
        isScrolled ? 'bg-white/30 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.08)]' : 'bg-white shadow-none'
        ]"
    >
      <div class="flex justify-between items-center w-full max-w-[1200px] h-full px-[20px] mx-auto">

          <div class="flex justify-center items-center h-full ">
              <a class="flex justify-center items-center w-fit h-full text-[18px] font-[700] hover:text-[#6A994E]" href="https://sang2e.github.io/portfolio/">Web Portfolio</a>
          </div>
          <div class="hidden md:flex justify-center items-center gap-[40px] lg:gap-[60px] h-full">
              <a class="flex justify-center items-center w-fit h-full text-[18px] font-[700] uppercase hover:text-[#6A994E]" href="#about">About Me</a>
              <a class="flex justify-center items-center w-fit h-full text-[18px] font-[700] uppercase hover:text-[#6A994E]" href="#career">Career</a>
              <a class="flex justify-center items-center w-fit h-full text-[18px] font-[700] uppercase hover:text-[#6A994E]" href="#work">Work</a>
              <a class="flex justify-center items-center w-fit h-full text-[18px] font-[700] uppercase hover:text-[#6A994E]" href="#contact">Contact</a>
          </div>
      </div>

    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

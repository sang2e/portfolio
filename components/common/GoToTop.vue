<template>
    <div v-show="showButton" @click="scrollToTop" class="fixed bottom-[40px] right-[20px] md:bottom-[60px] md:right-[30px] flex justify-center items-center w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] cursor-pointer z-[1000] bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      <ArrowUpToLine />
    </div>
</template>

<script lang="ts" setup>
import { ArrowUpToLine } from 'lucide-vue-next'

const showButton = ref(false);

const checkScroll = () => {
  showButton.value = window.scrollY > 200;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

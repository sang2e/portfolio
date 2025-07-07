<template>
    <div id="contact" class="flex flex-col justify-center items-start max-w-[1200px] w-full h-[calc(100vh-80px)] mx-auto px-[20px] py-[100px] gap-[10px]">
        <div class="text-[16px] sm:text-[20px] lg:text-[30px]"
            data-aos="fade-up"
        >
            현재 웹퍼블리셔를 구인하고 계신가요?
        </div>
        <div class="font-bold text-[24px] sm:text-[50px] lg:text-[80px]"
            data-aos="fade-up"
        >
            joeng0843@naver.com
        </div>
        <div class="text-[14px] sm:text-[16px] lg:text-[20px]"
            data-aos="fade-up"
        >
            메일로 연락주시면 신속하게 답변드리겠습니다!
        </div>
        <div class="text-[14px] sm:text-[16px] lg:text-[20px]"
            data-aos="fade-up"
        >
            그 외 저에게 궁금한 사항이 있으시면 편하게 연락주세요!☺️
        </div>
        <div data-aos="fade-up">
            <a class="flex justify-center items-center py-[6px] px-[10px] pl-0 text-[14px] sm:text-[16px] lg:text-[20px] hover:text-[#6A994E]" href="mailto:joeng0843@naver.com?subject=포트폴리오 문의&body=안녕하세요.">메일 보내기
                <CircleArrowRight class="w-[16px] ml-[4px] text-[20px] hover:text-[#6A994E]" />
            </a>
        </div>
    </div>
</template>
<script setup>
import { CircleArrowRight } from 'lucide-vue-next'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
  if (process.client) {
    AOS.init();
  }
});

watch(route, () => {
    if (process.client) {
        AOS.refresh()
    }
})
</script>

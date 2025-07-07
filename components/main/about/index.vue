<template>
    <div id="about" class="px-[20px] py-[100px] pt-[150px] max-w-[1200px] w-full mx-auto">
        <div class="flex flex-col justify-start items-center text-center gap-[50px]">
            <div class="w-[150px] sm:w-[200px]">
                <!-- <img :src=aboutImg alt="베리 사진" class="w-full" data-aos="fade-up"> -->
                <img :src="baseURL + 'img/berry.png'" alt="베리 사진" class="w-full" data-aos="fade-up">
            </div>
            <div data-aos="fade-up" class="word-keep">
                안녕하세요.<br/> 
                웹퍼블리셔 박상이입니다.<br/><br/>
                우리는 하루 동안 얼마나 많은 웹사이트를 이용할까요?<br/>
                일을 하거나, 웹서핑을 하거나, 심지어 게임을 할 때에도<br/>
                우리는 셀 수 없을 정도로 많은 웹 또는 앱을 이용합니다.<br/><br/>
                저는 이렇게 넘쳐나는 웹사이트의 홍수 속에서도 기억에 남는,<br/>
                새로운 경험을 할 수 있는, 그러면서도 누구나 쉽게 이용할 수 있는<br/>
                웹사이트를 만들기 위해 끊임없이 노력할 것입니다.<br/><br/>
                <span class="font-bold text-[#6A994E]">NOMORE DREAM, DREAM</span><br/><br/>
                그저 꿈만 꾸는 것이 아닌,<br/>
                꿈을 향해 앞으로 전진하는 웹퍼블리셔가 되겠습니다.<br/>
            </div>
            <div data-aos="fade-up">
                <a class="flex justify-center items-center py-[6px] px-[10px] hover:text-[#6A994E]" href="/about/detail">
                    자기소개 더보기
                    <!-- <SquareArrowOutUpRight class="w-[16px] ml-[4px] hover:text-[#6A994E]" /> -->
                    <CircleArrowRight class="w-[16px] ml-[4px] hover:text-[#6A994E]" />
                </a>
            </div>
        </div>
    </div>
</template>
<script setup>
import { SquareArrowOutUpRight, CircleArrowRight } from 'lucide-vue-next'
// import aboutImg from '@/assets/images/berry.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const config = useRuntimeConfig()
const baseURL = config.app.baseURL

onMounted(() => {
  if (process.client) {
    AOS.init();
  }
});

// 👉 AOS 재초기화 (라우터 변경 시)
watch(route, () => {
  if (process.client) {
    AOS.refresh()
  }
})

</script>

<template>
    <div id="work" class="flex h-[100vh] w-full">
        <div class="flex flex-col justify-center items-start flex-shrink-0 max-w-[300px] sm:max-w-[400px] h-full px-[20px] text-[42px] font-bold border border-r-0 border-black">
            Recently Works<br/>
            <span class="text-[30px] font-normal">최근 작업물</span>
        </div>

        <!-- 반복되는 작업 카드 -->
        <div
        v-for="(work, index) in works"
            :key="index"
            class="work-card relative flex flex-col justify-start items-center gap-[20px] flex-shrink-0 max-w-[300px] sm:max-w-[400px] h-full py-[50px] text-[42px] font-bold border border-r-0 border-black group"
            :style="{ backgroundColor: hoveredIndex === index ? work.hoverColor : work.baseColor }"
            @mouseenter="hoveredIndex = index"
            @mouseleave="hoveredIndex = null"
        >
            <div class="w-full h-full max-h-[350px] border border-l-0 border-r-0 group-hover:border-0">
                <img :src="work.img" alt="" class="w-full h-full object-cover border opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
            <div class="flex justify-between items-start w-full px-[20px]">
                <div class="uppercase text-[14px] font-bold text-black group-hover:text-white">
                    {{ work.type }}<br />
                    {{ work.date }}
                </div>
                <div class="text-[14px] font-bold text-black group-hover:text-white">
                    {{ work.description }}
                </div>
            </div>
            <div class="text-[30px] font-bold text-black group-hover:text-white">
                {{ work.title }}
            </div>

            <!-- 중앙 원형 버튼 -->
            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-full bg-transparent backdrop-blur-md border text-black group-hover:bg-white border-black overflow-hidden transition-all duration-300 group-hover:w-[100px] group-hover:h-[100px]"
            >
                <a
                    :href="`${base}/work/detail/${index}`"
                    class="flex justify-center items-center w-full h-full text-[16px] font-normal"
                >
                  <span class="absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                      {{ index + 1 < 10 ? '0' + (index + 1) : index + 1 }}
                  </span>
                  <span class="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      View More
                  </span>
                </a>
            </div>
        </div>

    </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AOS from 'aos'
import 'aos/dist/aos.css'

const config = useRuntimeConfig()
const baseURL = config.app.baseURL
// import work01 from '@/assets/images/work01.png'
// import work02 from '@/assets/images/work02.png'
// import work03 from '@/assets/images/work03.png'
// import work04 from '@/assets/images/work04.png'
// import work05 from '@/assets/images/work05.png'
// import work06 from '@/assets/images/work06.png'
// import work07 from '@/assets/images/work07.png'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  if (process.client) {
    AOS.init();

    const sections = document.querySelector('#work')
    const cards = sections.querySelectorAll('.work-card')

    // 가로 길이 계산
    const totalScrollWidth = sections.scrollWidth - sections.clientWidth

    gsap.to(sections, {
      x: () => `-${totalScrollWidth}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: sections,
        start: 'top top',
        end: () => `+=${sections.scrollWidth}`, // 스크롤 길이
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    })
  }
})

const hoveredIndex = ref(null)

const works = [
  {
    // img: work01,
    img: baseURL + 'img/work01.png',
    type: 'Responsive',
    date: '2025.06',
    description: '학술행사 홈페이지',
    title: 'ISCRE29',
    // baseColor: '#142b61',
    // hoverColor: '#1e3a8a',
    baseColor: '#FFFFFF',
    hoverColor: '#6A994E',
    link: baseURL + '/work/detail',
  },
  {
    // img: work02,
    img: baseURL + 'img/work02.png',
    type: 'Responsive',
    date: '2025.05',
    description: '기업 홈페이지',
    title: 'OGAGO',
    // baseColor: '#2c7045',
    // hoverColor: '#378d56',
    baseColor: '#FFFFFF',
    hoverColor: '#6A994E',
    link: baseURL + '/work/detail',
  },
  {
    // img: work03,
    img: baseURL + 'img/work03.png',
    type: 'Responsive',
    date: '2025.04',
    description: '기업 홈페이지',
    title: 'MEDI CITY',
    // baseColor: '#8e264f',
    // hoverColor: '#b83263',
    baseColor: '#FFFFFF',
    hoverColor: '#6A994E',
    link: baseURL + '/work/detail',
  },
  {
    // img: work04,
    img: baseURL + 'img/work04.png',
    type: 'Responsive',
    date: '2025.03',
    description: '기업 홈페이지',
    title: 'CLICHEMBIO',
    // baseColor: '#4298c9',
    // hoverColor: '#5ab0df',
    baseColor: '#FFFFFF',
    hoverColor: '#6A994E',
    link: baseURL + '/work/detail',
  },
  {
    // img: work05,
    img: baseURL + 'img/work05.png',
    type: 'Responsive',
    date: '2025.01',
    description: '대학교 홈페이지',
    title: '한국공학대',
    // baseColor: '#0192a8',
    // hoverColor: '#02b3cd',
    baseColor: '#FFFFFF',
    hoverColor: '#6A994E',
    link: baseURL + '/work/detail',
  },
  {
    // img: work06,
    img: baseURL + 'img/work06.png',
    type: 'Responsive',
    date: '2025.01',
    description: '대학교 홈페이지',
    title: '국립공주대',
    // baseColor: '#043796',
    // hoverColor: '#0544b7',
    baseColor: '#FFFFFF',
    hoverColor: '#6A994E',
    link: baseURL + '/work/detail',
  },
//   {
    // img: work07,
//    baseURL + 'img/work0.png'work07,
//     type: 'Responsive',
//     date: '2025.05',
//     description: '기업 홈페이지',
//     title: '외국인환자유치',
//     baseColor: '#5ab0df',
//     hoverColor: '#5ab0df',
//     link: baseURL + '/work/detail',
//   },
  
]

</script>

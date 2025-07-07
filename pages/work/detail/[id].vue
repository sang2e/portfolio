<template>
    <div>
        <div class="w-full h-[250px] bg-cover"
            :style="{ backgroundImage: `url(${baseURL}img/banner.png)` }"
        ></div>
        <!-- :style="{ backgroundImage: `url(${bannerImg})`}" -->

        <div
          class="flex flex-col justify-start items-start gap-[8px] w-full max-w-[1200px] mx-auto py-[100px] px-[20px]"
          v-if="project"
        >
          <div class="text-[40px] font-bold mb-[20px]" data-aos="fade-up">{{ project.title }}</div>
          <div data-aos="fade-up">{{ project.subtitle }}</div>
          <div data-aos="fade-up">기여도 : {{ project.role }}</div>
          <div data-aos="fade-up">작업기간 : {{ project.duration }}</div>
          <div class="text-[#6A994E]" data-aos="fade-up">{{ project.tech }}</div>

          <div class="flex justify-start items-center gap-[20px]" data-aos="fade-up">
            <a
              :href="project.code"
              target="_blank"
              class="flex justify-start items-center hover:text-[#6A994E]"
            >
              코드 보기
              <CircleArrowRight class="w-[16px] ml-[4px]" />
            </a>
            <a
              :href="project.site"
              target="_blank"
              class="flex justify-start items-center hover:text-[#6A994E]"
            >
              사이트 가기
              <CircleArrowRight class="w-[16px] ml-[4px]" />
            </a>
          </div>

          <div data-aos="fade-up">{{ project.desc }}</div>

          <div class="text-[40px] font-bold my-[20px]" data-aos="fade-up">Overview</div>
          <div class="flex flex-wrap justify-start items-start gap-[40px] w-full">
            <img
              v-for="(img, i) in project.images"
              :key="i"
              :src="img"
              alt=""
              class="w-[320px]"
              data-aos="fade-up"
            />
          </div>
        </div>

    </div>
</template>

<script setup>
import { CircleArrowRight } from 'lucide-vue-next'

import { useRoute } from 'vue-router'

// import bannerImg from '@/assets/images/banner.png'
// import work01_01 from '@/assets/images/work01_01.png'
// import work01_02 from '@/assets/images/work01_02.png'
// import work01_03 from '@/assets/images/work01_03.png'
// import work01_04 from '@/assets/images/work01_04.png'
// import work01_05_01 from '@/assets/images/work01_05_01.png'
// import work01_05_02 from '@/assets/images/work01_05_02.png'

// import work02_01 from '@/assets/images/work02_01.png'
// import work02_02_01 from '@/assets/images/work02_02_01.png'
// import work02_02_02 from '@/assets/images/work02_02_02.png'
// import work02_03_01 from '@/assets/images/work02_03_01.png'
// import work02_03_02 from '@/assets/images/work02_03_02.png'

// import work03_01 from '@/assets/images/work03_01.png'
// import work03_02_01 from '@/assets/images/work03_02_01.png'
// import work03_02_02 from '@/assets/images/work03_02_02.png'
// import work03_03_01 from '@/assets/images/work03_03_01.png'
// import work03_03_02 from '@/assets/images/work03_03_02.png'
// import work03_03_03 from '@/assets/images/work03_03_03.png'

// import work04_01 from '@/assets/images/work04_01.png'
// import work04_02_01 from '@/assets/images/work04_02_01.png'
// import work04_02_02 from '@/assets/images/work04_02_02.png'
// import work04_03_01 from '@/assets/images/work04_03_01.png'
// import work04_03_02 from '@/assets/images/work04_03_02.png'
// import work04_03_03 from '@/assets/images/work04_03_03.png'

// import work05_01 from '@/assets/images/work05_01.png'
// import work05_02 from '@/assets/images/work05_02.png'
// import work05_03 from '@/assets/images/work05_03.png'

// import work06_01 from '@/assets/images/work06_01.png'
// import work06_02 from '@/assets/images/work06_02.png'
// import work06_03 from '@/assets/images/work06_03.png'

import AOS from 'aos'
import 'aos/dist/aos.css'
const config = useRuntimeConfig()
const baseURL = config.app.baseURL

definePageMeta({
    layout: 'sub',
});

onMounted(() => {
  if (process.client) {
    AOS.init();
  }
});

const projects = [
  {
    title: 'ISCRE29',
    subtitle: '학회 행사 홈페이지(반응형)',
    role: '퍼블리싱 100%',
    duration: '2025.06(약 2주)',
    tech: 'Vue, Tailwind, Typescript, Javascript, Photoshop',
    code: 'https://github.com/sang2e/apcre2006',
    site: 'https://iscre29.org/',
    desc: 'Vue 환경에서 Tailwind 사용하여 반응형 홈페이지 제작.',
    // images: [work01_01, work01_02, work01_03, work01_04, work01_05_01, work01_05_02],
    images: [
      `${baseURL}img/work01_01.png`,
      `${baseURL}img/work01_02.png`,
      `${baseURL}img/work01_03.png`,
      `${baseURL}img/work01_04.png`,
      `${baseURL}img/work01_05_01.png`,
      `${baseURL}img/work01_05_02.png`
    ]
  },
  {
    title: 'OGAGO',
    subtitle: '기업 홈페이지(반응형)',
    role: '퍼블리싱 100%',
    duration: '2025.05 ~ 2025.06',
    tech: 'Vue, Tailwind, Typescript, Javascript, Figma',
    code: 'https://github.com/sang2e/ogago',
    site: 'http://kmeditour.com/',
    desc: 'Vue 환경에서 Tailwind 사용하여 반응형 홈페이지 제작.',
    // images: [work02_01, work02_02_01, work02_02_02, work02_03_01, work02_03_02],
    images: [
      `${baseURL}img/work02_01.png`,
      `${baseURL}img/work02_02_01.png`,
      `${baseURL}img/work02_02_02.png`,
      `${baseURL}img/work02_03_01.png`,
      `${baseURL}img/work02_03_02.png`,
    ]
  },
  {
    title: 'MEDI CITY',
    subtitle: '기업 홈페이지(반응형)',
    role: '퍼블리싱 100%',
    duration: '2025.04 ~ 2025.05',
    tech: 'Vue, Tailwind, Typescript, Javascript, Figma',
    code: 'https://github.com/sang2e/new_able',
    site: 'http://able.hicompint.com/',
    desc: 'Vue 환경에서 Tailwind 사용하여 반응형 홈페이지 제작.',
    // images: [work03_01, work03_02_01, work03_02_02, work03_03_01, work03_03_02, work03_03_03],
    images: [
      `${baseURL}img/work03_01.png`,
      `${baseURL}img/work03_02_01.png`,
      `${baseURL}img/work03_02_02.png`,
      `${baseURL}img/work03_03_01.png`,
      `${baseURL}img/work03_03_02.png`,
      `${baseURL}img/work03_03_03.png`
    ]
  },
  {
    title: 'CLICHEMBIO',
    subtitle: '기업 홈페이지(반응형)',
    role: '퍼블리싱 100%',
    duration: '2025.03 ~ 2025.04',
    tech: 'Vue, SCSS, Typescript, Javascript, Figma',
    code: 'https://github.com/sang2e/clichembio',
    site: 'http://clichembio.hicompint.com/',
    desc: 'Vue 환경에서 SCSS 사용하여 반응형 홈페이지 제작.',
    // images: [work04_01, work04_02_01, work04_02_02, work04_03_01, work04_03_02, work04_03_03],
    images: [
      `${baseURL}img/work04_01.png`,
      `${baseURL}img/work04_02_01.png`,
      `${baseURL}img/work04_02_02.png`,
      `${baseURL}img/work04_03_01.png`,
      `${baseURL}img/work04_03_02.png`,
      `${baseURL}img/work04_03_03.png`
    ]
  },
  {
    title: '한국공학대',
    subtitle: '대학교 홈페이지(반응형)',
    role: '퍼블리싱 100%',
    duration: '2024.12 ~ 2025.01',
    tech: 'Vue, SCSS, Typescript, Javascript, Figma',
    code: 'https://github.com/sang2e/tukorea',
    site: 'https://tusemi.tukorea.ac.kr/',
    desc: 'Vue 환경에서 SCSS 사용하여 반응형 홈페이지 제작.',
    // images: [work05_01, work05_02, work05_03],
    images: [
      `${baseURL}img/work05_01.png`,
      `${baseURL}img/work05_02.png`,
      `${baseURL}img/work05_03.png`,
    ]
  },
  {
    title: '국립공주대',
    subtitle: '대학교 홈페이지(반응형)',
    role: '퍼블리싱 100%',
    duration: '2024.12 ~ 2025.01',
    tech: 'Vue, SCSS, Typescript, Javascript, Figma',
    code: 'https://github.com/sang2e/kongju',
    site: 'https://semi.kongju.ac.kr/',
    desc: 'Vue 환경에서 SCSS 사용하여 반응형 홈페이지 제작.',
    // images: [work06_01, work06_02, work06_03],
    images: [
      `${baseURL}img/work06_01.png`,
      `${baseURL}img/work06_02.png`,
      `${baseURL}img/work06_03.png`,
    ]
  },
]


const route = useRoute()
const projectIndex = Number(route.params.id)

const project = projects[projectIndex]
</script>

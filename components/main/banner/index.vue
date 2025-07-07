<template>
    <div id="" class="relative w-full h-[100vh] bg-cover"
        :style="{ backgroundImage: `url(${bannerImg})`}"
    >
        <div 
            :class="[
                'w-full h-full py-[100px] transition-opacity duration-1000 bg-black',
                isVisible ? 'bg-opacity-20 opacity-20' : 'bg-opacity-0 opacity-0'
            ]"
        >

        
        </div>
        <div class="absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 max-w-[1200px] w-full h-full flex flex-col justify-center items-start mx-auto px-[20px] z-[100]" >
            <!-- <div class="text-white text-[80px] font-meddon"> -->
            <div class="text-white text-[32px]  md:text-[60px]"
                style="font-family: 'Meddon', cursive;"
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-anchor-placement="top-bottom"
            >
                SangYi's Web Portfolio
                <div class="text-[14px] md:text-[20px] font-[sans-serif] word-keep mt-[50px]">
                    안녕하세요. 5년 차 웹퍼블리셔 박상이입니다.<br/>
                    누구나 쉽게 이용할 수 있는 웹사이트를 만들기 위해 끊임없이 노력하는 웹퍼블리셔가 되겠습니다.
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import bannerImg from '@/assets/images/banner.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const isVisible = ref(false)


onMounted(() => {
    if (process.client) {
        AOS.init();
    }

    setTimeout(() => {
        isVisible.value = true
    }, 1000)
})

</script>
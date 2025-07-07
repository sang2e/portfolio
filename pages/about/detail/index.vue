<template>
    <div>
        <div class="w-full h-[250px] bg-cover"
            :style="{ backgroundImage: `url(${bannerImg})`}"
        ></div>

        <div class="flex flex-col justify-start items-start gap-[50px] w-full max-w-[768px] mx-auto py-[100px]">
            <div class="flex flex-col sm:flex-row justify-start items-center sm:items-start gap-[20px] w-full px-[20px]">
                <div class="w-[150px]" data-aos="fade-up">
                    <img :src=profileImg alt="프로필 이미지" class="w-full h-full rounded-[10px]">
                </div>
                <div class="flex flex-col justify-start items-start gap-[20px]" data-aos="fade-up">
                    <div>박상이 / <span class="text-[#6A994E]">1990.11.02</span></div>
                    <div>웹퍼블리셔</div>
                    <div>
                        포트폴리오
                        <a href="https://codesigner.cafe24.com/" target="_blank" class=" text-[#6A994E]">
                            https://sang2e.github.io/portfolio/
                        </a>
                    </div>
                    <div>
                        메일 
                        <a class="text-black" href="mailto:joeng0843@naver.com?subject=포트폴리오 문의&body=안녕하세요.">
                            joeng0843@naver.com
                        </a>
                    </div>
                    <div class="flex justify-start items-center gap-[20px]">
                        <div>
                            블로그
                            <a href="https://code5igner.tistory.com/" target="_blank" class="uppercase text-[#6A994E]">
                                Blog
                            </a>
                        </div>
                        <div>
                            깃헙
                            <a href="https://github.com/sang2e" target="_blank" class="uppercase text-[#6A994E]">
                                github
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div class="px-[20px] w-full text-center sm:text-left" data-aos="fade-up">
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

            <div class="flex flex-col justify-start items-start gap-[10px] px-[20px]"  data-aos="fade-up">
                <div class="font-bold text-[20px] text-black uppercase">Work Experence</div>
                <div class="flex justify-between sm:justify-start items-start gap-[8px] w-full">
                    <div class="text-[14px] sm:text-[16px]">에이블(하이컴프, 메디시티)</div>
                    <div class="text-[#6A994E] text-[12px] sm:text-[16px]">2024.11 ~ 2025.06</div>
                </div>
                <div class="flex justify-between sm:justify-start items-start gap-[8px] w-full">
                    <div class="text-[14px] sm:text-[16px]">에이치엘비글로벌㈜</div>
                    <div class="text-[#6A994E] text-[12px] sm:text-[16px]">2024.08 ~ 2024.10</div>
                </div>
                <div class="flex justify-between sm:justify-start items-start gap-[8px] w-full">
                    <div class="text-[14px] sm:text-[16px]">케이브이알인터랙티브(메타엔)</div>
                    <div class="text-[#6A994E] text-[12px] sm:text-[16px]">2022.08 ~ 2024.01</div>
                </div>
                <div class="flex justify-between sm:justify-start items-start gap-[8px] w-full">
                    <div class="text-[14px] sm:text-[16px]">더스토리뱅크(케이브레인컴퍼니)</div>
                    <div class="text-[#6A994E] text-[12px] sm:text-[16px]">2020.04 ~ 2022.04</div>
                </div>
                <div class="flex justify-between sm:justify-start items-start gap-[8px] w-full">
                    <div class="text-[14px] sm:text-[16px]">레이팝</div>
                    <div class="text-[#6A994E] text-[12px] sm:text-[16px]">2019.09. ~ 2020.01</div>
                </div>
            </div>

            <div class="flex flex-col justify-start items-start gap-[10px] px-[20px]"  data-aos="fade-up">
                <div class="font-bold text-[20px] text-black uppercase">education</div>
                <div class="flex flex-col justify-start items-start gap-[8px]">
                    <div class="flex justify-start items-center gap-[10px]">
                        <div class="text-[14px] sm:text-[16px]">[과정평가형]웹디자인기능사(웹퍼블리셔)(A)</div>
                        <div class="text-[#6A994E] text-[12px] sm:text-[16px]">2019.04 ~ 2019.08</div>
                    </div>
                    <div class="break-all text-[14px] sm:text-[16px]">
                        훈련내용 : 2D그래픽디자인 / UI/UX환경분석 / UI/UX요구분석/ UI/UX콘셉트기획/ 웹퍼블리싱/ UI디자인/ UI/UX 구현/테스트 (총 635시간)
                    </div>
                </div>
            </div>

            <div class="flex flex-col justify-start items-start gap-[10px] px-[20px]"  data-aos="fade-up">
                <div class="font-bold text-[20px] text-black uppercase">Certificate</div>
                <div class="flex justify-between sm:justify-start items-start gap-[8px] w-full">
                    <div class="text-[14px] sm:text-[16px]">웹디자인기능사 <span class="text-[12px] sm:text-[14px]">한국산업인력공단</span></div>
                    <div class="text-[#6A994E] text-[12px] sm:text-[16px]">2019.09</div>
                </div>
                <div class="flex justify-between sm:justify-start items-start gap-[8px] w-full">
                    <div class="text-[14px] sm:text-[16px]">GTQ 인디자인 1급 <span class="text-[12px] sm:text-[14px]">한국생산성본부</span></div>
                    <div class="text-[#6A994E] text-[12px] sm:text-[16px]">2018.10</div>
                </div>
                <div class="flex justify-between sm:justify-start items-start gap-[8px] w-full">
                    <div class="text-[14px] sm:text-[16px]">컴퓨터그래픽스운용기능사 <span class="text-[12px] sm:text-[14px]">한국산업인력공단</span></div>
                    <div class="text-[#6A994E] text-[12px] sm:text-[16px]">2018.09</div>
                </div>
                <div class="flex justify-between sm:justify-start items-start gap-[8px] w-full">
                    <div class="text-[14px] sm:text-[16px]">(국가공인)GTQ 1급 <span class="text-[12px] sm:text-[14px]">한국생산성본부</span></div>
                    <div class="text-[#6A994E] text-[12px] sm:text-[16px]">2018.01</div>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
import bannerImg from '~/assets/images/banner.png'
import profileImg from '~/assets/images/profile01.jpeg'

definePageMeta({
    layout: 'sub',
});


</script>

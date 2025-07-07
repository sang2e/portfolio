<template>
    <div id="career" class="relative px-[20px] py-[150px] max-w-[1200px] w-full mx-auto">

        <div class="absolute top-1/2 left-[19px] sm:left-1/2 -translate-y-1/2 sm:-translate-x-1/2 w-[1px] h-[92%] bg-black"></div>
        <div class="flex flex-col justify-start items-start gap-[60px] w-full">
            <div
                v-for="(career, index) in careers"
                :key="index"
                class="w-full flex"
                :class="index % 2 === 0 ? 'justify-start sm:justify-end' : 'justify-start'"
                data-aos="fade-up"
            >
                <div class="w-full sm:w-1/2">
                    <div
                        class="relative font-bold flex items-center gap-[8px]"
                        :class="index % 2 === 0 ? 'justify-start text-left pl-[12px]' : 'justify-start text-left pl-[12px] sm:justify-end sm:text-right sm:pr-[12px]'"
                    >
                        <!-- 점 표시 -->
                        <span
                            class="absolute top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#6A994E] rounded-full shrink-0"
                            :class="[
                                index % 2 === 0 ? 'left-[-4px]' : 'left-[-4px] sm:left-auto sm:right-[-4px]',
                                index % 2 !== 0 && 'order-2'
                            ]" 
                        ></span>
            
                        <!-- 날짜 + 회사명 -->
                        <span>
                            {{ career.period }}&nbsp;&nbsp;{{ career.company }}
                        </span>
                    </div>
            
                    <!-- 작업 리스트 -->
                    <div
                        class="flex flex-col gap-[6px] mt-[10px]"
                        :class="index % 2 === 0 ? 'items-start text-left pl-[20px]' : 'items-start text-left pl-[20px] sm:items-end sm:text-right sm:pr-[20px]'"
                    >
                        <div
                            v-for="(task, taskIndex) in career.tasks"
                            :key="taskIndex"
                            class="w-full text-[14px]"
                        >
                            {{ task }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import AOS from 'aos'
  import 'aos/dist/aos.css'

  onMounted(() => {
    if (process.client) {
      AOS.init();
    }
  });
  const careers = [
    {
      period: '24.11 ~ 25.06',
      company: '에이블(하이컴프, 메디시티)',
      tasks: [
        'ISCRE29 행사 홈페이지 퍼블리싱(Vue)',
        '오가고 홈페이지 퍼블리싱(Vue)',
        '메디시티-외국인환자유치 홈페이지 퍼블리싱(Vue)',
        '메디시티 홈페이지 퍼블리싱(Vue)',
        '클리캠바이오 홈페이지 퍼블리싱(Vue)',
        '2025 ZEISS 행사 홈페이지 퍼블리싱(Vue)',
        '공주대학교 홈페이지 퍼블리싱(Vue)',
        '한국공학대 홈페이지 퍼블리싱(Vue)',
        '2025 ICHO 행사 홈페이지 퍼블리싱 및 유지보수(PHP)',
        '글로벌 메디시티 홈페이지 퍼블리싱 및 유지 보수(React)',
        '아트-글로벌(메디시티) 홈페이지 퍼블리싱(Vue)',
        '기타 학회 홈페이지 유지 보수(PHP)',
      ],
    },
    {
      period: '24.08 ~ 25.10',
      company: '에이치엘비글로벌㈜',
      tasks: [
        '어반콘크리트 자사몰 홈페이지 제작 및 수정',
        '잼잼잼 자사몰 홈페이지 제작 및 수정',
      ],
    },
    {
      period: '22.08 ~ 24.01',
      company: '케이브이알인터랙티브(메타엔)',
      tasks: [
        '국립5대과학관 2023년 특별전시 - 사이버투어 공간 제작',
        '여의도 순복음교회 웹사이트 제작(사이버투어 공간 제작, react-three-fiber 3D 맵 공간 제작)',
        '마포순환열차 - 마포구청 사이버투어 업데이트',
        '포스코그룹 수소사업 가상전시관 - 사이버투어 공간 제작',
        '자체 프로젝트 추모 서비스 ≪안녕≫ 런칭 - 사이버투어 공간 제작 및 데이터바인딩',
        '국립해양생물자원관 - matterport 사이버투어 공간 제작, three.js로 3D 해양생물 제작',
        'LG에너지솔루션 온라인 전시관 (EES Europe)',
        'LG엔솔가상라인투어(폴란드)',
        'LG엔솔 가상라인투어 고도화',
        '국립5대과학관 2022년 특별전시 - 아카이브 페이지, 사이버투어 공간 제작',
        '한국유학박람회 - 사이버투어 공간 제작, 서치 기능 및 데이터바인딩',
        '사이즈코리아 - 사이버투어 공간 제작',
        '포스코친환경소재포럼 - 사이버투어 공간 제작',
        '두산 헤리티지 1896 - 사이버투어 공간 제작(krpano툴 사용)'
      ],
    },
    {
      period: '20.04. ~ 22.04',
      company: '더스토리뱅크(케이브레인컴퍼니)',
      tasks: [
        '㈜그로비교육 예비초등 HTML5 콘텐츠 프로토 개발',
        '㈜아이스크림 홈런 예비초등 HTML5 콘텐츠 개발 양산',
        '㈜메가스터디 엘리하이 초등 저학년 HTML5 콘텐츠 개발 양산',
        '㈜GM 쉐보레 CCA 과정 콘텐츠 개발 양산',
        '산림조합중앙회 임업인종합연수원 - 산림입문과정 콘텐츠 개발 양산',
        '농협경제지주 축산컨설팅부 신규 5개과정 개발 양산',
        '한국기술교육대학교 사이버 강의 외주 관리',
        '한국기술교육대학교 온라인평생 교육원',
        '2020년도 이러닝 콘텐츠 개발(4차산업 분야)',
        '이러닝 콘텐츠 개발용역 (AI, 빅데이터 분야)'
      ],
    },
    {
      period: '19.09 ~ 20.01',
      company: '레이팝',
      tasks: [
        'PC 및 모바일 호환 HTML5 그리기 툴 개발',
        '㈜비상M러닝 초등 진도 차시 HTML5 콘텐츠 개발 양산',
        '㈜비상M러닝 비쥬얼씽킹 프로젝트 HTML5 콘텐츠 개발 양산'
      ],
    },
  ]
  </script>
  
  
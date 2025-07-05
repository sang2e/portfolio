import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  if (process.client) {
    AOS.init({
      duration: 800, // 애니메이션 지속 시간
      once: true     // 한 번만 실행
    })
  }
})

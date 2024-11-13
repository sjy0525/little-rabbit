
import { useIntersectionObserver } from '@vueuse/core'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.directive('img-lazy',{
  mounted(el,binding){
    console.log(el,binding.value)
    const { stop } = useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          // 进入视口区域
          el.src = binding.value
          stop()
        }
      },
    )
  }
})
app.use(createPinia())
app.use(router)

app.mount('#app')

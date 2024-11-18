import dayjs from "dayjs"
import { onUnmounted, ref } from "vue"
import { computed } from "vue"
export const useCountDown=()=>{
  let timer=null
  //响应式数据
  const time=ref(0)
  const formatTime=computed(()=>dayjs.unix(time.value).format("mm分ss秒"))
  //开启倒计时的函数
  const start=(currentTime)=>{
    formatTime.value=currentTime
    timer=setInterval(() => {
      time.value--
    }, 1000);
  }
  onUnmounted(()=>timer&&clearInterval(timer))
  return {
    formatTime,
    start
  }
}

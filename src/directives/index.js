import { useIntersectionObserver } from "@vueuse/core"
export const directivePlugin={
  install(app){
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
  }
}

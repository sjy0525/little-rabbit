import httpInstance from "@/utils/http";
export function useBannerData(){
  return httpInstance({
    url:'/home/banner'
  })
}

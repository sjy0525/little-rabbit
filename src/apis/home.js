import httpInstance from "@/utils/http";
export function useBannerData(){
  return httpInstance({
    url:'/home/banner'
  })
}

export function getNewAPI(){
  return httpInstance({
    url:'/home/new'
  })
}

export function getHotAPI(){
  return httpInstance({
    url:'/home/hot'
  })
}

import httpInstance from "@/utils/http"

export const insertCartAPI = ({ skuId, count }) => {
  return httpInstance({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

export const findNewCartList=()=>{
  return httpInstance({
    url:'/member/cart'
  })
}

export const delCartAPI=(ids)=>{
  return httpInstance({
    url:'/member/cart',
    method:'delete',
    data:{
      ids
    }
  })
}

export const mergeCartAPI=(data)=>{
  return httpInstance({
    url:'/member/cart/merge',
    method:'post',
    data
  })
}

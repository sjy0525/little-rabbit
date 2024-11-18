import httpInstance from "@/utils/http";
export const getCheckoutAPI=()=>{
  return httpInstance({
    url:'/member/order/pre'
  })}

export const createOrderAPI=(data)=>{
  return httpInstance({
    url:'/member/order',
    method:'post',
    data
  })
}

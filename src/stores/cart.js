
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./login";
import { delCartAPI, findNewCartList, insertCartAPI } from "@/apis/cart";

export const useCartStore=defineStore('cart',()=>{
  const cartList=ref([])
  const userStore=useUserStore()
  const isLogin=computed(()=>userStore.userInfo.token)
  const addCart=async (goods)=>{
    const { skuId, count }=goods
    if(isLogin.value){
      await insertCartAPI({ skuId, count })
      const res=await findNewCartList()
      cartList.value=res.result
    }else{
      const item=cartList.value.find((item)=>goods.skuId===item.skuId)
      if(item){
        item.count++
      }else{
        cartList.value.push(goods)
      }
    }
  }
  const delCart=async(skuId)=>{
    if(isLogin.value){
      await delCartAPI([skuId])
      const res=await findNewCartList()
      cartList.value=res.result
    }else{
      cartList.value=cartList.value.filter(item=>skuId !== item.skuId)
    }
  }
  const allCount=computed(()=>cartList.value.reduce((sum,item)=>sum+item.count,0))
  const allPrice=computed(()=>cartList.value.reduce((sum,item)=>sum+item.count*item.price,0))
  const selectedCount=computed(()=>cartList.value.filter(item=>item.selected).reduce((sum,item)=>sum+item.count,0))
  const selectedPrice=computed(()=>cartList.value.filter(item=>item.selected).reduce((sum,item)=>sum+item.count*item.price,0))

  const singleCheck=(skuId,selected)=>{
    const item=cartList.value.find((item)=>item.skuId===skuId)
    item.selected=selected
  }
  const isAll=computed(()=>cartList.value.every((item)=>item.selected))
  const allCheck=(selected)=>{
    cartList.value.forEach((item)=>item.selected=selected)
  }

  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    singleCheck,
    isAll,
    allCheck,
    selectedCount,
    selectedPrice
  }
},
{
  persist:true
})

import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore=defineStore('cart',()=>{
  const cartList=ref([])
  const addCart=(goods)=>{
    const item=cartList.value.find((item)=>goods.skuId===item.skuId)
    if(item){
      item.count++
    }else{
      cartList.value.push(goods)
    }
  }
  const delCart=(skuId)=>{
    cartList.value=cartList.value.filter(item=>skuId !== item.skuId)
  }
  const allCount=computed(()=>cartList.value.reduce((sum,item)=>sum+item.count,0))
  const allPrice=computed(()=>cartList.value.reduce((sum,item)=>sum+item.count*item.price,0))
  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice
  }
},
{
  persist:true
})

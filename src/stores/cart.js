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
    allCheck
  }
},
{
  persist:true
})

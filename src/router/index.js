import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/PayBack.vue'
import Member from '@/views/Member/index.vue'
import MemberInfo from '@/views/Member/components/MemberInfo.vue'
import MemberOrder from '@/views/Member/components/MemberOrder.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'category/:id',
          name: 'category',
          component: Category
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: Detail
        },
        {
          path: 'cartlist',
          name: 'cartlist',
          component: CartList
        },
        {
          path: 'checkout',
          name: 'checkout',
          component: Checkout
        },
        {
          path: 'pay',
          name: 'pay',
          component: Pay
        },
        {
          path: 'paycallback', // 注意路径，必须是paycallback
          name:'paycallback',
          component: PayBack
        },
        {
          path: 'member',
          name: 'member',
          component: Member,
          children:[
            {
              path: 'user',
              name: 'memberUser',
              component: MemberInfo,
            },
            {
              path: 'order',
              name: 'memberOrder',
              component: MemberOrder,
            },
          ]
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },

  ],
  scrollBehavior(){
    return{
      top:0
    }
  }
})

export default router

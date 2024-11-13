<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeGoods from './components/HomeGoods.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <home-panel title="新鲜好物" sub-title="新鲜好物，不容错过">
    <div>我是新鲜好物</div>
  </home-panel>
  <home-panel title="人气推荐" sub-title="人气推荐，不容错过">
    <div>我是人气推荐</div>
  </home-panel>
  <HomeGoods />
  <HomeHot />
  <homeProduct />
</template>

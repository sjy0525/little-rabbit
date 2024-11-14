import { onMounted } from 'vue';
import { ref } from 'vue';
import { useBannerData } from '@/apis/home';

export function useBannerList(){
  const bannerList=ref([])
const getBannerList=async()=>{
  const res=await useBannerData({
    distributionSite: '2'
  })
  bannerList.value=res.result
}
onMounted(()=>{
  getBannerList()
})
return {
  bannerList
}

}

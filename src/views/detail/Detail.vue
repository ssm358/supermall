<template>
  <div id="detail">
    <detail-nav></detail-nav>
    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>

<script>
//子组件的引用
import DetailNav from '../detail/detailCompont/DetailNav.vue'
import DetailSwiper from './detailCompont/DetailSwiper.vue'
import DetailBaseInfo from './detailCompont/DetailBaseInfo.vue'
//网络请求的引用
import {getDetail, Goods} from 'network/detail'
export default {
name:'Detail',
components:{
  DetailNav,
  DetailSwiper,
  DetailBaseInfo
},
 data(){
  return{
    id:null,
    topImages:[],
    goods:{}
  }
},
 created(){
   //保存传入的id
   this.id = this.$route.params.iid

   //根据id请求网络数据
   getDetail(this.id).then(res=>{
     //获取顶部的图片轮播数据
     const data = res.result
    this.topImages = data.itemInfo.topImages
    //获取商品信息
    this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
   })
  } 
}
</script>

<style>

</style>
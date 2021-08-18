<template>
  <div id="detail">
    <detail-nav class="detail-nav"></detail-nav>
    <scroll class="content" ref="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :paramInfo="goodsparam"></detail-param-info>
      <detail-comment-info :commonInfo="commonInfo"></detail-comment-info>
      <goods-list :goods="recommends"></goods-list>
    </scroll>
  </div>
</template>

<script>
//子组件的引用
import DetailNav from '../detail/detailCompont/DetailNav.vue'
import DetailSwiper from './detailCompont/DetailSwiper.vue'
import DetailBaseInfo from './detailCompont/DetailBaseInfo.vue'
import DetailShopInfo from './detailCompont/DetailShopInfo.vue'
import DetailGoodsInfo from './detailCompont/DetailGoodsInfo.vue'
import DetailParamInfo from './detailCompont/DetailParamInfo.vue'
import DetailCommentInfo from './detailCompont/DetailCommentInfo.vue'


//公共组件的引用
import Scroll from '../../components/common/scroll/Scroll.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'


//网络请求的引用
import {getDetail, Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
// import GoodsList from '../../components/content/goods/GoodsList.vue'
export default {
name:'Detail',
components:{
  DetailNav,
  DetailSwiper,
  DetailBaseInfo,
  DetailShopInfo,
  Scroll,
  DetailGoodsInfo,
  DetailParamInfo,
  DetailCommentInfo,
  GoodsList,
},
 data(){
  return{
    id:null,
    topImages:[],
    goods:{},
    shop:{},
    detailInfo:{},
    goodsparam:{},
    commonInfo:{},
    recommends:[]
  }
},
 created(){
   //保存传入的id
   this.id = this.$route.params.iid

   //请求详情数据
   getDetail(this.id).then(res=>{
     //获取顶部的图片轮播数据
     const data = res.result
    //  console.log(data)
    this.topImages = data.itemInfo.topImages
    //获取商品信息
    this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
    //创建店铺信息
    this.shop = new Shop(data.shopInfo)
    //获取剩余信息
    this.detailInfo = data.detailInfo
    //获取衣服尺寸
    this.goodsparam = new GoodsParam(data.itemParams.info,data.itemParams.rule)
    //获取评论信息
    if(data.rate.cRate !==0){
      this.commonInfo = data.rate.list[0]
    }
   })
   //请求推荐数据
   getRecommend().then(res=>{
     console.log(res)
     this.recommends = res.data.list
   })
  },
  
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style scoped>
#detail{
  position:relative;
  z-index: 9;
  background: #fff;
  height: 100vh;
}
.content{
  height: calc(100% - 44px);
  overflow: hidden;
}
.detail-nav{
  position: relative;
  z-index: 9;
  background:#fff;
}
</style>
<template>
<div id="home">
<nav-bar class="home-nav"><div slot='center'>购物街</div></nav-bar>
<tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1" class="tab-control" v-show="isFixed"></tab-control>
<scroll class="content" ref="scroll" :probe-type="3" @scroll='contentScroll'
 :pull-up-load="true" @pullingUp="loadMore">
  <home-swipe :banner="banner" @tabSwiper="tabSwiper"></home-swipe>
  <recommend-view :recommends="recommends"></recommend-view>
  <feature-view></feature-view>
  <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2" ></tab-control>
  <goods-list :goods="showGoods"></goods-list>
</scroll>
<back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
</div>
</template>

<script>
//子组件
import HomeSwipe from './homeCoplate/HomeSwipe.vue'
import RecommendView from './homeCoplate/RecommendView.vue'
import FeatureView from './homeCoplate/FeatureView.vue'
//公共组件
import NavBar from '../../components/common/navbar/NavBar.vue'
import TabControl from '../../components/content/tabControl/TabControl.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'
//发送请求
import { getHomeMultidata } from "../../network/home";
import {getHomeGoods} from "../../network/home"
// import {debounce} from '../../common/utils'


export default {
name:'Home',
components:{
  HomeSwipe,
  RecommendView,
  FeatureView,
  TabControl,
  NavBar,
  GoodsList,
  Scroll,
  BackTop
},
data(){
  return {
    banner:[],
    recommends:[],
    goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]},
    },
    currentType:'pop',
    isShowBackTop:false,
    baroffsetTop:null,
    isFixed:false,
    saveY:0
  }
},
created(){
  //1、请求多个数据
this.getHomeMultidata()

 //2、请求商品数据
this.getHomeGoods('pop')
this.getHomeGoods('new')
this.getHomeGoods('sell')
},
mounted(){
  const refresh =this.debounce(this.$refs.scroll.refresh,200)
  //3、监听item中图片的加载进度
   this.$bus.$on('itemImageLoad',()=>{
   refresh()
 })
},
computed:{
  showGoods(){
    return  this.goods[ this.currentType].list
  }
},
activated(){
  this.$refs.scroll.bScroll.scrollTo(0,this.saveY,0)
  this.$refs.scroll.refresh()
},
deactivated(){
  this.saveY = this.$refs.scroll.getScrollY()
},
methods:{
  //流行，新款、精选的方法的封装
  tabClick(index){
    switch(index){
      case 0: this.currentType='pop';break;
      case 1: this.currentType='new';break;
      case 2: this.currentType='sell';break
    }
    this.$refs.tabControl1.currentIndex = index
    this.$refs.tabControl2.currentIndex = index
  },
 debounce(func, delay) {
    let timer = null
    return function(...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay);
    }
},
  backClick(){
    this.$refs.scroll.bScroll.scrollTo(0, 0,500)
  },
  contentScroll(position){
    //判读BackTop是否显示
    this.isShowBackTop = (-position.y) > 1000
    //判读tarcontrol是否吸顶
    this.isFixed = (-position.y) > this.offsetTop
  },
  loadMore(){
    this.getHomeGoods(this.currentType)
  },
  //网络请求的封住
  getHomeMultidata(){
    getHomeMultidata().then(res=>{
   this.banner =res.data.banner.list
   this.recommends = res.data.recommend.list
    })
  },
  getHomeGoods(type){
    const page = this.goods[type].page + 1;
   getHomeGoods(type,page).then(res=>{
          //使用for ... of的方法遍历出里面的数据
          //  for(let n of res.data.list){
          //    this.goods[type].list.push(n);
          //  }
    this.goods[type].list.push(...res.data.list);
    this.goods[type].page += 1
    this.$refs.scroll.finishPullUp()
    })
  },
  //监听首页轮播图是否加载完成
  tabSwiper(){
    //获取tar-control的offsetTop高度
    this.offsetTop = this.$refs.tabControl2.$el.offsetTop;
  }
 }
}
</script>

<style scoped>
#home{

  height: 100vh;
  position: relative;
}
.home-nav{
  background: var(--color-tint);
  color:#fff;
}
.tabFixed{
  position:fixed;
  top:44px;
  left: 0;
  right: 0;
}
.tab-control{
  position:relative;
  z-index: 9;
}
.content{
/* height: calc(100% - 93px); */
overflow: hidden;
position:absolute;
top:44px;
bottom: 49px;
left: 0px;
right: 0;
}

</style>
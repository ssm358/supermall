<template>
<div id="home">
<nav-bar class="home-nav"><div slot='center'>购物街</div></nav-bar>
<home-swipe :banner="banner"></home-swipe>
<recommend-view :recommends="recommends"></recommend-view>
<feature-view></feature-view>
<tab-control :titles="['流行','新款','精选']" class="tab-control"></tab-control>
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
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
//发送请求
import { getHomeMultidata } from "../../network/home";

export default {
name:'Home',
components:{
  HomeSwipe,
  RecommendView,
  FeatureView,
  TabControl,
  NavBar,
},
data(){
  return {
    banner:[],
    recommends:[]
  }
},
created(){
 getHomeMultidata().then(res=>{
   this.banner =res.data.banner.list
   this.recommends = res.data.recommend.list
 })
}
}
</script>

<style>
#home{
  padding-top:44px;
}
.home-nav{
  background: var(--color-tint);
  color:#fff;
  position: fixed;
  left:0;
  top:0px;
  right: 0;
  z-index: 5;
}
.tab-control{
  position: sticky;
  top:44px;
}
</style>
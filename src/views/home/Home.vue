<template>
<div id="home">
<nav-bar class="home-nav"><div slot='center'>购物街</div></nav-bar>
<home-swipe :banner="banner"></home-swipe>
<recommend-view :recommends="recommends"></recommend-view>
</div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import { getHomeMultidata } from "../../network/home";
import HomeSwipe from './homeCoplate/HomeSwipe.vue'
import RecommendView from './homeCoplate/RecommendView.vue'
export default {
name:'Home',
components:{
  NavBar,
  HomeSwipe,
  RecommendView
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
.home-nav{
  background: var(--color-tint);
  color:#fff
}
</style>
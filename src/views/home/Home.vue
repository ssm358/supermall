<template>
<div id="home">
<nav-bar class="home-nav"><div slot='center'>购物街</div></nav-bar>
<home-swipe :banner="banner"></home-swipe>
<recommend-view :recommends="recommends"></recommend-view>
<feature-view></feature-view>
<tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tab-control>
<goods-list :goods="showGoods"></goods-list>

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
//发送请求
import { getHomeMultidata } from "../../network/home";
import {getHomeGoods} from "../../network/home"


export default {
name:'Home',
components:{
  HomeSwipe,
  RecommendView,
  FeatureView,
  TabControl,
  NavBar,
  GoodsList,
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
    currentType:'pop'
  }
},
created(){
  //请求多个数据
this.getHomeMultidata()

 //请求商品数据
this.getHomeGoods('pop')
this.getHomeGoods('new')
this.getHomeGoods('sell')
},
computed:{
  showGoods(){
    return  this.goods[ this.currentType].list
  }
},
methods:{
  //方法的封住
  tabClick(index){
    switch(index){
      case 0: this.currentType='pop';break;
      case 1: this.currentType='new';break;
      case 2: this.currentType='sell';break

    }
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
 })
  }
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
  z-index: 9;
}
</style>
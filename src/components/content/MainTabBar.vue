<template>
  <tar-bar>
    <tab-bar-item path='/home' activeColor="blue">
      <img slot='item-icon' src="@/assets/img/tabbar/home.svg" alt="">
      <img slot='item-icon-active' src="@/assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path='/category'>
      <img slot='item-icon' src="@/assets/img/tabbar/category.svg" alt="">
      <img slot='item-icon-active' src="@/assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path='/shopcar'>
      <img slot='item-icon' src="@/assets/img/tabbar/shopcart.svg" alt="">
      <img slot='item-icon-active' src="@/assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path='/propfile'>
      <img slot='item-icon' src="@/assets/img/tabbar/profile.svg" alt="">
      <img slot='item-icon-active' src="@/assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
   </tar-bar>
</template>

<script>
import TarBar from '../../components/common/tabbar/TabBar.vue'
import TabBarItem from '../../components/common/tabbar/TabBarItem.vue'
export default {
name:'MainTabBar',
components:{
  TarBar,
  TabBarItem
}
}
</script>

<style>

</style>
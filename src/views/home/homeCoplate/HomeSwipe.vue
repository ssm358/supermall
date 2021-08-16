<template>
  <div>
    <swiper>
  <swiper-item v-for="item in banner">
    <a :href="item.link">
      <img :src="item.image" alt="" @load="imageLoaded">
    </a>
  </swiper-item>
</swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper/index'
export default {
name:'HomeSwipe',
components:{
 Swiper,
 SwiperItem,
},
props:{
  banner:{
    type:Array,
    default(){
      return []
    }
  }
},
data(){
  return{
    isLoad:false
  }
},
methods:{
  imageLoaded(){
    if(!this.isLoad){
      this.$emit("tabSwiper")
      this.isLoad=true
    }
    
  }
}
}
</script>

<style>

</style>
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
name:'Scroll',
props:{
 probeType:{
   type:Number,
   default:0
 },
 pullUpLoad:{
   type:Boolean,
   default:false
 }
},
data(){
  return {
    bScroll:null,
  }
},
methods:{
  finishPullUp(){
    this.bScroll.finishPullUp()
  },
  refresh(){
    this.bScroll && this.bScroll.refresh()
  },
  getScrollY(){
    return this.bScroll ? this.bScroll.y:0
  }
},
mounted(){
  this.bScroll = new BScroll(this.$refs.wrapper,{
     click:true,
     probeType:this.probeType,
     pullUpLoad:this.pullUpLoad
  })
  this.bScroll.scrollTo(0,0);
  //监听滚动的事件
  if(this.probeType ===2 || this.probeType ===3){
    this.bScroll.on('scroll',(position)=>{
    this.$emit('scroll',position)
    })
  }
  //监听上拉加载更多事件
  this.bScroll.on('pullingUp',()=>{
    this.$emit('pullingUp')
  })
}
}
</script>

<style>

</style>
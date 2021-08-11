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
 }
},
data(){
  return {
    bScroll:null,
  }
},
mounted(){
  this.bScroll = new BScroll(this.$refs.wrapper,{
     click:true,
     probeType:this.probeType
  })
  this.bScroll.scrollTo(0,0);
  this.bScroll.on('scroll',(position)=>{
    // console.log(position)
    this.$emit('scroll',position)
  })
}
}
</script>

<style>

</style>
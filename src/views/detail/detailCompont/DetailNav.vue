<template>
  <div>
    <nav-bar>
      <div slot="center" class="title">
        <div slot="left" class="back" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div v-for="(item,index) in titles" class="title-item" 
        :class="{active: index===currentIndex}" @click="itemClick(index)">{{item}}</div>
      </div></nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
name:'DetailNav',
components:{
  NavBar
},
data(){
  return {
    titles:['商品','参数','评论','推荐'],
    currentIndex:0
  }
},
methods:{
  //投标题点击变色
  itemClick(index){
    this.currentIndex = index
  },
  //返回点击返回事件
  backClick(){
    this.$router.back()
  }
}
}
</script>

<style scoped>
.title{
  display: flex;
}
.title-item{
  flex: 1;
  font-size: 14px;
}
.active{
  color: var(--color-high-text)
}
.back img{
  margin-top:11px;
  margin-left:-60px ;
}
</style>
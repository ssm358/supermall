<template>
  <div class="goods">
   <good-list-item v-for="item in goods":goods-item="item"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem.vue'
export default {
components: { GoodListItem },
name:'GoodsList',
props:{
  goods:{
    type:Array,
    default(){
      return []
    }
  }
}
}
</script>

<style>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1px;
}
</style>
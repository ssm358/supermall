<template>
   <div id="TabBar">
   <slot></slot>
   </div>
</template>

<script>
export default {
name:'TabBar'
}
</script>

<style>
#TabBar{
  display: flex;
  position: fixed;
  left:0px;
  right: 0px;
  bottom:0px;
  background-color: #f6f6f6;
  box-shadow: 0px -2px 1px rgba(50,50,50, .1);
}
</style>
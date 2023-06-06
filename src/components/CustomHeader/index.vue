<!-- 自定义header -->
<template>
  <div class="header">
    <span class="title"> 记账 </span>
    <img src="../../static/img/footer/face.png" class="face" />
  </div>
</template>

<script lang="ts" name="CustomHeader" setup>
// header高度
const headerHeight = `${uni.getSystemInfoSync().statusBarHeight}px`;
console.log("headerHeight", headerHeight);
</script>
<style lang="scss" scoped>
.header {
  height: calc(v-bind(headerHeight) + var(--header-height));
  background: linear-gradient(var(--theme-light-color), #fff);
  position: relative;
  margin-bottom: var(--header-bootom);
  .title {
    position: absolute;
    bottom: 0;
    left: var(--header-left);
    height: 44px;
    display: flex;
    align-items: center;
    color: var(--theme-color);
    font-weight: 600;
    font-size: calc(36px * var(--size));
  }
  .face {
    width: 20px;
    height: 8px;
    position: absolute;
    bottom: 0;
    left: calc(var(--header-left) + 8px);
    display: flex;
  }
}
</style>

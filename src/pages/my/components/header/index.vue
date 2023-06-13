<!-- 自定义header -->
<template>
  <div class="header">
    <div class="user-info">
      <image :src="userInfo.headerUrl" class="header-url" />
      <span class="username">{{ userInfo.username }}</span>
      <span class="forward"> <uni-icons type="forward" size="20" color="#fff"></uni-icons> </span>
    </div>
    <div class="bookkeeping"></div>
  </div>
</template>

<script lang="ts" name="CustomHeader" setup>
import type { UserInfo } from "../../../../types/pages/index";
withDefaults(defineProps<{ userInfo: UserInfo }>(), {});

// header高度
const headerHeight = `${uni.getSystemInfoSync().statusBarHeight}px`;
console.log("headerHeight", headerHeight);
</script>
<style lang="scss" scoped>
.header {
  background: linear-gradient(90deg, #3fc2b4 0%, #45ceb4 100%);
  width: 100%;
  height: calc(523px * var(--size));
  position: relative;
  .user-info {
    padding: calc(145px * var(--size)) calc(51px * var(--size)) 0px;
    display: flex;
    align-items: center;
    .header-url {
      height: calc(160px * var(--size));
      width: calc(160px * var(--size));
      border-radius: 50%;
    }
    .username {
      font-size: calc(40px * var(--size));
      font-weight: bold;
      padding-left: 10px;
      color: var(--white);
    }
    .forward{
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .bookkeeping {
  }
}
</style>

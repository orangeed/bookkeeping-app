<!-- 自定义header -->
<template>
  <div class="header">
    <span class="title"> 记账 </span>
    <img src="../../static/img/footer/face.png" class="face" />
    <uni-section class="header-ledger" type="line">
      <uni-data-select
        v-model="currendLedger"
        :localdata="ledgerList"
        @change="handleChangeLedger"
        :clear="false"
      ></uni-data-select>
    </uni-section>
  </div>
  <Dialog
    :show-dialog="showNewLedger"
    @close="handleClose"
    @enter="handleEnter"
  >
    <input type="text" autofocus />
  </Dialog>
</template>

<script lang="ts">
export default {
  options: {
    styleIsolation: "shared",
  },
};
</script>

<script lang="ts" name="CustomHeader" setup>
import type { Ref } from "vue";
import { ref } from "vue";
import Dialog from "../Dialog/index.vue";

// header高度
const headerHeight = `${uni.getSystemInfoSync().statusBarHeight}px`;
console.log("headerHeight", headerHeight);

// 账本数组
const ledgerList = [
  {
    value: 1,
    text: "📙我的账本",
  },
  {
    text: "➕新建账本",
  },
];

// 当前的账本
const currendLedger: Ref<number> = ref(1);
// 显示账单
const showNewLedger: Ref<boolean> = ref(false);
// 切换账本的事件
const handleChangeLedger = (id: any) => {
  console.log("val", id);
  if (id) {
    // TODO获取账本的id，全局保存，所有的账单查询带有id
  } else {
    showNewLedger.value = true;
  }
};
// 关闭弹窗
const handleClose = (val: boolean) => {
  showNewLedger.value = val;
};
// 确定
const handleEnter = (val: boolean) => {
  showNewLedger.value = val;
  // TODO没有id的话，就新建账单，发起请求，离线模式的话，本地创建账单
};
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
  &-ledger {
    position: absolute;
    bottom: 0;
    left: calc(var(--header-left) + 50px);
    width: 150px;
    border: none;
  }
}
input {
  border-bottom: 1px solid var(--theme-color);
}
</style>
<style>
.uni-select {
  border: none;
}
</style>

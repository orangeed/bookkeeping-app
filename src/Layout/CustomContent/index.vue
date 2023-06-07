<!-- 自定义Content -->
<template>
  <div class="content">
    <Bookkeeping v-show="currentIndex === 0" />
    <Statistics v-show="currentIndex === 1" />
    <Bill v-show="currentIndex === 3" />
    <My v-show="currentIndex === 4" />
  </div>
  <CustomFooter @currentIndex="handleGetIndex" />
</template>

<script lang="ts" name="CustomContent" setup>
import CustomFooter from "../CustomFooter/index.vue";
import Bookkeeping from "../../pages/bookkeeping/index.vue";
import Bill from "../../pages/bill/index.vue";
import Statistics from "../../pages/statistics/index.vue";
import My from "../../pages/my/index.vue";
import type { Ref } from "vue";
import { ref } from "vue";

// 获取当前索引值
const currentIndex: Ref<number> = ref(0);
const handleGetIndex = (index: number) => {
  console.log(index);
  currentIndex.value = index
};
</script>
<style lang="scss" scoped>
.content {
  margin-top: var(--window-top);
}
</style>

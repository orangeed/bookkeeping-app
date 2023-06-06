<!-- 自定义Content -->
<template>
  <div class="content">
    <slot></slot>
  </div>
  <CustomFooter />
</template>

<script lang="ts" name="CustomContent" setup>
import CustomFooter from "../CustomFooter/index.vue";
</script>
<style lang="scss" scoped>
.content {
  margin-top: var(--window-top);
}
</style>

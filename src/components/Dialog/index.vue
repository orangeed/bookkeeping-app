<!-- 弹出框 -->
<template>
  <div v-if="showDialog" class="dialog">
    <div class="dialog-box" :style="{ width: width }">
      <div class="dialog-box-title">新建账单</div>
      <div class="dialog-box-content">
        <slot></slot>
      </div>
      <div class="dialog-box-footer">
        <div class="dialog-box-footer-cancel" @click.stop="handleCancel">
          取消
        </div>
        <div class="dialog-box-footer-enter" @click.stop="handleEnter">
          确定
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="Dialog">
withDefaults(defineProps<{ showDialog: boolean; width?: string }>(), {
  showDialog: false,
  width: "60%",
});

const emit = defineEmits(["close", "enter"]);
// 关闭弹窗
const handleCancel = () => {
  emit("close", false);
};
// 确定
const handleEnter = () => {
  emit("enter", false);
};
</script>

<style lang="scss" scoped>
.dialog {
  height: 100vh;
  width: 100vw;
  background: rgba(37, 37, 37, 0.2);
  position: absolute;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: bounce 1s ease-in-out;

  &-box {
    background: #fff;
    border-radius: 20px;
    overflow: hidden;

    &-title {
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-content {
      padding: 10px 20px;
    }
    &-footer {
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      &-cancel {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--theme-grey);
      }
      &-enter {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--theme-color);
      }
    }
  }
}
@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>

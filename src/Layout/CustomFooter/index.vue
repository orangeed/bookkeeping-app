<!-- 自定义footer -->
<template>
  <div
    class="footer"
    :style="{
      marginBottom: platform === 'ios' ? '10px' : '0px',
    }"
  >
    <div
      class="footer-item"
      v-for="(item, index) in footerMenu"
      :key="index"
      @click.stop="handleChangeRouter(index)"
    >
      <image :src="item.check ? item.checkIcon : item.icon"></image>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script lang="ts" name="CustomContent" setup>
import { ref } from "vue";
import type { Ref } from "vue";
// 底部菜单
import type { FooterMenu } from "../../types/Layout/index";
const footerMenu: Ref<FooterMenu[]> = ref([
  {
    name: "记账",
    icon: "../../static/image/footer/1.png",
    checkIcon: "../../static/image/footer/1-check.png",
    check: true,
    url: "/pages/index/index",
  },
  {
    name: "统计",
    icon: "../../static/image/footer/2.png",
    checkIcon: "../../static/image/footer/2-check.png",
    check: false,
    url: "/pages/index/index",
  },
  {
    name: "",
    icon: "../../static/image/footer/add.png",
    checkIcon: "../../static/image/footer/add.png",
    check: false,
  },
  {
    name: "账单",
    icon: "../../static/image/footer/3.png",
    checkIcon: "../../static/image/footer/3-check.png",
    check: false,
    url: "/pages/index/index",
  },
  {
    name: "我的",
    icon: "../../static/image/footer/4.png",
    checkIcon: "../../static/image/footer/4-check.png",
    check: false,
    url: "/pages/index/index",
  },
]);

const platform: string = uni.getSystemInfoSync().platform;

const emit = defineEmits(["currentIndex"]);

// 跳转页面
const handleChangeRouter = (index?: number) => {
  emit("currentIndex", index);
  footerMenu.value.forEach((v, i) => {
    v.check = i === index;
  });
};
</script>
<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  height: var(--footer-height);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &-item {
    width: calc((100% - 12%) / 4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: var(--footer-height);
    font-size: var(--footer-text-size);
    position: relative;

    img,
    image {
      width: calc(44px * var(--size));
      height: calc(44px * var(--size));
      margin-bottom: 4px;
    }
  }
}
.footer-item:nth-child(3) {
  height: calc(100px * var(--size));
  margin-top: -30px;
  width: 12%;
  img,
  image {
    width: calc(100px * var(--size));
    height: calc(100px * var(--size));
    margin-bottom: 0px;
  }
}
</style>

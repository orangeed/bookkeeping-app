// 底部菜单
import type { FooterMenu } from "../types/Layout/index";
export const footerMenu: FooterMenu[] = [
    {
      name: "记账",
      icon: "../../static/img/footer/1.png",
      checkIcon: "../../static/img/footer/1-check.png",
      check: false,
      url: "/pages/index/index",
    },
    {
      name: "统计",
      icon: "../../static/img/footer/2.png",
      checkIcon: "../../static/img/footer/2-check.png",
      check: false,
      url: "/pages/index/index",
    },
    {
      name: "",
      icon: "../../static/img/footer/add.png",
      checkIcon: "../../static/img/footer/add.png",
      check: false,
    },
    {
      name: "账单",
      icon: "../../static/img/footer/3.png",
      checkIcon: "../../static/img/footer/3-check.png",
      check: false,
      url: "/pages/index/index",
    },
    {
      name: "我的",
      icon: "../../static/img/footer/4.png",
      checkIcon: "../../static/img/footer/4-check.png",
      check: false,
      url: "/pages/index/index",
    },
  ];
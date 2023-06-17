import { defineComponent, reactive, toRef, toRefs } from "vue";
import MyHeader from "./components/header/index.vue";
import { headerUrlList } from "@/utils/enum";
import type { UserInfo } from "@/types/pages";

export default defineComponent({
  name: "My",
  components: { MyHeader },
  setup() {
    const userInfo: UserInfo = reactive({
      headerUrl: headerUrlList[0],
      username: "orange",
    });
    return {
      userInfo,
    };
  },
});

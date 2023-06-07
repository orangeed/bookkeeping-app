import { defineComponent, reactive, toRefs } from "vue";
import CustomHeader from "../../components/CustomHeader/index.vue";
import CustomContent from "../../Layout/CustomContent/index.vue";
export default defineComponent({
  name: "Statistics",
  components: { CustomHeader, CustomContent },
  setup() {
    const data = reactive({});
    return {
      ...toRefs(data),
    };
  },
});

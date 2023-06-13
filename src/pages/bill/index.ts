import { defineComponent, reactive, toRefs } from "vue";
import CustomHeader from "../../components/CustomHeader/index.vue";
export default defineComponent({
	name: "Bill",
	components: { CustomHeader, },
	setup() {
		const data = reactive({});
		return {
			...toRefs(data),
		};
	},
});
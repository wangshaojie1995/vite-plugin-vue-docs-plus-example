<template>
  <div class="el-badge">
    <!-- 测试插槽一 -->
    <slot></slot>
    组件内212
  </div>
</template>

<script lang="ts">
/**
 * 组件名称
 * @desc 组件描述
 * @navTitle 组件
 * @navOrder 1
 */
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "ElBadge",
  props: {
    value: {
      type: [String, Number],
      default: "2",
    },
    /**
     * 最大值
     * @type 99|22
     * @default 99
     */
    max: {
      type: Number,
      // default: () => 12,
      default: 99,
    },
    isDot: Boolean,
    hidden: {
      type: Boolean,
      default: false,
      required:true
    },
    array: {
      type: Array,
      default: () => ([1,2])
    },
    /**
     * 对象
     * @default value {a:1}
     */
    obj: {
      type: Array,
      default: () => ({a:1})
    },
    /**
     * 类型
     * @type primary|success|warning|info|danger
     */
    type: {
      type: String,
      default: "primary",
      validator: (val: string) => {
        return ["primary", "success", "warning", "info", "danger"].includes(
          val
        );
      },
    },
  },
  emits: {
    // 没有验证函数
    click: null,

    /**
     * 带有验证函数
     * 详细说明详细说明详细说明详细说明详细说明
     * @param {Object} payload 参数一
     * @param {Object} test 参数二
     * @param test1 参数三
     * @return Boolean
     */
    submit: (payload:any) => {
      if (payload.email && payload.password) {
        return true;
      } else {
        console.warn(`Invalid submit event payload!`);
        return false;
      }
    },
  },
  setup(props) {
    const content = computed(() => {
      if (props.isDot) {
        return;
      }
      if (typeof props.value === "number" && typeof props.max === "number") {
        return props.max < props.value ? `${props.max}+` : props.value;
      }
      return props.value;
    });
    /**
     * 测试函数
     * 详细说明详细说明详细说明详细说明详细说明
     * @param {Object} params 参数一
     * @param {Object} test 参数二
     * @return Boolean
     */
    function test(params: any) {
      console.log(params);
    }
    return {
      content,
      test,
    };
  },
});
</script>

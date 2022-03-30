<template>
  <div class="el-badge">
    <!-- 测试插槽一 -->
    <slot></slot>
    组件内容222222
  </div>
</template>

<script lang="ts">
/**
 * 组件名称1
 * @desc 组件描述
 * @navTitle 组件2
 * @navOrder 2
 */
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "ElBadge",
  props: {
    value: {
      type: [String, Number],
      default: "2",
    },
    max: {
      type: Number,
      // default: () => 12,
      default: 222,
    },
    isDot: Boolean,
    hidden: {
      type: Boolean,
      default: false
    },
    array: {
      type: Array,
      default: () => ([1,2])
    },
    // 测试对象
    obj: {
      type: Array,
      default: () => ({a:1})
    },
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
  emits: [
    // 更新 value
    'update:value'
  ],
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

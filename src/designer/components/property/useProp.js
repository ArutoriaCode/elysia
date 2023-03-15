import recorder from "~core/recorder";
import useAlias from "../../hooks/useAlias";
import { seletedSchema } from "~core/select";
import { COMMON_KEY_NAME } from "../../utils/helper";
import { computed, toRef, watch, onUnmounted } from "vue";

/** 属性响应式获取，以及变化监听记录 */
export default function useProp(property) {
  const watchProp = computed(() => seletedSchema.value.options[property]);

  // 获取属性定义的别名
  const propertyAlias = useAlias([COMMON_KEY_NAME, property]);
  // 基于选中的组件对象的一个属性，创建一个对应的 ref
  const propertyModel = toRef(seletedSchema.value.options, property);

  let unwatch = null;
  const selectdId = seletedSchema.value.id;
  const record = () => {
    const { name, nameAlias, id } = seletedSchema.value;
    // 选中的组件切换后，卸载原先组件的被动监听
    if (selectdId !== id && unwatch) {
      unwatch();
      return;
    }

    recorder.add(`${nameAlias || name}组件属性[${propertyAlias}]被修改`, "prop-icon");
  };

  // 被动监听记录，如编辑属性的组件是选择器、单选、多选、switch这种类型的，使用被动监听即可
  unwatch = watch(watchProp, record);
  onUnmounted(() => {
    if (unwatch && typeof unwatch === "function") {
      unwatch();
    }
  });

  // 主动记录，使用后被动监听将取消，推荐用在可频繁修改属性值的组件上
  // 如：<a-input @blur="activeRecord">
  const useActiveRecord = () => {
    if (unwatch && typeof unwatch === "function") {
      unwatch();
    }

    let oldPropModel = propertyModel.value;
    return () => {
      if (oldPropModel === propertyModel.value) {
        return;
      }

      // 记录本次值用作下次匹配
      oldPropModel = propertyModel.value;
      record();
    };
  };

  return {
    unwatch,
    useActiveRecord,
    propertyAlias,
    propertyModel
  };
}

import recorder from "~core/recorder";
import useAlias from "./useAlias";
import isEqual from "lodash.isequal";
import { seletedSchema } from "~core/select";
import { COMMON_KEY_NAME } from "../utils/helper";
import { toRef } from "vue";

/** 属性响应式获取，以及变化监听记录 */
export default function useProp(property) {
  // 获取属性定义的别名
  const propertyAlias = useAlias([COMMON_KEY_NAME, property]);
  // 基于选中的组件对象的一个属性，创建一个对应的 ref
  const propertyModel = toRef(seletedSchema.value.options, property);

  /**
   * 主动记录，需要主动绑定到组件的事件上，如：
   * - 输入框失去焦点后才检查是否有变动
   * ```vue
   * <a-input @blur="activeRecord" v-model:value="propertyModel" />
   * ```
   * - 下拉选择器更改选择之后才触发
   * ```vue
   * <a-select @change="activeRecord" v-model:value="propertyModel"></a-select>
   * ```
   * - 模态框点击确认按钮之后才记录
   * ```vue
   * <a-modal @ok="activeRecord">
   *  <a-input v-model:value="propertyModel"></a-input>
   * </a-modal>
   * ```
   */
  const createChangeRecord = () => {
    let oldPropModel = propertyModel.value;

    return () => {
      if (isEqual(oldPropModel, propertyModel.value)) {
        return;
      }

      const { name, nameAlias } = seletedSchema.value;
      // 记录本次值用作下次匹配
      oldPropModel = propertyModel.value;
      recorder.add(`${nameAlias || name}组件属性[${propertyAlias}]被修改`, "prop-icon");
    };
  };

  return {
    checkChangeRecord: createChangeRecord(),
    propertyAlias,
    propertyModel
  };
}

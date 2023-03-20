import recorder from "~core/recorder";
import useAlias from "./useAlias";
import isEqual from "lodash.isequal";
import { seletedSchema } from "~core/select";
import { COMMON_KEY_NAME } from "../utils/helper";
import { toRef, nextTick } from "vue";

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
   * <a-input @blur="action.record" v-model:value="propertyModel" />
   * ```
   * - 下拉选择器更改选择之后才触发
   * ```vue
   * <a-select @change="action.record" v-model:value="propertyModel"></a-select>
   * ```
   * - 模态框点击确认按钮之后或者取消关闭的时候才记录
   * ```vue
   * <a-modal @ok="action.record" @cancel="action.record">
   *  <a-input v-model:value="propertyModel"></a-input>
   * </a-modal>
   * ```
   */
  const createChangeAction = () => {
    let oldPropModel = propertyModel.value;
    let noRecordNum = 0;

    return {
      undoChange: () => {
        propertyModel.value = oldPropModel; // 取消本次更改，用途：用户定义的唯一标识重复，就撤销本次更改
        noRecordNum += 1;
      },
      record: callback => {
        // 延迟记录，以免撤销更改的操作也被记录进行
        nextTick(() => {
          if (isEqual(oldPropModel, propertyModel.value)) {
            return;
          }

          const { name, nameAlias } = seletedSchema.value;

          recorder.add(
            `${nameAlias || name}组件属性[${propertyAlias}]被修改`,
            "prop-icon"
          );

          if (typeof callback === "function") {
            // 返回新值、旧值
            callback(propertyModel.value, oldPropModel);
          }

          // 记录本次值用作下次匹配
          oldPropModel = propertyModel.value;
        });
      }
    };
  };

  return {
    action: createChangeAction(),
    propertyAlias,
    propertyModel
  };
}

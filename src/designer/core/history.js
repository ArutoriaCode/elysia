import dayjs from 'dayjs'
import store from "./store";
import { reactive } from "vue";
import { seletedSchema } from "./select";

export const history = reactive({
  historyList: [],
  step: -1
});

export default {
  /**
   * 添加历史记录
   * @param {string} action 记录所展示的操作文本
   * @param {string} icon 记录所展示的图标
   * @param {string} iconColor 图标颜色
   */
  add(action, icon, iconColor = '') {
    // 防止记录的历史数据过多
    if (history.historyList.length === 15) {
      history.historyList.pop();
    }

    history.historyList.unshift({
      action,
      store,
      seletedSchema,
      icon: icon || "",
      iconColor,
      recordTime: dayjs().format('YY/MM/DD HH:mm:ss'),
    });
  }
};

import dayjs from "dayjs";
import store, { computedPath } from "./store";
import { reactive, shallowRef, computed } from "vue";
import { seletedSchema, setSelected } from "./select";
import cloneDeep from "lodash.clonedeep";

export const historys = reactive({
  historyList: [],
  step: -1
});

const actionStore = shallowRef(null);
export const isViewStatus = computed(() => actionStore.value !== null);
export const disabledRedo = computed(
  () => historys.step === 0 || historys.historyList.length === 0
);
export const disabledUndo = computed(() => {
  const undoStep = historys.step + 1;
  const maxStep = historys.historyList.length - 1;
  return undoStep > maxStep;
});

const recorder = {
  /**
   * 添加历史记录
   * @param {string} action 记录所展示的操作文本
   * @param {string} icon 记录所展示的图标
   */
  add(action, icon) {
    // 防止记录的历史数据过多
    if (historys.historyList.length === 20) {
      historys.historyList.pop();
    }

    const selected = seletedSchema.value;
    historys.step = 0;
    historys.historyList.unshift({
      action,
      store: cloneDeep(store),
      selectedPath: selected ? selected.path : [], // 只记录选中组件的路径信息（如果记录完整的数据会包含子组件等信息）
      icon: icon || "",
      recordTime: dayjs().format("YY/MM/DD HH:mm:ss")
    });
  },
  viewHistory(item) {
    if (!actionStore.value) {
      actionStore.value = cloneDeep(store);
    }

    Object.keys(item.store).forEach(key => {
      store[key] = item.store[key];
    });

    setSelected(item.selectedPath);
  },
  restore(record = true) {
    if (!isViewStatus.value) {
      return;
    }

    actionStore.value = null;
    if (record) {
      recorder.add("还原", "restore-icon");
    }
  },
  redo() {
    if (disabledRedo.value) {
      return;
    }

    const redoStep = historys.step - 1;
    const redoData = historys.historyList[redoStep];
    if (!redoData) {
      return;
    }

    Object.keys(redoData.store).forEach(key => {
      store[key] = redoData.store[key];
    });
    historys.step = redoStep;
  },
  undo() {
    if (disabledUndo.value) {
      return;
    }

    const undoStep = historys.step + 1;
    const undoData = historys.historyList[undoStep];
    if (!undoData) {
      return;
    }

    Object.keys(undoData.store).forEach(key => {
      store[key] = undoData.store[key];
    });
    historys.step = undoStep;
  }
};

export default recorder;

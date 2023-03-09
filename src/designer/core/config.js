import { readonly, reactive } from "vue";

const config = reactive({
  panelFixed: false,
  hiddenPanel: false,
  settingFixed: false,
  hiddenSetting: false
});

/** 设置左侧菜单栏是否固定 */
export const setPanelFixed = value => {
  if (value === undefined) {
    config.panelFixed = !config.panelFixed;
    return;
  }
  config.panelFixed = !!value;
};

/** 设置右侧属性编辑区域是否可视 */
export const setPanelVisible = value => (config.hiddenPanel = !value);

/** 设置右侧属性编辑区域是否固定 */
export const setSettingFixed = value => {
  if (value === undefined) {
    config.settingFixed = !config.settingFixed;
    return;
  }
  config.settingFixed = !!value;
};

export const setSettingVisible = value => (config.hiddenSetting = !value);

export default readonly(config);

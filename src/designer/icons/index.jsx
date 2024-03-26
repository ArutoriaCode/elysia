import { defineComponent } from "vue";
import Icon from '@ant-design/icons-vue';
import './index.css'

export default {
  install(app) {
    const svgs = import.meta.glob("./*.svg", { eager: true, as: "component" });
    Object.keys(svgs).forEach(key => {
      const name = key.replace(/\.\/(.*?)\.svg/, "$1");
      const comp = defineComponent({
        setup() {
          const className = `elysia-icon ${name}`;
          return () => <Icon class={className} component={svgs[key]}></Icon>
        }
      });

      // 将本文件目录下的svg注册为全局图标
      app.component(name, comp);
    });
  }
};

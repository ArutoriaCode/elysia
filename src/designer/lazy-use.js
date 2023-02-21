import "ant-design-vue/dist/antd.css";
import { Menu, Button, Collapse, Card, Form, Input } from "ant-design-vue";

export default {
  install(app) {
    app.use(Menu).use(Button).use(Collapse).use(Card).use(Form).use(Input);
  }
};

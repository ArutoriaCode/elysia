import {
  Menu,
  Button,
  Collapse,
  Card,
  Form,
  Input,
  List,
  Select,
  Switch,
  Tree,
  Alert,
  Spin,
  Skeleton,
  Row,
  Col,
} from "ant-design-vue";

import { Modal } from "ant-design-vue";
import "ant-design-vue/es/modal/style/css";

export default {
  install(app) {
    app
      .use(Menu)
      .use(Button)
      .use(Collapse)
      .use(Card)
      .use(Form)
      .use(Input)
      .use(List)
      .use(Select)
      .use(Switch)
      .use(Tree)
      .use(Alert)
      .use(Spin)
      .use(Skeleton)
      .use(Row)
      .use(Col)
      .use(Modal);
  }
};

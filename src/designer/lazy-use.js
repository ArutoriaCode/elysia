import { Menu, Button, Collapse, Card, Form, Input, List, Select, Switch, Tree } from "ant-design-vue";

export default {
  install(app) {
    app.use(Menu).use(Button).use(Collapse).use(Card).use(Form).use(Input).use(List).use(Select).use(Switch).use(Tree)
  }
};

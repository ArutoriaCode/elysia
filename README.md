# Elysia Form

基于**Vue3**、**Ant Design of Vue**、**Vite**的可视化设计低代码表单

### 在线预览

[在线Demo](https://arutoriacode.github.io/elysia)

### 功能一览

- [x] 拖拽式可视化表单设计
- [x] 支持用户自定义代码来控制组件
- [x] 支持自定义CSS样式
- [x] 支持自定义校验逻辑
- [x] 支持开发自定义组件
- [x] 支持响应式自适应布局

### 项目结构

```
elysia
├── public
├── src
│   ├── assets
│   ├── builds-render # 渲染器
│   ├── components
│   ├── designer # 设计器
│   ├── extension # 开展组件
│   ├── hooks
│   ├── utils
│   ├── App.vue
│   ├── demo.json
│   ├── main.js
│   └── style.less
├── LICENSE
├── README.md
├── index.html
├── install-builds.js
├── jsconfig.json
├── package.json
├── vite-render-lib.config.js
└── vite.config.js
```

### 安装依赖

```shell
npm install
```

### 本地调试

```shell
npm run dev
```

### 打包

支持打包为库调用（仅渲染器）
```shell
npm run build:render
```

### 浏览器兼容性

不支持IE 11(包括)以下的浏览器

### 开发自定义组件

在 **src/extension** 下有个 github 自定义组件可以参考

同时还需要在渲染器**builds-render**目录下有对应的渲染组件

**需要注意** 不管设计器还是渲染器的组件都采用了`<script setup>` + `hooks`的形式进行编写的

### 自定义图标

设计器**designer**下的**icons**图标来源于[fontawesome](https://fontawesome.com/icons?d=gallery)免费且开源的图标，你可以从中复制SVG的代码在icons文件夹中新建一个svg文件并粘贴复制的内容，保存后将会自动导入并注册为组件，**组件名称就是文件名（不包含.svg后缀）**


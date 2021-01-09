# iconfont 库使用指南

> 核心文件：src\icon\index.js
> icon 库：src\icon\icon.js

#### 引入方式：symbol

- src\icon\index.js 中全局注册：

```javascript
import icon from "./icon";
import { Icon } from 'ant-design-vue';

const IconComponent = Icon.createFromIconfontCN({
  scriptUrl: icon
});
export default {
  install(Vue) {
    Vue.component('icon-font', IconComponent);
  }
};
```

- main.js 中 use：

```javascript
import IconFont from './icon';
Vue.use(IconFont);
```

#### 更新覆盖 icon 库

- 进入 iconfont.cn -> 知识库项目 -> Symbol -> 生成代码，例如：

  > //at.alicdn.com/t/font_2161440_7bz2fb36utv.js

- 浏览器打开上述链接，如 at.alicdn.com/t/font_2161440_7bz2fb36utv.js ，全选，复制内容

- 覆盖粘贴 src\icon\icon.js 文件内容

#### 在需要使用 icon 的组件中添加元素：

`<icon-font type='iconxxxx' />`
- css可调内容：
```css
  font-size: 16px; //图标大小
  color: #f00; //图标颜色
```
learn vite

### 1.node_modues 包里面没有导出 esmodule包，vite会进行二次包装
```js
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
const test = ()=> (1,2,3); //test() => 3;
// __commonJS 实现 require + module.exports
```
### 2.对于es5包，每个模块使用 __commonJS 包裹，进行二次分装为一个function
```js
// node_modules/react/cjs/react-development.js 引入object-assign 包
var _assign = require('object-assign')
// 被vite 打包使用__commonJS包装后

var _assign = require_object_assign();
// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports) {
    "use strict";
    // 第三方包
    // ......
});
```

#### 
- 使用babel编译jsx
- 根据入口分析代码依赖
- 使用__commonJS包装第三方库， 创建依赖函数包地图
- 替换没有导处esmobule 模块的第三方包，使用__commonJS function 包裹es5代码，复制到node_modules/.vite 文件夹下
- css 包装成 import 模块
- 图片 先包装成 import 模块，导出路径，在根据路径请求资源
```js
// eg
import React from 'react'
import __vite__cjsImport0_react from "/node_modules/.vite/react.js?v=2c9703df";
const React = __vite__cjsImport0_react.__esModule ? __vite__cjsImport0_react.default : __vite__cjsImport0_react;
```
- 修改引用路径
- 创建服务器
- 监听修改


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
    // ......
});
```

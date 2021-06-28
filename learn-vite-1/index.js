var __commonJS = (cb, mod) => function __require() {
  console.log('---cb',cb)
  console.log('---mod',mod)
  console.log('---Object.keys(cb)[0]',Object.keys(cb)[0])
  console.log('---cb[Object.keys(cb)[0]]',cb[Object.keys(cb)[0]])


  const fn = cb[Object.keys(cb)[0]];

  console.log('---(0, fn)',(0, fn))
  // fn((mod = { exports: {} }).exports, mod);

  return mod || (0, fn)((mod = { exports: {} }).exports, mod), mod.exports;
  // return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

var testFn = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    module.exports.a = 'a'
  }
})

function test(){
  return (0,()=> (1,3,4))(),213
}

console.log('---testFn', testFn())
console.log('test', test())
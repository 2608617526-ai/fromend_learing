"use strict" // 全局的严格模式，在开发当中他妈的本来就IU应该用严格模式啊，提升性能
a = 10;
console.log(a); //会报错

function fn(){
    "use strict"
    // 只在函数使用严格模式
}
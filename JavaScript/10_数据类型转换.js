var bool = false;
console.log(typeof bool);
var a = null;
console.log(typeof a);

var b;
console.log(typeof b);
console.log(b);
// 字符串，布尔值，数值，对象，空值和未定义

// 强制类型转换
var c =123 ;
console.log(typeof(c.toString()));
// null 和 undefined 没有 toString方法

// 调用string函数
a = 123;
a= String(a);
console.log(typeof a);
// 这个方法null和undefined也可以转换



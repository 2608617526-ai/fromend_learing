// 使用Boolean函数
let a = 1;
a = Boolean(a);
console.log(typeof a, a);
// 表示有的都是true
// 表示没有和0，空的都是false，比如0和NaN

// 字符串当中，只有空串是false
let b = "";
b = Boolean(b);
console.log(b);

// 0，NaN,空串，null,undefined,false都会转换为false
// 对象会转换为true
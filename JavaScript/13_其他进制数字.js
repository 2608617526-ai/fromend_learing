// 需要表示16进制的数字时，需要用0x开头，八进制数字的时候，用0开头
let a = 0x10;
console.log(a);
// 转换为十进制输出，自动

let b = 0o77;
console.log(b);

let c = 0b11;
console.log(c);

//可以在parseInt()中传递第二个参数，来指定数字进制
let d = "0o77";
d = parseInt(d,10);
console.log(d);



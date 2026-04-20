/* 
    !逻辑非
    &&与
    || 或
    如果对一个非布尔值进行取反，那么它会先将其转换为布尔值再进行取反


*/
let a = null;
a = !a;
console.log(a);


let b = true;
let c = false;
console.log(true && false);
// 与运算是找false，有false就直接返回false了，false后面的语句不会被执行
console.log(1 && 2); // 对于非布尔值，会直接返回原值，第一个值为true，则返回第二个值
console.log(a || b);
// 或运算是找true，第一个找到了后面就不会再执行下去了
// 调用number函数
let a = "abc";
console.log(typeof a);
a= Number(a);
console.log(typeof a);
console.log(a);

console.log("\n");

a=" "
a= Number(a);
console.log(typeof a);
console.log(a);

a=true;
a= Number(a);
console.log(typeof a);
console.log(a);

a=null;
a= Number(a);
console.log(typeof a);
console.log(a);

a=undefined;
a= Number(a);
console.log(typeof a);
console.log(a);

// 这个方法只针对字符串，好像非字符串会先转换为字符串在转为number，但是
a="123.22a567px"
// 读取到第一个非数字，后面的全丢了
a=parseInt(a);
console.log(a);

a="156.524px"
a=parseFloat(a);
console.log(a);
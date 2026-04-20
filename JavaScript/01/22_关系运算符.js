//关系运算，只返回true 和 false
let result = 1 >=5;
console.log(result);

//不用类型的比较
result = 5 <"10";
//先转换成数值，再进行比较，原理应该是利用Number函数吧
console.log(result);
// 当两两端都是字符串，会逐位比较字符串的Unicode编码
result = "12" < "2";
console.log(result);

//检查num是否在五和十之间
num = 5;
result = num>5 && num<10;
console.log(result);

let a = 1;
let b = 2;
let result1 = a > b ? a : b;
console.log(result1);
// 对非数值类型进行正负运算，会先将其转换为数值然后再运算
// 自增运算符 ++
let a = 1;
let b = a++;
console.log(b);
console.log(a);

let n = 5;
let result = n++ + ++n +n;
console.log(result);

// a++是老值，++a是新值
// a--和--a也是类似

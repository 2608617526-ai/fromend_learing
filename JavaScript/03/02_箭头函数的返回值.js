const sum = (a , b) => {
    return a + b;
}
const sum2 = (a = 10,b = 500) => a+b;
// 简写可以这样，箭头后面自动成为函数的返回值
let result = sum2()  ;
console.log(result)

const fn=()=>({name:"孙悟空"})
// 代码块和对象都是大括号，函数的返回值是undefined
// 使用括号即可认为是对象
let result1 = fn();
console.log(result1);
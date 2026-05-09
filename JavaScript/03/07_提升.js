 a = 10 ;
// 相当于直接给window添加属性
console.log(a);


console.log(b);
// 使用var声明的变量，它会在所有代码被执行前被声明，
// 但是不被赋值，还是在打印之后被赋值。所以是undefined
var b = 10 ;

// 用function开头的函数也会被提升，你用let都是不阔以滴

// let其实也会提升，但是会禁止被访问

// 提升的作用是，为了更合理地分配内存
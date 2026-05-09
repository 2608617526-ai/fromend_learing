var a = 1 ;
fn();// 如果没写就是undefined，写了实参就死实参
console.log(a);
function fn(a){
    // 定义形参相当于在函数作用域中声明了对应变量但是没有赋值
    console.log(a);
    a = 2 ;
    console.log(a);
}
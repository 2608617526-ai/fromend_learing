let a = 10 ;
{
    let a = 100;
    {
        let a = 1000 ; 
        console.log(a);}
    // 会一直往上一层寻找，如果到全局作用域都没找到，则返回xx is not undefined，报错
}



let b = 333;
const fn1=function(){
    console.log(b);
    
    fn2();
}
// 函数可以访问外部的全局变量
fn1();

function fn2(){
        console.log(b);
    }

// 函数声明的解析优先于代码的执行。
// 如果你把 fn2 改写成函数表达式（赋值给变量），它就不会被提升，程序就会报错：
// 在 JavaScript 中，使用 function 关键字定义的函数（函数声明）会被“提升”到当前作用域的最顶部
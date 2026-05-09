var a = 1 ;
function fn(){
    console.log(a);
    // 刚才在预编译阶段，局部作用域已经有了一个 a，
    // 它的值是 undefined。既然在局部找到了，
    // 它就不会再去外层找那个全局的 a = 1 了
    var a = 2 ;
    console.log(a);
    // 那在这段代码里，var a = 1是最早执行的代码，
    // 但是调用函数的时候不会去找它，对吗。
    // 而是在调用之前，函数内部通过var a = 2 这个语句声明了变量，
    // 就近找的这个
}
fn();
console.log(a);

{let a = 55;
function fn2(){
    console.log(a);
    // 函数内部没有声明变量，于是往外面的作用域去找，还真找到了
    a = 10;
    // 这里只是修改a的值，并没有声明
    console.log(a);
    // 只是修改了这个作用域里面的a
}
}
fn2();
console.log(a);
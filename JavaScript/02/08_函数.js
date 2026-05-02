function kk(){
    console.log("hello,this is a function.");
}

const a = function obj(){

}
// 一般不会有函数内部需要被修改的情况，所以用const
kk();

const kk1 = function(){
    console.log(typeof kk1);
}

kk1();

const fun1 = () => console.log("这是一个箭头函数");
fun1();

const canshu = function(a,b){
    console.log(a+b);
}

canshu(45,88);
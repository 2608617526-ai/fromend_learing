function kk(a){
    console.log("a的值为",a);
    console.log(a.name);
    a.name = "猪八戒";
}
let obj = {name:"孙悟空"};
kk(obj);
// obj传递的是变量的值
console.log(obj);

function test(a){
    a = {name:"唐僧"}; // 创建了一个新的地址，来存储name = 唐僧 这个对象，并且把这个地址赋给a，而obj的地址依然是name = 孙悟空的地址。
    // 由于函数结束都没有变量可以被a赋值，a指向的地址会被回收，这个函数用了等于没用。
}
let obj = {name:"孙悟空"};
test(obj);
console.log(obj);
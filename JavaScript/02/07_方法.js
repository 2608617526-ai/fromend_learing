let obj = {};
obj.name = "method";
obj.sayHello = function(){
    console.log("Hello!");
}
console.log(obj); // console也是对象，这个叫调用对象的log方法
obj.sayHello(); // z这就是调用方法的方法
// 当对象的属性值是函数时，我们就称这个函数为这个对象的方法
document.write();
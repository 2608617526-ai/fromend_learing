let obj = {name:"kk",bigName:"kunkun",call:introduction};
let obj1 = {name:"yy",bigName:"yiying",call:introduction}
 
function introduction(){
    console.log("大家好，我是",this.name);
}
obj.call();
obj1.call();

// 箭头函数的this只和上一级有关，上一级的（）是什么就是什么，
// 而function创建的函数，和调用的方式有关。
// 通过函数方式调用那就是window，通过方法就是（）

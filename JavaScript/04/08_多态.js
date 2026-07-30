class Person{
    constructor(name){
        this.name =name;
    }
}
class Dog{

}
let a = 10 ;
dog = new Dog();
person = new Person("kk");
function sayHello(obj){
    // if(obj instanceof Person){
        console.log("Hello,",obj.name)
    // }
    // else{
    //     console.log("对象的类型不对！");
    // }
}
sayHello(person);
sayHello(dog);
sayHello(a);
// js里不会检查参数的类型，这点好像和C语言不一样
// 多态可以避免创建很多功能重复的参数，使得代码更加灵活
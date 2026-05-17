// 类是对象的模板，给对象分类

class person{
// 类的代码块自带严格模式
// 用来设置对象的属性
    name // 表示person的实例属性name，只能通过person1来访问
    age = 18 ;
    // 静态属性
    static test1 = "test静态属性"
    static test2 = "静态属性只能通过类，person来访问"
    sayHello1 = function(){
        console.log("这种方式不推荐");
    }
    sayHello2(){
        console.log("虽然直接打印person看不见，但是确实是可以通过实例调用的");
    }
    sayHello3(){
        console.log(this.name,"在实例方法中，this就是当前的实例");
    }
    static test3(){
        console.log(this.name,"我是静态方法,this指向当前的类");
    }

}

const dog = class{

}

console.log(person);



// 创建对象

const person1 = new person();
const person2 = new person();
const dog1 = new dog();
const dog2 = new dog();


person1.name = "kk";
console.log(person);
console.log(person.test1);
console.log(person.test2);
console.log(person1);
console.log(person2);
console.log(person1 instanceof person) ;
// 判断
console.log(person2 instanceof dog) ;
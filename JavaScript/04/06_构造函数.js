class person{
    constructor(name,age,gender){
        // 该方法称为构造函数
        // 会在调用类创建对象的时候执行
        this.name = name ;
        // 把constructor函数接收到的参数name传递给this.name
        // 这里的this.name，this指向person
        this.age = age ;
        this.gender = gender ;
        console.log("构造函数执行了",name,age,gender);
    }
    
}


const person1 = new person("kk",21,"男") ;
console.log(person1);
console.log(person1.name);
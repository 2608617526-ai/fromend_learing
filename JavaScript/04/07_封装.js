// 封表示保证数据的安全，不能有离谱的数据
class Person{
    #address = "花果山" ;
    #age ;
    #name;
    #gender;
    // 私有属性只能在类的内部访问和使用
    // 自己再设置gettersetter方法去进行访问和修改
    // 假如说我不想开放修改权限，我就直接把setName函数去掉，权限在我
    constructor(name,age,gender ){
        this.#name = name ;
        this.#age = age ;
        this.#gender = gender ;
        // 私有的属性只能够先声明再访问
    }
    sayHello(){
        console.log(this.#name) ;
        console.log(this.#address);
    }
    getName(){
        return this.#name;
    }
    setName(name){
        this.#name = name ;
    }
        // 通过这种方法可以修改私有属性，也就是说是可以内部通过函数修改，但是不能直接改
   // 避免被直接修改，也就免了很多麻烦，这也就是封的含义
    setAge(age){
        if(age >= 0){
            this.#age = age ;
            // 判断值是否合法
        }
        else{
            console.log("年龄不合法");
        }
    }
    get gender(){
        return this.#gender;
    }
    set gender(gender){
        this.#gender = gender;
    }

}
 const person1 = new Person("kk",21,"man");
 console.log(person1);
 person1.sayHello(); // 内部使用是可以的
  // console.log(person1.#age);
 // 外部无法访问，只能在类内部使用
 person1.setName("猪八戒");
 let a = person1.getName(); // 私有属性不可以直接访问，但是可以通过方法调用间接得到
 console.log(a);

 console.log(person1.gender);
// 可以直接用来使用
 // 相当于通过读取属性来调用一个getter方法，get不用传参

 person1.gender = "women"; //特殊的调用，省略的写法
 // 相当于通过修改属性来调用一个修改的函数
 console.log(person1.gender);

function fn(a){
    console.log("a=",a);
    a();
};
let obj = {name:"孙悟空"};

// fn(obj); // 区别在于，这里只是打印，没有创建新的属性

function fn2(){
    console.log("我是fn2");
}

fn(fn2);

// 加深理解：

fn(function(){
    console.log("我是在函数里直接创建的函数");
    // anonymous是没有名称的意思
})

fn(myhanshu = () =>{
    console.log("我是箭头函数");
    // 这个叫匿名函数，没有名称
} )

fn(() =>{
    console.log("我是箭头函数");
    // 语法上怎么写都行
} )
function fn(){
    //return ，函数调用完毕，返回值将会作为结果
    return "hello" ;
}

sum = (a,b) =>{
    return a + b ;
}

let result = fn();
console.log(result);
const sumup = function(a,b){
    return a*b;
    // return 后面不跟任何值就相当于返回undefined
    // 如果不写return，依然返回的是undefined
    // return后函数即结束，后面语句无用
}

let result1 = sumup(sum(23,55),sum(56,454));
console.log("结果是：",result1);
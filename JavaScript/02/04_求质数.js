// 求100以内的质数
console.time("质数练习");
for(let i = 2 ; i <= 10**8 ; i++){
    let flag = true ;
    for(let j = 2 ; j <=  i ** 0.5 ; j++){
        if(i % j === 0){
            flag  = false;
            break;
        }
    }
    if(flag == true){
        // console.log(i);
    }
}
console.timeEnd("质数练习");
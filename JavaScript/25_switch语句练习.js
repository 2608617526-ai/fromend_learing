const ku = require('readline-sync');
let userInput = ku.question('请输入0到9的单个数字：');
let num = Number(userInput);
if(isNaN(num)){
    console.log("请正确输入数字");
}
else if(num>9 || num < 0){
    console.log("请输入0到9的数字！");
}
else{
    switch(num){
    case 0 :
        console.log("零");
        break;
    case 1 :
        console.log("一");
        break;
    case 2 :
        console.log("二");
        break;
    case 3 :
        console.log("三");
        break;
    case 4 :
        console.log("四");
        break;
    case 5 :
        console.log("五");
        break;
    case 6 :
        console.log("六");
        break;
    case 7 :
        console.log("七");
        break;
    case 8 :
        console.log("八");
        break;
    case 9 :
        console.log("九");
        break;
        

}
}
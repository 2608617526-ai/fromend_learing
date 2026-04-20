// - 练习1：
// 编写一个程序，获取一个用户输入的整数。然后通过程序显示这个数是奇数还是偶数。
const sync = require('readline-sync');
let userInput = sync.question('请输入一个整数：');
let num = Number(userInput);  // 将字符串转换为数字

if (isNaN(num)) {
    console.log("你输入的不是数字！");
} else if (num % 2 === 0) {
    console.log("你输入的是偶数！");
} else {
    console.log("你输入的是奇数");
}

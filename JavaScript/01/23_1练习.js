const readlineSync = require('readline - sync');
let num = +readlineSync.question('请输入你要判断的数字 ');
if (isNaN(num)) {
    console.log('你输入的不是数字！');
} else if (num % 2 === 0) {
    console.log('你输入的是偶数！');
} else {
    console.log('你输入的是奇数');
}
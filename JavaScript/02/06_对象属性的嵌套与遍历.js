 let kk = {
    name:{
        bigname:"张罡锟",
        smallname:"坤坤"},
    age:21,
    height:173,
    [Symbol()]:"这是需要被隐藏的属性"
 }

 console.log(kk.name.bigname)
 console.log(kk["name"]["smallname"]);
 console.log("\n");
 for(let shuxing in kk){
    console.log(shuxing,kk[shuxing]);
 }
 // 使用let in语句来遍历，shuxing是你为kk这个对象中所有属性起的名字
 // 这是通俗理解，正确理解是shuxing 变量在每次循环中被赋值为当前属性的名称（字符串）
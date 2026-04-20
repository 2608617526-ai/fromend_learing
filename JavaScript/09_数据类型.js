        let a;
		a=10;
		console.log(a);

        var b=100;
        console.log(b);
        // 驼峰命名法，helloWorld

        var c=NaN;
        var d = Infinity;//无穷
        // 转义字符为/
        console.log("\"今天天气真好啊！我想和你一起去约会！\" ");
        console.log("\\");
        console.log(typeof a);
        console.log(Number.MAX_VALUE);
        console.log(Number.MIN_VALUE);
        console.log(typeof c);
        console.log(typeof d);
        console.log(0.1 + 0.2);
        let e = 10n;
        console.log(typeof e,e);
        // 整数还有一个类型是无限大，在后面加n即可表示
        // 浮点数运算在二进制里面是不精确的，本质是因为十进制无法用二进制完全表示
        // 变量用let，声明常量用const，用const声明的常量不能被重复赋值，一般声明常量用大写，比如PI

        let f = Symbol();
        console.log(typeof f,f,`所以${f}也是一个数据类型`);
        // Symboly也是数据类型

        // Number,BigInt,String,Boolean,Null,undefined,Symbol,Object
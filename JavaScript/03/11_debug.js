        debugger // 打断点
        console.log(a);
		 var a = 1;
		 console.log(a);

		 function a(){
			alert(2)
		 }
		 console.log(a);
		 // 这个function给a赋值了。而且function的优先级要大于var，如果
		 

		 var a = 3;
		 console.log(a);

		 var a = function(){
			alert(4);
		 }
		 console.log(a);

		 a = 5;
		 console.log(a);
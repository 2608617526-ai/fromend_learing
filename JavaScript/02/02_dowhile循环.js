let n = 1 ;
let sum = 0 ;
do{
    sum = sum + n ;
    n++ ;
}while( n <= 100);
console.log(sum);

//求100以内所有三的倍数
for(let i = 1 ; i <=100 ;i++ ){
    if(i % 3 == 0){
        console.log(i);
    };
};

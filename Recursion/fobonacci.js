const fibo=(n)=>{
    if(n==0){
        return 0;
    }
    if(n==1)return 1;
    const sm=fibo(n-1)+fibo(n-2);
     return sm;
}
console.log(fibo(6))
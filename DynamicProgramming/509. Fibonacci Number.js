const fib = (n) => {
    if (n < 1) return 0
    if( n === 1){
        return 1
    }
    if(n > 1){
        return fib(n - 1) + fib( n - 2 )
    }
};


console.log(fib(4))
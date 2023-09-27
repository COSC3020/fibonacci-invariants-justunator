function fib(n) {
    if (n == 0){
        return [0]
    }
    else if (n == 1){
        return [0,1]
    }
    var arr = []
    arr[0] = 0
    arr[1] = 1 
    return fibMath(n, arr)
}

function fibMath(n, arr){
    if (arr.length <= n){
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        fibMath(n, arr)
    }
    return arr
}
//console.log(fib(17)) // debugging
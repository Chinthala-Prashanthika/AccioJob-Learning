//Day 12
// //Recursion
// function recursion(n){
//     //console.log(n)

//     //Base case 
//     if(n==0){
//         return n
//     }
//     console.log(n,"before recursive case")
    
//     //Recursive case :--calling the same function
//     recursion(n-1)
//     console.log(n,"after recursive case")
// }
// recursion(3)

// function printTenTimes(name){
//     if(name==0){
//         return name
//     }
//     console.log("prashanthika")
//     printTenTimes(name-1)
// }
// printTenTimes(10)

// function factorial(n){
//     //base case
//     if(n==1) return 1

//     //recursive case
//     //return n*factorial(n-1)

//     const factorialValue=factorial(n-1)
//     n*factorialValue
// }
//console.log(factorial(3))

//find largest using recursion
// function findLargest(arr,i=0,largest=-Infinity){
//     //Base case
//    if(i==arr.length) return largest

//    if(arr[i]>largest) largest=arr[i]
//    //console.log(arr[i])

//    return findLargest(arr,i+1,largest)
//    //return findLargest(largest)
    
// }
// console.log((findLargest([1,0,-9,5])))

//Day 13
// function power(x,y){
//     //base case
//     if(y==0) return 1

//     let half=power(x,Math.floor(y/2))

//     if(y%2==0){
//         return half*half
//     }
//     return half*half*x

// }
// console.log(power(2,3))


//-------------------------------------------------------------------------------------------------------------------------------

//Day 13
// function isPlindrome(string,left=0,right=string.length-1){

//     //Base case
//     if(left>right) return true

//     if(string[left]!=string[right]) return false

//     //recursive case
//     return isPlindrome(string,left+1,right-1)
// }
// console.log(isPlindrome("eye"))

//Fibanocii series :- sum of two pervious numbers

// function fibonacci(n){
//     if(n==1) return 1
//     if(n==0) return 0
    
//     return fibonacci(n-1)+fibonacci(n-2)
// }
// console.log(fibonacci(5))

// function  fibonacciSeries(n){
//     //Base case
//     if(n===1) return 1
//     if(n===0) return 0

//     return fibonacciSeries(n-1)+fibonacciSeries(n-2)
// }
//     function printFibonacci(n,i){
//         const arr=[]
//         if(n==i) return 
//         arr.push(fibonacciSeries(i))
//         console.log(arr)
//         printFibonacci(n,i+1)
//     }
    
// printFibonacci(5,0)

function  fibonacciSeries(n){
    //Base case
    if(n===1) return 1
    if(n===0) return 0

    return fibonacciSeries(n-1)+fibonacciSeries(n-2)
}
    function printFibonacci(n,i){
        const arr=[]
        for(let i=0;i<n;i++){
            arr.push(fibonacciSeries(i))
        }
        console.log(arr)
    }
    
printFibonacci(5,0)

// function fibonacci(n){
//     //Base case
//     if(n===1) return [0,1]
//     if(n===0) return [0]
    
//     // let p=1
//     // let sp=0
//     const arr=[0,1]
//     let i=2
    
//     while(i<n){
//         //let currentValue=p+sp
//         let currentValue=arr[i-1]+arr[i-2]
//         arr.push(currentValue)
//         // sp=p
//         // p=currentValue
//         i++
//     }
//     console.log(arr)
// } 
// fibonacci(5)


// function fibonacci(n,arr=[0,1],i=2){
//     //Base case  
//     if(n===0) return [0]
//     if(n===1) return [0,1]
  

//     if(n==i) return arr
//     let currentValue=arr[i-1]+arr[i-2]
//     arr.push(currentValue)

//     return fibonacci(n,arr,i+1)
// }
// console.log(fibonacci(5))
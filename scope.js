//Day 13
//Scope:--Scope is the area of a program where a variable can be accessed.

//var firstName
//lastName
//phoneNUmber
// console.log(firstName)

// var firstName="nitesh"
// let lastName="Tagadhar"
// const phoneNumber=9876543298

//console.log(firstName)


//Hoisting:-Moving decleration to top if its scope : var,let and const are hoisted ,but  let and const are moved to TDZ
//var is function scope ,let and const are block scope
//

// function dispalyName(){
//     var role="Instructor"
//     console.log(role)

//     if(true){
//         let email="abc@gmail.com"
//         console.log(email)
//     }
// }
//dispalyName()

//Q:-- Declare a variable with var inside if condition and access it outside if block -do same with let and const

// function dispalyName(){
//     var role="Instructor"
//     console.log(role)

//     //console.log(email) ---undefined

//     if(true){
//         var email="abc@gmail.com"----let,const
//         //console.log(email)
//     }
//     //console.log(email)
// }
// dispalyName()


// var i 
// for(var i=0;i<5;i++){

// }
// console.log(i,"i pointer declared with var")

// function first(){
//     function second(){
//         return 10
//     }
// }
//console.log(second())


//GEC=gobal excecution contest
//MA=Memory Allocation  :-During the creation phase, variables are initialized with undefined, and function declarations are hoisted into memory.
//TDZ=Temoporal Dead zone (let ,const moved ):--Hoisting and the Temporal Dead Zone (TDZ)
// var variables are hoisted and automatically assigned a default value of undefined. 
// You can reference them before they are declared in the code without breaking the application.
//---
// let and const are hoisted but remain completely uninitialized. 
// The region of code from the start of the block until the line they are declared is called the Temporal Dead Zone.
//  Accessing them here instantly crashes with a ReferenceError.


//for function the {} is called as function scope
//function firstname(){
//     function scope
//}



//GEC=gobal excecution contest


//n!/(n-r)!
//5=5 * 4 * 3 * 2 

// let f = 120

// f* 2
// function findFactorial(number){

//     let f = 1
//     for(let i = number; i > 1;i--){
//         f = f * i
//     }

//     return f

// }

// // n!/(n-r)!

// function factorialValue(n,r){

//     // Write code here
//     // console.log(findFactorial(n))
//     // console.log(findFactorial(n-r))

//     return findFactorial(n)/findFactorial(n-r)

// }
// console.log(factorialValue(5,2))


//Day 14

// explore() 
// var role="developer"  //undefined

// //const role="developer"
// function explore(){
//     console.log(name) //undefined

//     var name="nitesh"

//     //console.log(role) //reference error
// }
//explore()


//prime number before 10:--2,3,5,7

// function findPrimeNUmbers(n){
    
//     for(let i=2;i<n;i++){
//         if(n%i===0){
//             return false
//         }
//     }
//     //Iterationis completed and the number is prime
//     //because if condition never executed
//     return true
// }
// console.log(findPrimeNUmbers(3))

//n=6 return me the given number is odd or even number

// function isGivenNumberIsEvenOrOdd(n){
//     if(n%2===0){
//         return "even"
//     }
//         return "odd"
   
// }
// console.log(isGivenNumberIsEvenOrOdd(6))

//n=10 ==>Print only even numbers 2,4,6,8

// function onlyEvenNumbers(){
//     for(let i=1;i<10;i++){
//         if(i%2==0){
//         console.log(i)
//         }
//     }
// }
// onlyEvenNumbers()

//a=3 ,p=4=> return value for 3 to the power 4 use loop

// function getPowerValue(a,p){
//     let pow=1
//     for(let i=1;i<=p;i++){
//         pow=a*pow
//     }
//     return pow

// }
// console.log(getPowerValue(3,4))

//contest questions 
//Q1:--123 sum of cudes of a number
// function findSumOfCubes(number){
//     const numberInString=number.toString()
// //123
//   let result=0

//   for(let i=0;i<numberInString.length;i++){
//     result+=Math.pow(Number(numberInString[i]),3)
//   }
//    return result
// }
// console.log((findSumOfCubes(123)))

//or 

// function sumOfCubes(n){
//     let sum=0

//     while(n>0){
//         let digit=n%10
//         sum=sum+digit**3
//         n=Math.floor(n/10) //to update the number
//     }
//     return sum
// }

// console.log(sumOfCubes(123))



//Q2:--prime numbers 1 or 10 that is 2,3,5,7

// function isPrime(n){
//     if(n<2){
//         return false
//     }
//     for(let i=2;i<n;i++){
//         if(n%i===0){
//             return false
//         }
//     }
//     return true
// }

// function printPrimeNumbers(){
//     for(let i=1;i<10;i++){
//         if(isPrime(i)){
//             console.log(i)
//         }
//     }
// }
// printPrimeNumbers()




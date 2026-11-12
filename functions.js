//Day 12
//Functions 
//A function is a block of code that we can write once and execute whenever we need it.
//when ever we want reuse or repeat the logic
//Syntax : 

// function multiplicationOfTwoNumbers(){
//     console.log(2*3)
// }             ------------------{}-->scope
// multiplicationOfTwoNumbers()

// console.log("Executing before function")

//ex-2:---

// function addTwoNumbers(){
//     console.log("Executing inside the function")
//     console.log(2+5)
// }
// addTwoNumbers()   //function calling

// console.log("Executing after the function")

//ex 3:---

//Variables accessing through function are called parameters
//function Amount(totalAmount,taxAmount){
    //console.log(totalAmount+taxAmount)
    // console.log(totalAmount,"Total Amount")
    // console.log(taxAmount,"Tax Amount")
//}
//values passed from the function are called arguments
// Amount(2000,30)
// Amount(1600,3)

//console.log(typeof NaN)----number

//return :-- it is used for the re

// function Amount(totalAmount,taxAmount){
//     return totalAmount+taxAmount
// }
// console.log(Amount(2000,30))

// function add(a,b){
//     return a+b
//     return a*b
// } 
// let sum=add(10,20)
// let sum2=add(1,2)
// let multiplication=add(2,3)

// console.log(sum)
// console.log(multiplication)


// function productOfTwoNUmbers(a,b){
//     return a*b
// }
// const product=productOfTwoNUmbers(10,2)

// const divideResult=add(1,2)/productOfTwoNUmbers(2,10)
// console.log(product)



//Add if conditions to check the parameters are not undefined if no arguments passed return "Pass arguments"

// function add(a,b){
//     if(a==undefined || b==undefined){
//         return "Pass Arguments"
//     }
//     return a+b
// }
// console.log(add(1,2))

//Task 
//create a function that will return me total amount after calculating taxes and adding discount

// function TotalAmount(amount, tax, discount){
//     const TotalAmount=(amount + tax) - discount
//     return TotalAmount
//     //return amount + tax - discount
// }

// console.log(TotalAmount(10000, 1000, 500))

//Day 13

console.log(firstName)
var firstName="nitesh"

console.log(firstName)

//GEC=gobal excecution contest

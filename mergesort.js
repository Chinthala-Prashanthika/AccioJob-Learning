//Day 15

//mergeSort
//[2,4,6]
//[1,3,5,6,7]
//[1,2,3,4,5,6,6,7]

function mergeSort(arr=[5,8,6,1,4,2,3]){

    console.log(arr,'arr')
    if(arr.length<=1) return arr
    const mid=Math.floor(arr.length/2)

    let left=arr.slice(0,mid)
    let right=arr.slice(mid)

    left=mergeSort(left)
    right=mergeSort(right)

    return (mergeSortedArrays(left,right))
}
mergeSort()

function mergeSortedArrays(left ,right){
    let i=0
    let j=0
    const result=[]

    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            result.push(left[i])
            i++
        }else{
            result.push(right[j])
            j++
        }
    }
    while(i<left.length){
        result.push(left[i++])
    }

    while(j<right.length){
        result.push(right[j++])
    }
    return result
}
console.log(mergeSortedArrays([1,3,5],[2,4,6,7,8]))

//--------------------------------------------------------------------------------------------------
//Day 16
//Quick Sort

// function qucikSort(arr,left,right){

//     if(left>=right) return arr
//     const pivotIndex=findPivotIndex(arr,left,right)
//     //sort left side of pivot
//     qucikSort(arr,left,pivotIndex-1)

//     //sort right side of pivot
//     qucikSort(arr,pivotIndex+1,right)

//     console.log(pivotIndex,arr,"left=>",left,"right=>",right)
//     return arr
// }
// function findPivotIndex(arr,left,right){
//     const pivot=arr[right]
//     let i=left-1

//     for(let j=left;j<right;j++){
//         if(arr[j]<pivot){
//             i++
//             const temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
//     i++
//     const temp=arr[i]
//     arr[i]=pivot
//     arr[right]=temp

//     return i
// }
// const arr=[6,8,7,2,4,3,1,5]
// console.log(qucikSort(arr,0,arr.length-1))

//call backs :-A callback function is a function that is passed as an argument to another function and executed later.
// higher order function :-function excepting another function as parameter or returning 

// function explore(param){
//     // console.log(param("Abc"))

//     return param
// }
// function callback(){

// }
// explore(callback)

// //arrow function
// const explore=()=>{

// }

//---------------------------------------------------------------------------------------------------
//Day 17
//Callback:-call back is a function which passed an argument to another function

// function add(a,b){
//     return a+b
// }
// function sub(a,b){
//     return a-b
// }
// function mul(a,b){
//     return a*b
// }

// //Create a function that should accept a,b,cbOne,cbTwo
// function sumOfTwoCallbacks(a,b,cbOne,cbTwo){
//     return cbOne(a,b)+cbTwo(a,b)
// }
// console.log(sumOfTwoCallbacks(10,20,(a,b)=>a+b,function(a,b){
//     return a-b
// }))

// function opration(a,b,callback){
//     return callback(a,b)
// }
// console.log(opration(6,7,function(a,b){
//     return a+b
// }))

// //arrow function
// function operation(a,b,callback){
//     console.log(callback(a,b))
// }
// operation(10,20,(a,b)=>a+b)


// function child(){
//     return 1
// }
// function parent(){
//     //return child
//     return (a,b)=>{
//         return a+b
//     }
// }
// // const store=parent
// const store=parent()
// console.log(store(1,2))
// console.log(store)



//closuer:--Inner function remembers variables from its outer scope even after outer function finishes
//  a child function remembers variables and 
//A closure is created when a function remembers the variables from its outer scope, even after the outer function has finished executing.

// function parent(){
//     let count=0

//     return function child(){
//         count++
//         return count
//     }
// }
// const first=parent()
// const second=parent()

// console.log(first())
// console.log(first())
// console.log(first())

// console.log(second())
// console.log(second())


//Array map():--
//const arr=[1,2,3,4,5] //[2,4,6,8,10]

// function doublearr(arr){
//     let result=[]
//     for(let i=0;i<arr.length;i++){
//         result.push(arr[i]+arr[i])
//     }
//     return result
// }
// console.log(doublearr(arr))


// const doubleNumbers=arr.map((value,index)=>{
//     return value+value
// })
// console.log(doubleNumbers,"double Numbers")


//------------------------------------------------------------------------------------------------------------------
//Day 18

// const arr=[1,2,3,4,5]
// // const doubleNumbers=arr.map((value)=>value*value)
// const doubleNumbers=arr.map((value,index)=>{
//     return value+value
//     // value+value
//    // return value-value
// })
// console.log(doubleNumbers)

// const users=[{name:"venkat"},{name:"praveen"},{name:"harsh"},{name:"manoj"}]
// const doubleUsers=users.map((value,index)=>{
//     value.age=index
//     return value
// })
// console.log(doubleUsers)


//double array using custom map function  it will come in module test:-
// function customMap(arr,callback){
//     const result=new Array(arr.length).fill(undefined)
//     for(let i=0;i<arr.length;i++){
//         result[i]=callback(arr[i],i)
//     }
//     return result
// }
// const arr=[5,3,1,6,7]
// const result=customMap(arr,(value,index)=>{
//     return value+value
// })
// const resultForMap=arr.map((value,index)=>{
//     return value+value
// })
// console.log(result,resultForMap,'custom map result')
// // console.log(result)


//filter:-- it is an array method

// const arr=[1,2,3,4,5,6,7,8,9]
// const evenNumbers=arr.filter((value,index)=>value%2==0)
// console.log(evenNumbers)

// const arr=[1,2,3,4,5,6,7,8,9]
// function customFilter(arr,callback){
//     const result=[]
//     for(let i=0;i<arr.length;i++){
//         if(callback(arr[i],i)){
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// const evenNumbers=customFilter(arr,(value)=>value%2===0)
// console.log(evenNumbers,"Even numbers with customFilter function")

// const employess=[{name:"minhaj",pay:60000},{name:"noor",pay:70000},{name:"shankar",pay:25000}]

// const  result=employess.filter((value)=>value.pay>50000).map((value)=>{
//     value.pay=value.pay-20000
//     return value
// })
// console.log(result)

//reduce:--
// const arr=[1,2,3,4,5,6,7,8,9]
// const sum=arr.reduce((acc,currentvalue)=>{
//     //console.log(acc,currentvalue)
//     return acc+currentvalue
// },0)
// console.log(sum)

// const employess=[{name:"minhaj",pay:60000},{name:"noor",pay:70000},{name:"shankar",pay:25000}]
// const highestpay=employess.reduce((acc,currentValue)=>{
//     if(currentValue.pay>acc.pay) {
//         return currentValue
//     }else{
//         return acc
//     }
// })
// console.log(highestpay)

// const arr=[1,2,3,4,5,6,7,8,9]
// function customReduce(arr,callback,initialValue){
//     let acc=initialValue
//     for(let i=0;i<arr.length;i++){
//         acc=callback(acc,arr[i],i)
//     }
//     return acc
// }
// const result=customReduce(arr,(acc,currentValue)=>{
//     return acc+currentValue
// },0)
// console.log(result)

// function fibonacci(n){
//     //base case
//     if(n==0) return 0
//     if(n==1) return 1

//     return fibonacci(n-1)+fibonacci(n-2)
// }
// function printFibonacci(n,i){
//     for(let i=0;i<n;i++){
//         console.log(fibonacci(i))
//     }
// }
// printFibonacci(10)
//console.log(fibonacci(10))
//Day 9
// map and set
//set is used to store the unique values

// const arr=[1,2,3,4,5,6,1,2,3]
// const result=new Set()
// for(let number of arr){
//     result.add(number)
// }
// console.log(result)


// const string="breech"
// function returnString(string){
//     const set=new Set()
//     for(let stringNew of string){
//         set.add(stringNew)
//     }
//     let result=""
//     for(let value of result){
//         console.log(value)
//         result.add(value)
//     }
//     return result
// }
// console.log(returnString(string))

//const arr=[1,2,3,4,5,6,1,2,3]
//const set=new Set(arr)
//console.log(set)

//set to an array
//const unique=new Array(...set)
// const unique=[...set]
// console.log(unique,"unique")

// const arr=[1,2,3,4,5,6,1,2,3]
// const set=new Set(arr)
// console.log(set.has(6)) //o(1)
// console.log(set.get(5))

// const objOne={name:"nitesh",role:"Develpoer"}
// const objTwo={name:"ABC",role:"ABD"}
// //const objTwo={name:"nitesh",role:"Developer"}
// //const objTwo=objOne
// const uniqueUsers=new Set()
// uniqueUsers.add(objOne)
// uniqueUsers.add(objTwo)
// console.log(uniqueUsers)
//console.log(uniqueUsers.size)

//console.log(typeof null)


//maps:-- to store key and value
//to store the key data type
// const map=new Map()
// map.set("name","nitesh")
// map.set("role","developer")
// map.set("age","30")
// //map.delete("age")
// //map.clear()
// console.log(map.size)
// console.log(map.has("name"))
// console.log(map.get("name"))
// console.log(map)

// function subArray(arr){
//     let result=[]
//     for(let i=0;i<arr.length;i++){
//         let sub=[]
//         for(let j=0;j<arr.length;j++){
//             sub.push(arr[j])
//             result.push([...sub])
//         }
//     }
//     return result
// }
// console.log(subArray([10,2,-2,-20,10]))

// function subArray(arr){
//     let result=[]
//     for(let i=0; i<arr.length; i++){
//         let sub=[]
//         for(let j=i; j<arr.length; j++){
//             sub.push(arr[j])
//             result.push([...sub])
//         }
//     }

//     return result
// }
// console.log(subArray([10,2,-2,-20,10]))


//Given an array: [10,20,30,1,2,3] Target value: 2 Find the index of the target value in the array using Binary Search algorithm.
// function binarySearch(arr, target) {
//     let left = 0
//     let right = arr.length - 1

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2)
//         if (arr[mid] === target) {
//             return mid
//         }
//         if (arr[mid] < target) {
//             left = mid + 1
//         } else {
//             right = mid - 1
//         }
//     }
//     return -1
// }
// let arr = [10, 20, 30, 1, 2, 3]
// arr.sort((a, b) => a - b)
// console.log(binarySearch(arr, 2))

//--------------------------------------------------------------------------------------------------------------------------------
//Day 10
//subArray

// const arr=[1,2,3,4]
// function getSubArray(arr){
//     const result=[]
//     for(let i=0;i<arr.length;i++){
//         for(let j=i;j<arr.length;j++){
//             let currentSubArray=[]
//             for(let k=i;k<=j;k++){
//                 currentSubArray.push(arr[k])
//                 result.push(currentSubArray)
//             }
//             console.log(currentSubArray)
//         }
//     }
//     return result
// }
// console.log(getSubArray(arr))


// Anagram
// const words = ["cat","tea","pet","tac","act","eat"]
// const queries = ["cat","tca","eee","tea"]
// function groupAnagram(words,queries){
//     const map = new Map()
//     for(let word of words){
//         const key = word.split("").sort().join("")
//         if(!map.has(key)){
//             map.set(key,[])
//         }
//         map.get(key).push(word)
//     }
//     for(let [key,value] of map){ 
//         value.sort()
//     }
//     // console.log(queries,'queries')
//     for(let query of queries){
//         const key = query.split("").sort().join("")

//         if(map.has(key)){
//             console.log(map.get(key))
//         }else{
//             console.log(-1)
//         }
//         console.log(key, map.get(key))
//         console.log(key,query,'key in queries')
//    }
//     console.log(map)
//}

//----------------------------------------------------------------------------------------------------------------------------------------------
//Day 11

// function getSubArray(arr,target){
//     let count=0
//     for(let i=0;i<arr.length;i++){
//         for(let j=i;j<arr.length;j++){
//             let subArray=[]
//             for(let k=i;k<=j;k++){
//                 subArray.push(arr[k])
//             }
//             let sum=0
//             for(let n=0;n<subArray.length;n++){
//                 sum+=subArray[n]
//             }
//             if(sum==target){
//                 count++
//             }
//             //console.log(subArray,sum)
//         }
//     }
//     console.log(count)
// }
// getSubArray([10,2,-2,-20,10],-10)

// let stringOne="abcdeefa"
// let stringTwo="bcdaaefc"
// function frequencyCount(stringOne,stringTwo){
//     const map=new Map()
//     const mapTwo=new Map()
//     for(let key of stringOne){
//         if(!map.has(key)){
//             map.set(key,1)
//         }else{
//             map.set(key,map.get(key)+1)
//         }
//     }
//     for(let key of stringTwo){
//         if(!mapTwo.has(key)){
//             mapTwo.set(key,1)
//         }else{
//             mapTwo.set(key,mapTwo.get(key)+1)
//         }
//     }
//     console.log(map,mapTwo)
// }
// frequencyCount(stringOne,stringTwo)


// let stringOne="abc"
// let stringTwo="bcd"
// function anagramsCount(stringOne,stringTwo){
//     const mapOne =new Map()
//     const mapTwo=new Map()
//     for(let char of stringOne){
//         if(!mapOne.has(char)){
//             mapOne.set(char,1)
//         }else{
//             mapOne.set(char,mapOne.get(char)+1)
//         }
//     }
//     for(let char of stringTwo){
//         if(!mapTwo.has(char)){
//             mapTwo.set(char,1)
//         }else{
//             mapTwo.set(char,mapTwo.get(char)+1)
//         }
//     }
//     let count=0
//     //iterate through map one
//     for(let [key,value] of mapOne){
//         if(!mapTwo.has(key)){
//             count+=value
//         }else{
//             count+=Math.abs(mapTwo.get(key)-value)
//         }
//     }
//     //map two
//     for(let [key,value] of mapTwo){
//         if(!mapOne.has(key)){
//             count+=value
//         }
//     }
//     //console.log(mapOne,mapTwo)
//     console.log(count,"count to change")
// }
// //console.log(Math.abs(1-9))
// anagramsCount(stringOne,stringTwo)


// const first="arc"
// const second="carbb"
// function returnAnagrams(first,second){
//     const mapOne=new Map()
//     const mapTwo=new Map()

//     for(let char of first){
//         if(!mapOne.has(char)){
//             mapOne.set(char,1)
//         }else{
//             mapOne.set(char,mapOne.get(char)+1)
//         }
//     }
//     for(let char of second){
//         if(!mapTwo.has(char)){
//             mapTwo.set(char,1)
//         }else{
//             mapTwo.set(char,mapTwo.get(char)+1)
//         }
//     }

//     for(let [key,value] of mapOne){
//         if(!mapTwo.has(key)){
//             return false
//         }
//         if(mapTwo.get(key)!=value){
//             return false
//         }
//     }
//     for(let [key] of mapTwo){
//         if(!mapOne.has(key)){
//             return false
//         }
//     }
//     return true
//     //console.log(mapOne,mapTwo)
// }
// console.log(returnAnagrams(first,second))

// //two sum =9 [4,5,3,6,8] target=9 using loops and next using map with only one loop

// const arr=[4,5,3,6,8]
// function sumOfTwo(arr,target){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]===target){
//                 console.log(arr[i],arr[j])
//             }
//         }
//     }
// }
// sumOfTwo(arr,9)

const arr=[4,5,3,6,8]
function sumOfTwo(arr,target){
    const map=new Map()
    for(let i=0;i<arr.length;i++){
        const neededArray=target-arr[i]
        if(map.has(neededArray)){
            console.log(neededArray,arr[i])
        }
        map.set(arr[i],i)
    }
}
sumOfTwo(arr,9)


//Day 12
//Recursion






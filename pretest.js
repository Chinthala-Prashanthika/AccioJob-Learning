// const str=["eat","tea","tan","ate","nat","bat"]

// function  groupAnagram(str){
//     const map=new Map()
//     for(let char of str){
//         //const key= str.split("").sort().join(" ")
//         if(!map.has(char)){
//             map.set(char,[])
//         }else{
//            map.get(char).push(char)
//         }
//     }
//     for(let [key,value] of map){
//         value.sort()
//     }
    
//     return map
// }
// console.log(groupAnagram(str))

// const words=["eat","tea","tan","ate","nat","bat"]
// const output=[["bat"],["nat","tan"],["ate","eat","tea"]]

// function groupanagrams(words){
//     let map=new Map()
//     for (let word of words){
//         let key=word.split("").sort().join("")
//         if(!map.has(key)){
//             map.set(key,[])
//         }
//         map.get(key).push(word)
//     }
//     let result=[]
//     for(let [key,value] of map){
//         value.sort()
//         result.push(map.get(key))
//     }
//     return result
// }
// console.log(groupanagrams(words))


// const matrix=[[1,2,3],[4,5,6],[7,8,9]]
// function sumOfCloumn(matrix){
//     const result=[]
//     for(let i=0;i<matrix.length;i++){
//         let sum=0
//         for(let j=0;j<matrix[i].length;j++){
//             sum+=matrix[j][i]   
//         }
//         result.push(sum)
//     }
//     return result
// }
// console.log(sumOfCloumn(matrix))



// const matrix=[[1,2,3],[4,5,6],[7,8,9]]
// function diagonalSum(matrix){
//     //let result=[]
//     let sum=0
//     for(let i=0;i<matrix.length;i++){
//         //let sum=0
//         for(let j=0;j<matrix[i].length;j++){
//             if(i==j ||i+j==matrix.length-1){
//                 sum+=matrix[i][j]
//             }
//         }
//     }
//     console.log(sum)
// }
// diagonalSum(matrix)


// function fibonacci(n){
//     //Base case
//     if(n<=1) return n

//     //recursion case
//     return fibonacci(n-2)+fibonacci(n-1)
// }
// console.log(fibonacci(3))


// const arr=[1,2,3,4,5,6,7,9,10]
// function missingNumber(arr){
//     let left=0
//     let right=arr.length-1

//     while(left<=right){
//         let mid=Math.floor((left+right)/2)
//             if(arr[mid]==mid+1){
//                 left =mid+1
//             }else{
//                 right=mid-1
//             }
//     } 
//     return left+1
// }
// console.log(missingNumber(arr))
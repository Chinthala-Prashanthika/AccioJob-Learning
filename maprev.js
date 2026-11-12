//Day 19
//map and set revision
// function sortByFrequency(arr){
//     const map=new Map()
//     for(let num of arr){
//         map.set(num,(map.get(num) || 0)+1)
//     }
//     //If frequency is larger sort ri and rj in descending order
//     //If rfequency is same sort ai and aj in descending order
//     const result=[...map.keys()].sort((a,b)=>{
//         // console.log(a,map.get(a)," ",b,map.get(b))
//         // console.log(a,b,"keysss")
//         // return b-a
//         //If frequecy 
//         if(map.get(a)!==map.get(b)){
//             return map.get(b)-map.get(a)
//         }
//         return b-a
//     })
//     return result
//     //console.log(result,"keys")
// }
// console.log(sortByFrequency([1,2,3,3,2,1]))


// let arr=[1,2,3,4]
// for(let i=0;i<arr.length;i++){
//     for(let j=i;j<arr.length;j++){
//         let result=[]
//         for(let k=i;k<=j;k++){
//             result.push(arr[k])
//         }
//         console.log(result)
//     }
// }

//EVM machine
// function countVotes(votes) {

//     const set = new Set();
//     const map = new Map();

//     for (let [voterId, partyName] of votes) {

//         if (set.has(voterId)) {
//             continue;
//         }

//         set.add(voterId);

//         map.set(
//             partyName,
//             (map.get(partyName) || 0) + 1
//         );
//     }

//     let highest = 0;

//     for (let voteCount of map.values()) {
//         highest = Math.max(highest, voteCount);
//     }

//     let winners = [];

//     for (let [party, voteCount] of map) {

//         if (voteCount === highest) {
//             winners.push(party);
//         }
//     }

//     winners.sort();

//     for (let party of winners) {
//         console.log(party + " " + highest);
//     }
// }
// console.log(countVotes[
//   [ '12678345', 'BJP' ],
//   [ '57891082', 'Congress' ],
//   [ '12678345', 'AAP' ],
//   [ '65489', 'TMC' ]
// ])


//Sort by Frequency
//Group Numbers or  Maximum distance between the same elements
//EVM Machine


//Merge sort
// const arr=[8,5,3,6,4,7,2,1]
// function mergeSort(arr){
//     if(arr.length<=1) return arr

//     let mid=Math.floor(arr.length-1)
//     let left=mergeSort(arr.slice(0,mid))
//     let right=mergeSort(arr.slice(mid))

//     return merge(left,right)
// }
// function merge(left,right){
//     let sortedArray=[]
//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             sortedArray.push(left.shift())
//         }else{
//             sortedArray.push(right.shift())
//         }
//     }
//     return [...sortedArray,...left,...right]
// }
// console.log(mergeSort(arr))

//Quick sort

// const arr=[8,5,3,6,4,7,2,1]
// function quickSort(arr){
//     if(arr.length<=1) return arr

//     const pivot=arr[0]
//     let left =[]
//     let right=[]
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }
// console.log(quickSort(arr))


//sprial matrix

// function sprialMatrix(matrix,row,col){
//     let result=[]
//     let left=0
//     let right=col-1
//     let top=0
//     let bottom=row-1
//     while(left<=right && top<=bottom){
//         //left to right
//         for(let i=left;i<=right;i++){
//             result.push(matrix[top][i])
//         }
//         top++
//         //top to bottom
//         for(let i=top;i<=bottom;i++){
//             result.push(matrix[i][right])
//         }
//         right--
//         //right to left
//         if(top<=bottom && left<=right){
//             for(let i=right;i>=left;i--){
//                 result.push(matrix[bottom][i])
//             }
//             bottom--
//             //bottom to top
//             for(let i=bottom;i>=top;i--){
//                 result.push(matrix[i][left])
//             }
//             left++
//         }
//     }
//    return result 
// }
// console.log(sprialMatrix([[1,2,3],[4,5,6],[7,8,9]],3,3))

//Group Anagrams

// let strs=["eat","tea","tan","ate","nat","bat"]
// function anagrams(strs){
//     const map=new Map()
//     for(const str of strs){
//         const sortedKey=str.split("").sort().join("")

//         if(map.has(sortedKey)){
//             map.get(sortedKey).push(str)
//         }else{
//              map.set(sortedKey,[str])
//         }
//     }
//     return Array.from(map.values())
// }
// console.log(anagrams(strs))

// let a=[1,2,3]
// let b=[4,5,6]
// let res=[...a,...b]
// console.log(res)

// function sprialMatrix(matrix,row,col){
//     let result=[]
//     let left=0
//     let right=row-1
//     let top=0
//     let bottom=col-1

//     while(left<=right && top<=bottom){
//         //left ot right
//         for(let i=left;i<=right;i++){
//             result.push(matrix[top][i])
//         }top++
//         // top to bottom
//         for(let i=top;i<=bottom;i++){
//             result.push(matrix[i][right])
//         }right--
//         //right to left
//         if(top<=bottom){
//         for(let i=right;i>=left;i--){
//             result.push(matrix[bottom][i])
//         }bottom--
//         //bottom to top
//         if(left<=right){
//             for(let i=bottom;i>=top;i--){
//                 result.push(matrix[i][left])
//             }
//             left++
//         }
//     } 
//     }
//     return result
// }
// console.log(sprialMatrix([[1,2,3],[4,5,6],[7,8,9]],3,3))

//BUbble sort:- compares the two elements

// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 const temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort([5,8,7,2,3,1,9,10]))

// //Selection sort:-- it find the smmallest element minimum

// function selectionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let min=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min=j
//             }
//         }
//         [arr[min],arr[i]]=[arr[i],arr[min]]
//     }
//     return arr
// }
// console.log(selectionSort([5,8,4,6,3,7,2,9,1]))

//Insertion sort
function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let temp=arr[i]
        let j=i-1
        while(j>=0&&arr[j]>temp){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=temp
    }
    return arr
}
console.log(insertionSort([5,7,2,4,3,1,6]))

// function printPattern(n){
//     for(let i=0;i<n;i++){
//     let str=""
//     for(let j=0;j<=i;j++){
//         let char=String.fromCharCode(65+i)
//         str+=char
//     }
//     console.log(str)
// }
// }
// (printPattern(4))

// function convertKeyboardLayout(layout1, layout2, text) {
//   let result=""
//   for(let i=0;i<text.length;i++){
//     let char=text[i]
//     if(char>='a'&& char<='z'){
//       let index=layout1.indexOf(char)
//       result+=layout2[index]
//     }
//     else if(char>='A' && char<='Z'){
//       let lowerChar=char.toLowerCase()
//       let index=layout1.indexOf(lowerChar)
//       result+=layout2[index].toUpperCase()
//     }
//     else{
//       result+=char
//     }
//   }
// return result
// }
// console.log(convertKeyboardLayout("qwertyuiopasdfghjklzxcvbnm",
// "veamhjsgqocnrbfxdtwkylupzi",
// "FpcpEbb2019"))

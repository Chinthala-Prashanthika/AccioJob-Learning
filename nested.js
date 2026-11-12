//module 2
//Day 1
//nested loops and 2d array
//const array=[[1,2,3],[4,5,6]]
// for(let i=1;i<array.length;i++){
//     //console.log(array[i])
//     const nestedArray=array[i]
//     for(let j=0;j<nestedArray.length;j++){
//         console.log(nestedArray[j])
//     }
// }

// const array=[[1,2,3],[4,5,6]]
// for(let i=array.length-1;i>=0;i--){
//     const nestedArray=array[i]
//     for(let j=array.length-1;j>=0;j--){
//         console.log(nestedArray[j])
//     }

// }

// function printStar(row,column){
//     for(let i=1;i<=row;i++){
//         let string=""
//         for(let j=1;j<=column;j++){
//             string+="* "
//         }
//         console.log(string)
//     }
// }
// printStar(2,3)

//print me these 3 star traingles, pyramid traingle, rightangle traingle,opposite of rightangle traingle.

//rightAngle Triangle 
// function rightAngleTriangle(n){
//     for(let i=1;i<=n;i++){
//         let string=""
//         for(let j=1;j<=i;j++){
//             string+="* "
//         }
//         console.log(string)
//     }
// }
// rightAngleTriangle(5)

// function oppositeRightTriangle(n){
//     for(let i=n;i>=1;i--){
//         let string=""
//         for(let j=1;j<=i;j++){
//             string+="* "
//         }
//         console.log(string)
//     }
// }
// oppositeRightTriangle(5)

    
//----------------------------------------------------------------------------------------------------------------------------
//Day 2

//const arr=[[1,2,3],[-3,2,5],[6,8,9]]
// function arrayOfSum(arr){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//         sum=sum+arr[i][j]
//     }
//     }
//     return sum
// }
// console.log(arrayOfSum([1,2,3],[-3,2,5],[6,8,9]))

// function patternString(n){
//     for(let i=0;i<n;i++){
//         let string=""
//         for(let j=0;j<=i;j++){
//             let char=String.fromCharCode(65+((i+j)%26))
//             string+=char
//         }
//         console.log(string)
//     }
// }
// patternString(8)

// function oppositeRightTriangle(n){
//     for(let i=1;i<=n;i++){
//        let string=""
//         for(let a=1;a<=n-i;a++){
//             string+="  "
//         }
//         for(let j=1;j<=i;j++){
//             string+=" *"
//         }
//         console.log(string)
//     }
// }
// oppositeRightTriangle(5)


// function Triangle(n){
//     for(let i=1;i<=n;i++){
//        let string=""
//         for(let a=1;a<=n-i;a++){
//             string+=" "
//         }
//         for(let j=1;j<=i;j++){
//             string+="* "
//         }
//         console.log(string)
//     }
// }
// Triangle(5)

// function oppositetraingle(n){
//     for(i=n;i>0;i--){
//         let string=""
//         for(let j=1;j<=n-i;j++){
//             string+=" "
//         }
//         for(let j=1;j<=i;j++){
//             string+="* "
//         }
//     console.log(string)
//     }
// }
// oppositetraingle(5)

// function patternString(n){
//     for(let i=0;i<n;i++){
//         let string=""
//         for(let j=0;j<=i;j++){
//             let char=String.fromCharCode(49+((i+j)))
//             string+=char
//         }
//         console.log(string)
//     }
// }
// patternString(5)

//[[1,2,3],[4,5,6],[7,8,9]]=>[[9,8,7],[6,5,4],[3,2,1]]

// function revArray(arr){
//     let result=[]
//     for(let i=arr.length-1;i>=0;i--){
//         let row=[]
//         for(let j=arr[i].length-1;j>=0;j--){
//             row.push(arr[i][j])
//         }
//         result.push(row)
//     }
//     return result
// }
// console.log(revArray([[1,2,3],[4,5,6],[7,8,9]]))

// function patternAlphabet(n){
//     for(let i=0;i<n;i++){
//         let string=""
//         for(let j=0;j<=i;j++){
//             let char=String.fromCharCode(65+i)
//             string+=char
//         }
//         console.log(string)
//     }
// }
// patternAlphabet(4)

//---------------------------------------------------------------------------------------------------
//Day 3

// const matrix=[[1,2,3],[4,5,6],[7,8,9]]
//     for(let i=0;i<matrix.length;i++){
//         for(let j=0;j<matrix[i].length;j++){
//             if(i==j){
//             console.log(matrix[i][j])
//             }
//         }
//     }

// const matrix=[[1,2,3],[4,5,6],[7,8,9]]
// const leftDiagonal=[]
// const rightDiagonal=[]
//     for(let i=0;i<matrix.length;i++){
//         for(let j=0;j<matrix[i].length;j++){
//             if(i==j){  
//             leftDiagonal.push(matrix[i][j])
//             console.log(matrix[i][j])  //left diagonal
//             }
//             //i+j==matrix.length-1
//             if(i+j==matrix.length-1){ //right diagonal
//             rightDiagonal.push(matrix[i][j])
//             console.log(matrix[i][j])
//             }
//         }
//     }
// console.log(leftDiagonal,rightDiagonal)


// const matrixOne=[[0,0,2],[0,2,0],[3,0,4]]
// function checkNumber(matrixOne){
//     for(let i=0;i<matrixOne.length;i++){
//         for(let j=0;j<matrixOne[i].length;j++){
//             if(i==j || i+j==matrixOne.length-1){
//                 console.log(matrixOne[i][j])
//             }
//         }
//     }
// }
// console.log(checkNumber())

// function isValidMatrix(matrixOne){
// //const matrixOne=[[1,2,3],[4,5,6],[7,8,9]]
// for(let i=0;i<matrixOne.length;i++){
//     for(let j=0;j<matrixOne[i].length;j++){
//         if(i==j ||  i+j==matrixOne.length-1){
//             console.log(matrixOne[i][j])
//             if(matrixOne[i][j]===0) return false
//         }else{
//             if(matrixOne[i][j]!==0) return false
//         }
//     }
// }
// return true
// }
// const matrixOne=[[1,0,3],[0,5,0],[7,0,9]]
// console.log(isValidMatrix(matrixOne))

// function sumOf(matrix){
//     let blackSum=0
//     let whiteSum=0
//     for(let i=0;i<matrix.length;i++){
//         for(let j=0;j<matrix[i].length;j++){
//             if((i+j)%2===0){
//                 blackSum+=matrix[i][j]
//             }else(
//                 whiteSum+=matrix[i][j]
//             )
//         }
//     }
//     console.log(blackSum)
//     console.log(whiteSum)
// }
// const matrix=[[1,2,3],[4,5,6],[7,8,9]]
// console.log(sumOf(matrix))

//---------------------------------------------------------------------------------------------------------------
//Day 4

//const matrix=[[1,1,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,4]]

// for(let i=0;i<matrix.length;i++){
//     for(let j=i+1;j<matrix[i].length;j++){
//         let temp=matrix[i][j]
//         matrix[i][j]=matrix[j][i]
//         matrix[j][i]=temp
//     }
// }
// console.log(matrix)

// const matrix=[[1,1,1],[2,2,2],[3,3,3]]
// let result=[]
// for(let i=0;i<matrix.length;i++){  //column
//     for(let j=0;j<matrix[i].length;j++){  //row
//      result.push(matrix[j][i])
//     }
// }
// console.log(result.join(" "))

//-------------------------------------------------------------------------------------------------------------------
//Day 5

//sprial matrix-------
// const matrix=[[1,2,3],
//               [4,5,6],
//               [7,8,9]
// ]

// const matrix=[[1,2,3]]
// function sprialMatrix(mat,row,col){
// let top=0
// let bottom=row-1
// let left=0
// let right=col-1

// while(top<=bottom && left<=right){
//     //Move top to bottom
//     for(let i=top;i<=bottom;i++){
//         console.log(mat[i][left])
//     }
//     left++
    
//     //move left to right
//     for(let i=left;i<=right;i++){
//         console.log(mat[bottom][i])
//     }
//     bottom--

//     //move bottom to top
//     for(let i=bottom;i>=top && left<=right;i--){
//         console.log(mat[i][right])
//     }right--

//     //move right to left
//     for(let i=right;i>=left && top<=bottom;i--){
//         console.log(mat[top][i])
//     }
//     top++

//     // break
//  }

// }
// sprialMatrix(matrix,1,3)


//sprial matrix clock wise 

// const matrix=[[1,2,3],
//               [4,5,6],
//               [7,8,9]
// ]
// function sprialMatrix(mat,row,col){
//     let left=0
//     let right=row-1
//     let bottom=col-1
//     let top=0

//     while(top<=bottom && left<=right){
//         for(let i=left;i<=right;i++){
//             console.log(mat[top][i])
//         }
//         top++
//         for(let i=top;i<=bottom;i++){
//             console.log(mat[i][right])
//         }
//         right--
//         for(let i=right;i>=left && top<=bottom;i--){
//             console.log(mat[bottom][i])
//         }
//         bottom--
//         for(let i=bottom;i>=top && left<=right;i--){
//             console.log(mat[i][left])
//         }
//         left++
//     }
// }
// sprialMatrix(matrix,3,3)

//Day 6 
//---------------------------------------------------
//Module questions

//Day 7
//----------------------------------------------------------------------------------------------------------------------------------------

//remove duplicates from array not allowed to use space
// const arr=[1,2,1,2,1,2]
// function removeduplicates(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===i){
//             return arr
//         }
//     }
// }
// removeduplicates(arr)

//reflection problem

// function reflection(arr){
//     let minX=Infinity
//     let maxX=-Infinity

//     for(let i=0;i<arr.length;i++){
//         minX=Math.min(minX,arr[i][0])
//         maxX=Math.max(maxX,arr[i][0])
//     }
//     let sum=minX+maxX

//     for(let i=0;i<arr.length;i++){
//         let x=arr[i][0]
//         let y=arr[i][1]
//         let found=false

//         for(let j=0;j<arr.length;j++){
//             let nx=arr[j][0]
//             let ny=arr[j][1]

//             if(sum-x==nx && y==ny){
//                 found=true
//             }
//         }
//         if(!found){
//             return "NO"
//         }

//     }
//     return "YES"
// }
//console.log(reflection([[1,1],[-1,1],[6,6],[-6,6]]))

// const alphabet="abc"
// alphabet+="d"
// console.log(alphabet)
// alphabet="abcdefgh"
// console.log(alphabet)

// function isPrime(n){
//     if(n<1){
//         return false
//     }
//     for(let i=2;i<n;i++){
//        if(n%2==0){
//         return false
//        }
//     }
//     return true
// }
// console.log(isPrime(8))

// function isPrime(n){
//     if(n<=1){
//         return false
//     }
//     let i=2
//     while(i*i<=n){
//         if(n%i==0){
//             return false
//         }
//         i+=1
//         return true
//     }
// }
// console.log(isPrime(10))

//time complexity of hasOwnProperty is==> o(1)
//

//remove duplicates
// const arr=[1,2,3,1,2]

// function removeduplicates(arr){
//     const newArray=[]
//     const obj={}
//     for(let i=0;i<arr.length;i++){  //o(n)
//         if(!obj.hasOwnProperty(arr[i])){ //timecomplexity is o(1)
//             obj[arr[i]]=1
//             newArray.push(arr[i])
//         }
//     }
//     return newArray
// }
// console.log(removeduplicates(arr))

//time complexity
//space complexity

//---------------------------------------------------------------------------------------------------------------------------------
//Day 8
//Binary search

//const arr=[1,2,3,4,5,6,6,6,7,8,9]
// function binarySearch(arr,target){
//     let left=0
//     let right=arr.length-1

//     while(left<=right){
//         let mid=Math.floor((left+right)/2)

//         if(arr[mid]==target) return mid

//         if(arr[mid]<target){
//             left=mid+1
//         }else{
//             right=mid-1
//         }
//     }
//     return -1
// }
// console.log(binarySearch(arr,6))

// const arr=[1,2,2,2,3,4,5,6,6,6,7,8,9]
// function firstOccurence(arr,target){
//     let left=0
//     let right=arr.length-1
//     let occurence=-1

//     while(left<=right){

//         let mid=Math.floor((left+right)/2)
//         if(arr[mid]==target){
//             occurence=mid
//         }if(arr[mid]>=target){
//             right=mid-1
//         }else{
//             left=mid+1
//         }
//     }
//     return occurence
// }
// console.log(firstOccurence(arr,2))

// const arr=[1,2,2,2,3,4,5,6,6,6,7,8,9]
// function lastOccurence(arr,target){
//     let left=0
//     let right=arr.length-1
//     let occurence=-1

//     while(left<=right){

//         let mid=Math.floor((left+right)/2)
//         if(arr[mid]==target){
//             occurence=mid
//         }
//         if(arr[mid]<=target){
//             left=mid+1
//         }else{
//             right=mid-1
//         }
//     }
//     return occurence
// }
// console.log(lastOccurence(arr,2))


//find the first greater element from target
//fins the first smallest element from the target
// const arr=[1,2,3,4,6,7,8,9]
// const target=5

// function greaterElement(arr,target){
//     let left=0
//     let right=arr.length-1
//     let occurence=-1

//     while(left<=right){
//         let mid=Math.floor((left+right)/2)
//         if(arr[mid]<target){
//             left=mid+1
//         }else{
//             occurence=mid
//             right=mid-1
//         }
        
//     }
//     return occurence
// }
// console.log(greaterElement(arr,5))

// const arr=[1,2,3,4,6,7,8,9]
// const target=5
// function smallestElement(arr,target){
//     let left=0
//     let right=arr.length-1
//     let occurence=-1

//     while(left<=right){
//         let mid=Math.floor((left+right)/2)

//         if(arr[mid]<target){
//             occurence=mid
//             left=mid+1
//         }else{
//             right=mid-1
//         }
//     }
//     return occurence
// }
// console.log(smallestElement(arr,5))


//write a function to check weather the given two strings are anagrams 
const string="car"
function isAnagrams(strOne,strTwo){
    const firstSortedString=strOne.split("").sort((a,b)=>{    //o(n log n)  because we used sort method
        return a.localeCompare(b)}).join("")
    const secondSortedString=strTwo.split("").sort((a,b)=>a.localeCompare(b)).join("")

    if(firstSortedString==secondSortedString){
        return true
    }else{
        return false
    }
}
console.log(isAnagrams("listen","silent"))

//write a function to check weather the given two strings are anagrams use o(n) time complexity
//here o(n) means counting the characters getting frequency

function isAnagrams(strOne, strTwo){

    if(strOne.length !== strTwo.length){
        return false
    }
    const frequency = {}
    for(let i=0; i<strOne.length; i++){
        let char = strOne[i]

        if(frequency[char]){
            frequency[char]++
        }else{
            frequency[char] = 1
        }
    }
    for(let i=0; i<strTwo.length; i++){
        let char = strTwo[i]

        if(!frequency[char]){
            return false
        }

        frequency[char]--
    }

    return true
}

console.log(isAnagrams("listen","silent"))
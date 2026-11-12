//DSA PRactice questions
// JavaScript Star Pattern & Matrix Practice
// Questions
// Star Pattern Practice (10 Questions)
// 1. Square Star Pattern
// Input: 4
// Expected Output:
// ****
// ****
// ****
// ****

// function starPattern(row,column){
//     for(let i=1;i<=row;i++){
//         let string=" "
//         for(let j=1;j<=column;j++){
//             string+="* "
//         }
//         console.log(string)
//     }    
// }
// starPattern(4,4)

// // 2. Right Triangle
// // Input: 5
// // Expected Output:
// // *
// // **
// // ***
// // ****
// // *****

// function rightTriangle(n){
//     for(let i=1;i<=n;i++){
//         let string=" "
//         for(let j=1;j<=i;j++){
//             string+="* "
//         }
//         console.log(string)
//     }
// }
// rightTriangle(5)


//-----------------------------------------------------------------
// const matrix=[[1,2,3],[4,5,6],[7,8,9]]
// function matrixAccess(matrix){
//     for(let i=0;i<matrix.length;i++){
//         for(let j=0;j<matrix[i].length;j++){
//             console.log(matrix[i][j])
//         }
//     }
// }
// matrixAccess(matrix)

// const matrix=[[1,2,3],[4,5,6],[7,8,9]]
// for(let i=matrix.length-1;i>=0;i--){
//     const arr=matrix[i]
//     //console.log(matrix[i][i])
//     for(let j=matrix.length-1;j>=0;j--){
//         console.log(arr[j])
//     }
// }

function printStars(row,col){
    for(let i=1;i<=row;i++){
        let str=" "
        for(let j=1;j<=col;j++){
            str+="* "
        }
        console.log(str)
    }
    
}
printStars(2,3)


function rightTriangle(row,col){
    for(let i=0;i<=row;i++){
        
    }
}

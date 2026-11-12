//Day 14
//

// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length-i-1;j++){

//             //swap
//             if(arr[j]>arr[j+1]){
//                 const temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort([8,9,3,4,5,1,2,6,7]))


// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length-i-1;j++){

//             //swap
//             if(arr[j]<arr[j+1]){
//                 const temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort([8,9,3,4,5,1,2,6,7]))


//Selection sort
// function SelectionSort(arr){
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
// console.log(SelectionSort([4,3,6,7,9,8,2,1,5]))


// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let temp=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>temp){  //j=i-1
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=temp    
//     }
//     return arr
// }
// console.log(insertionSort([5,7,2,3]))

//--------------------------------------------------------------------------------------------------------------

// for(let i=0;i<3;i++){
//     for(let j=0;j<3;j++){
//         console.log(i,j)
//     }
// }

// const arr=[[1,2,3],[4,5,6]]
// for(let i=0;i<arr.length;i++){
//     const nestedarr=arr[i]
//     for(let j=0;j<nestedarr.length;j++){
//         console.log(nestedarr[j])
//     }
//}


// function printStar(row,col){ 
//     for(let i=1;i<=row;i++){
//        let string=" "
//         for(let j=1;j<=col;j++){
//              string+="* "
//         }
//         console.log(string)
//     }
    
// }
// printStar(3,3)

function rectangle(n){
    for(let i=1;i<=n;i++){
        let string=" "
        for(let j=1;j<=i;j++){
            string+="* "
        }
        console.log(string)
    }
}
rectangle(5)





// let number=10
// console.log(number++)
// console.log(++number)

//Check whether a person is eligible to vote (age ≥ 18).
//  let age=10
//  if(age>=18){
//     console.log("person is eligible to vote")
//  }else{
//     console.log("person is not eligible to vote")
//  }

//Print grades (A, B, C, D, F) using else if.

// let studentScore=10
// if(studentScore>=90){
//     console.log("A")
// }else if(studentScore>=80){
//     console.log("B")
// }else if(studentScore>=70){
//     console.log("C")
// }else if(studentScore>=60){
//     console.log("D")
// }else{
//     console.log("A,B,C,D,F")
// }

// Check if a number is positive, negative, or zero.

// let number=0

// if(number>0){
//     console.log("Postive number")
// }else if(number<0){
//     console.log("negative number")
// }else{
//     console.log("zero")
// }

//Write a program to check whether a number is Even or Odd.
// let a=8
// if(a%2==0){
//     console.log("even")
// }else{
//     console.log("odd")
// }


// //operators
// console.log(100 && 200);
// console.log(0 || 50);
// console.log("" && "JavaScript");
// console.log(null || "Hello");


//****************************************************************************************************************************

//Practice questions:--
//1 print all elements of an array
// const arr=[10,20,30,40,50]
// console.log(arr)

//2 sum of an array
// const arr=[2,4,6,8]
// let sum=0
// for(let i=0;i<arr.length;i++){
//   sum=sum+arr[i]
// }
// console.log(sum)

//orr
// const arr=[10,20,30,40,50]
// let sum=0
// for(let i=0;i<arr.length;i++){
//   sum=sum+arr[i]
// }
// console.log(sum)


//3 average of an array
// const arr=[10,20,30]
// let sum=0
// for (let i=0;i<arr.length;i++){
//   sum=sum+arr[i]
// }
// let average=sum/3
// console.log(average)

//4 Largest element of an array
// const arr=[5,8,2,10,3]
// let Largest=0

// for(let i=0;i<arr.length;i++){
//   if (arr[i]>Largest){
//     Largest=arr[i]
//   }
// }
// console.log(Largest)

//5 smallest element of an array
// const arr=[10,20,2,30,4,-1]
// let smallest=arr[0]

// for (let i=0;i<arr.length;i++){
//   if (arr[i]<smallest){
//     smallest=arr[i]
//   }
// }
// console.log(smallest)

//6 count even numbers
// const arr=[2,4,3,6,8,10,22,33,55]
// let count=0
// for(let i=0;i<arr.length;i++){
//   if(arr[i]%2===0){
//     count++
//   }
// }
// console.log(count)

//7 count odd numbers
// const arr=[2,4,3,6,8,10,22,33,55]
// let count=0
// for(let i=0;i<arr.length;i++){
//   if(arr[i]%2!=0){
//     count++
//   }
// }
// console.log(count)

//8 print even numbers from the arrray

// const arr=[1,2,3,4,6,8,9]

// for(let i=0;i<arr.length;i++){
//   if (arr[i]%2==0){
//     console.log(arr[i])
//   }
// }

//9 print odd numbers off an array 

// const arr=[1,2,3,4,5,7,9]

// for(let i=0;i<arr.length;i++){
//   if(arr[i]%2!=0){
//     console.log(arr[i])
//   }
// }

//10 Count positive & negative
// Input: [-2,5,-1,7,-8]
// Output: Positive=2, Negative=3

// const arr=[-2,5,-1,7,-8]
// let positive=0
// let negative=0

// for(let i=0;i<arr.length;i++){
//   if(arr[i]>0){
//      positive++
//   }else{
//     negative++
//   }
// }
// console.log("Positive=",positive)
// console.log("Negative",negative)

// 11 Search element
// Input: [5,10,15,20], Search=15
// Output: Found

// const arr = [5, 10, 15, 20];
// let search = 15;
// let found = false;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === search) {
//         found = true;
//         break;
//     }
// }
// if (found) {
//     console.log("Found");
// } else {
//     console.log("Not Found");
// }

// 12. Count occurrences
// Input: [1,2,3,2,5,2], Search=2
// Output: 3

// const arr=[1,2,3,2,5,2,2,5,22]
// let search=22
// //let search=parseInt(search)
// let count=0

// for(let i=0;i<arr.length;i++){
//     if (arr[i]===search){
//         count++;
//     }
// }
// console.log(count)

//13 Reverse print of an array

// const arr=[1,2,3,4]

// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i])
// }


//14 product of an array

// const arr=[2,3,4]
// let product=1

// for(i=0;i<arr.length;i++){
//     product=product*arr[i]
// }
// console.log(product)

//15 Even indexes Input: [10,20,30,40,50] Output: 10 30 50

// const arr=[10,20,30,40,50]

// for(let i=0;i<arr.length;i++){
//     if(i%2===0){
//         console.log(arr[i])

//     }
// }

//second largest ----------------------
// const arr=[1,3,9,66,44]
 
// let Largest=0,maxi=0

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>Largest){  // 44 > 66    f
//         maxi = Largest // 1
//         Largest=arr[i] //3
//     }else if(arr[i]<Largest &&  arr[i]>maxi){
//         maxi=arr[i]
//     }
// }
// console.log(maxi)


//second smallest
// const arr=[1,3,5,6,10]

// let smallest=0,min=0

// for(let i=0;i<arr.length;i++){
//     if()
// }

//Third largest
// const arr = [8, 3, 12, 5, 20, 15];

// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] < arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }

// console.log(arr[2]);


//third smallest

// const arr = [8, 3, 12, 5, 20, 15];

// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }

// console.log(arr[2]);

//Check whether the largest element is even or odd

// const arr = [5, 12, 7, 18,30,33];

// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// if (max % 2 == 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }


// function reverseEven(nums){
// let left = 0 ,right = nums.length-1

// while(left < right)
//     if(nums[left]%2 !==0){
//         left++
//     }
//    else if(nums[right]%2 !== 0){
//     right--
//    }
//    else{
//     [nums[left],nums[right]]=[nums[right],nums[left]];
//     left++
//     right--
//    }
//    return nums
// }
// const nums = [1,2,3,4,5,6,7,8,9,10]
// console.log(reverseEven(nums))
//------------------------------------------------------------------------------------------------------
// 1. Find the third largest element.
// Input: []
// Output: 12

//const arr=[8, 3, 12, 5, 20, 15]

// function thirdLargest(arr){
//     let largest=-Infinity
//     let second=-Infinity
//     let third=-Infinity

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             third=second
//             second=largest
//             largest=arr[i]
//         }else if(arr[i]>second){
//             third=second
//             second=arr[i]
//         }else if(arr[i]>third){
//             third=arr[i]
//         }
//     }
//     return third
// }
// console.log(thirdLargest([8, 3, 12, 75, 20, 165]))

// 2. Find the third smallest element.
// Input: [8, 3, 12, 5, 20, 15]
// Output: 8
// function thirdSmallest(arr){
//     let smallest=Infinity
//     let second=Infinity
//     let third=Infinity
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<smallest){
//             third=second
//             second=smallest
//             smallest=arr[i]
//         }else if(arr[i]<second){
//             third=second
//             second=arr[i]
//         }else if(arr[i]<third){
//             third=arr[i]
//         }
//     }
//     return third
// }
// console.log(thirdSmallest([8, 3, 12, 10, 20, 15]))

// 3. Check whether the largest element is even or odd.
// Input: [5, 12, 7, 18]
// Output: Even

// function largestElementIsEven(arr){
//     let largest=arr[0]
//         for(let i=1;i<arr.length;i++){
//             if(arr[i]>largest){
//                 largest=arr[i]
//             }
//             if(largest%2==0){
//                 return "even"
//             }else{
//                 return "odd"
//             }

//         }
//         //return largest
//     }
//     console.log(largestElementIsEven([5, 12, 7, 18]))

// 4. Print all elements greater than both of their neighbors.
// Input: [2, 8, 3, 10, 5]
// Output: 8 10

// function greaterThanNeighbors(arr) {
//     for (let i = 1; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//             console.log(arr[i])
//         }
//     }
// }
// greaterThanNeighbors([2, 8, 3, 10, 5]);

// 5. Print all elements smaller than both neighbors.
// Input: [8, 2, 10, 1, 5]
// Output: 2 1
// function smallerThanBothNeighbors(arr){
//     for(let i=1;i<arr.length-1;i++){
//         if(arr[i]<arr[i-1] && arr[i]<arr[i+1]){
//             console.log(arr[i])
//         }
//     }
// }
// smallerThanBothNeighbors([8, 2, 10, 1, 5])

// 6. Find the first repeating element.
// Input: [4, 2, 5, 7, 2, 8]
// Output: 2
// function repeating(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;i++){
//             if(arr[i]===arr[j]){
//                 return arr[i]
//             }
//         }
//     }
//     return -1
// }
// console.log(repeating([4, 2, 5, 7, 2, 8]))

// 7. Find the first non-repeating element.
// Input: [4, 2, 5, 2, 4, 8]
// Output: 5

function nonRepeatingElement(arr){
    for(let i=0;i<arr.length;i++){
        let count=0
        for(let j=0;j<arr.length;i++){
            if(arr[i]===arr[j]){
                count++
            }
        }
        if(count===1){
            return arr[i]
        }
    }
    return -1
}
console.log(nonRepeatingElement([4, 2, 5, 2, 4, 8]))
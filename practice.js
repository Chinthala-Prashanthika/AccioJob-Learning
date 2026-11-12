//JavaScript Syntax Practice

//1. const
//Create a constant name and store your name in it. Print the value using console.log().
// const name="Chinthala Prashanthika"
// console.log(name)

//2.const
//Create two constants price and quantity. Store suitable values and print the total price
// const price=100
// const quantity=5
// const totalPrice=price+quantity
// console.log(totalPrice)

//3. let
//Create a variable age using let. Assign it a value, update the value, and print the updated age
// let age=21
// age=22
// console.log(age)

//4. var
//Create a variable city using var. Assign a city name and print it.

// var city="Hyderabad"
// console.log(city)

// 5. let + const
// Create studentName and course using const, and marks using let. Print all three values.
// let studentName="Chinthala Prashanthika"
// const course="MERN Full stack with GenAI"
// let marks=100
// console.log(studentName)
// console.log(course)
// console.log(marks)

// Conditions — if / else
// 6. if
// Create a variable age. If the age is 18 or above, print "Eligible to vote".

// let age=21
// if(age>=18){
//     console.log("Eligible to vote")
// }else{
//     console.log("not eligible to vote")
// }

// 7. if else
// Create a variable number. Check whether it is positive or negative and print the appropriate message

// let number=-10
// if(number>=0){
//     console.log("Positive")
// }else{
//     console.log("negative")
// }

// 8. if else
// Create a variable marks. If marks are 40 or above, print "Pass"; otherwise print "Fail".

// let marks=10
// if(marks>=40){
//     console.log("Pass")
// }else{
//     console.log("Fail")
// }

// 9. else-if
// Create a variable marks. Print A for 80+, B for 60–79, C for 40–59, and Fail below 40.

// let marks=100
// if(marks>=80){
//     console.log("A")
// }else if(marks>=60){
//     console.log("B")
// }else if(marks>=40){
//     console.log("C")
// }else{
//     console.log("Fail")
// }

// 10. nested if
// Create variables age and hasLicense. First check if the person is 18 or above. Inside it, check
// whether they have a license and print whether they can drive

// let age=20
// let hasLicense=true
// if(age>=18){
//     if(hasLicense===true){
//         console.log("he can drive")
//     }
//}

// 11. nested if
// Create username and password. Check the username first. If correct, use a nested if to check the
// password.

// let username="Prashanthika"
// let password="Prashanthi@123"
// if(username==="Prashanthika"){
//     if(password==="Prashanthi@123"){
//         console.log("Login Successful")
//     }
// }

// 12. nested if else
// Create marks and attendance. Check whether marks are at least 40. If true, use another if to check
// whether attendance is at least 75%

// let marks = 45;
// let attendance = 75;

// if (marks >= 40) {
//     if (attendance >= 75) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

//Switch case

// 13. switch
// Create a variable day with values 1–7. Use switch to print the corresponding day name

// let day="sunday"
// switch(day){
//     case "sunday":
//         console.log("It is sunday")
//         break;
// }

// 14. switch
// Create a variable operator containing +, -, *, or /. Use switch to perform the selected operation on two
// numbers.

// let a=30
// let b=40
// let operator= "&"
// switch(operator){
//     case "+":
//         console.log(a+b)
//     break
//     case "-":
//         console.log(a-b)
//     break
//     case "*":
//         console.log(a*b)
//     break
//     case "/":
//         console.log(a/b)
//     break

//     default:
//         console.log("Invalid Operator")
// }

// 15. switch
// Create a variable role with values such as admin, teacher, and student. Use switch to print the
// appropriate access message.

// let role="teacher"
// switch(role){
//     case "admin":
//         console.log("This is Admin")
//     break
//     case "teacher":
//         console.log("This is teacher")
//     break
//     case "student":
//         console.log("This is student")
//     break

//     default:
//         console.log("Invalid")

// }

// Functions
// 16. function
// Create a function greet() that prints "Hello JavaScript". Call the function.

// function greet(){
//     console.log("Hello Javacript")
// }
// greet()

// 17. function
// Create a function add(a, b) that returns the sum of two numbers. Call it and print the result.

// function add(a,b){
//     console.log(a+b)
// }
// add(2,5)

// 18. function
// Create a function isEven(number) that checks whether a number is even or odd and prints the result.

// function isEven(number){
//     if(number%2==0){
//         console.log("Given number is even")
//     }else{
//         console.log("Given number is odd")
//     }
// }
// isEven(23)

// Arrays
// 19. array
// Create an array containing five student names. Print the entire array and then print the first and last
// elements.

// const array=["Ashwitha","Chandana","Priya","Anupriya","Vaishu"]
// console.log(array)
// console.log(array[0])
// console.log(array[array.length-1])

// 20. array
// Create an array of five numbers. Print each element using its index

// const numbers=[1,2,3,4,5]
// console.log(numbers[0])
// console.log(numbers[1])
// console.log(numbers[2])
// console.log(numbers[3])
// console.log(numbers[4])

//or
// const numbers=[1,2,3,4,5]
// for(let i=1;i<numbers.length;i++){
//     console.log(i)
// }

// For Loop
// 21. for loop
// Create an array of numbers. Use a for loop to print every element of the array.
// const array=[1,2,3,4,5]
// for(let i=1;i<array.length;i++){
//     console.log(i)
// }

// 22. for loop
// Use a for loop to print numbers from 1 to 20. Print only the even numbers.
// for(let i=1;i<=20;i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

// 23. while loop
// Use a while loop to print numbers from 10 down to 1
// let i=10

// while(i>=1){
//     console.log(i)
//     i--
// }

// While Loop & Mixed Practice
// 24. array + loop
// Create an array of numbers and use a loop to calculate and print the sum of all elements.

// const arr=[10,20,30,40,50]
// let sum=0
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i]
// }
// console.log(sum)

// 25. mixed practice
// Create an array of student marks. Use a loop and if/else to count how many students passed and how
// many failed. Store the counts in variables and print both results.
// const marks = [80, 35, 60, 20, 45];

// let passed = 0;
// let failed = 0;
// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] >= 40) {
//         passed++;
//     } else {
//         failed++;
//     }
// }
// console.log("Passed:", passed);
// console.log("Failed:", failed);

//=========================================================================================================================
// Basic Array + Loop Practice
// 1. Print all elements Given an array of numbers, use a for loop to print every element one by one.
// const arr=[1,2,3,4,5,6,7,8]
// for(let i=1;i<arr.length;i++){
//     console.log(i)  
// }

// 2. Sum of elements
// Given an array of numbers, calculate and print the sum of all elements using a loop.
// const arr=[10,20,30,40,50]
// let sum=0
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i]
// }
// console.log(sum)

// 3. Count elements
// Given an array, count how many elements are present without using the array's length property.
// const arr=[1,2,3,4,5,6,7,8,9]
// let count=0
// for(let i=0;i<arr.length;i++){
//     count++
// }
// console.log(count)

// 4. Find largest number
// Given an array of numbers, find and print the largest number using a loop.
// const array=[10,20,40,30,50]
// let largest=0
// for(let i=0;i<array.length;i++){
//     if(array[i]>largest){
//         largest=array[i]
//     }
// }
// console.log(largest)

// 5. Find smallest number
// Given an array of numbers, find and print the smallest number using a loop.
// const arr=[10,20,33,40,4,42,1]
// let smallest=arr[0]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<smallest){
//         smallest=arr[i]
//     }
// }
// console.log(smallest)

// Counting & Conditions
// 6. Count even numbers
// Given an array of numbers, count how many numbers are even.
// const arr=[1,2,3,4,5,6,7,8,9,10,12,13,14]
// let count=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         count++
//     }
// }
// console.log(count)

// 7. Count odd numbers
// Given an array of numbers, count how many numbers are odd.
// const array=[1,3,6,2,15]
// let count=0
// for(let i=0;i<array.length;i++){
//     if(array[i]%2!==0){
//         count++
//     }
// }
// console.log(count)

// 8. Print positive numbers
// Given an array containing positive and negative numbers, print only the positive numbers.
// const arr=[1,-2,3,-4,5,-6,1]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>0){
//        console.log(arr[i]) 
//     }
// }

// 9. Print negative numbers
// Given an array containing positive and negative numbers, print only the negative numbers.
// const arr=[1,0,-2,-3,5,-6,4,-10,-11]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]<0){
//         console.log(arr[i])
//     }
// }

// 10. Calculate average
// Given an array of numbers, calculate and print the average of all the elements.

const array=[10,20,30,40,50]
let sum=0

for(let i=0;i<array.length;i++){
    sum=sum+array[i]
}
let average=sum/array.length
console.log(average)

// Searching & Creating Arrays
// 11. Search an element
// Given an array and a target number, check whether the target exists in the array using a loop. Print Found or Not Found.

// 12. Count a specific number
// Given an array and a target number, count how many times the target appears in the array.

// 13. Print elements in reverse
// Given an array, use a loop to print its elements from the last element to the first element.

// 14. Create a new array of even numbers
// Given an array of numbers, create a new array containing only the even numbers. Do not use filter().

// 15. Create a new array of squares
// Given an array of numbers, create a new array where every element is the square of the original
// element.
// Logic Building — Slightly Challenging

// 16. Find the second largest
// Given an array of different numbers, find and print the second largest number using loops and
// conditions.
// 17. Separate positive and negative
// Given an array containing positive and negative numbers, create two new arrays: one for positive
// numbers and one for negative numbers.
// 18. Remove duplicate values
// Given an array containing duplicate numbers, create a new array containing each number only once.
// Do not use Set.
// 19. Compare two arrays
// Given two arrays of numbers, check whether they contain the same elements in the same order. Print
// Same or Different.
// 20. Student marks analysis
// Given an array of student marks, use loops and conditions to find: (1) total marks, (2) average marks,
// (3) highest marks, and (4) number of students who passed (40 or above).
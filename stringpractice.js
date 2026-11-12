// JavaScript String Practice Sheet (30 Interview Questions)
// Beginner-friendly questions covering indexOf, lastIndexOf, includes, startsWith, endsWith, slice,
// substring, replace, replaceAll, split, join, toUpperCase, toLowerCase and ASCII. No nested loops required.
// Level 1 – Warm Up
// 1. Find the first occurrence of 'cat' in 'mycatiscute'.
// function firstOccurence(str,target){
//     console.log(str.indexOf(target))
// }
// firstOccurence('mycatiscute','cat')

// 2. Find the last occurrence of 'a' in 'banana'.

// function lastOccurrence(str,target){
//     console.log(str.lastIndexOf(target))
// }
// lastOccurrence('banana','a')

// 3. Check if 'React' exists in 'I love React'.
// function exists(str,target){
//     console.log(str.includes(target))
// }
// exists("i love react","love")

// 4. Check if 'https://google.com' starts with 'https'.
// function startsWith(str,target){
//     console.log(str.startsWith(target))
// }
// startsWith("https://google.com","https")

// 5. Check if 'resume.pdf' ends with '.pdf'.
// function endsWith(str,target){
//     console.log(str.endsWith(target))
// }
// endsWith('resume.pdf','.pdf')

// 6. Extract 'nitesh' from 'nitesh@gmail.com'.
// function extract(str){
//     console.log(str.slice(0,6))
// }
// extract("nitesh@gmail.com")


// 7. Extract the last four characters from '9876543210'.
// function lastFourCharacters(num){
//     console.log(num.slice(0,-4))
// }
// lastFourCharacters("9876543210")

// 8. Convert 'javascript' to uppercase.
// function UpperCase(str){
//     console.log(str.toUpperCase())
// }
// UpperCase("javascript")

// 9. Convert 'HELLO WORLD' to lowercase.
// function lowercase(string){
//     console.log(string.toLowerCase())
// }
// lowercase("HELLO WORLD")

// 10. Replace only the first 'apple' in 'apple mango apple' with 'orange'.
// function replace(string){
//     console.log(string.replace("apple","orange"))
// }
// replace("apple mango apple")

// Level 2 – Easy Interview Questions
// 11. Replace all spaces in 'hello world javascript' with '-'.
// function replace(str){
//     console.log(str.replaceAll(" ","-"))
// }
// replace("hello world javaScript")

// 12. Reverse the order of words in 'I love coding'.
// function reverse(string){
//     console.log(string.reverse())
// }
// reverse("i love coding")

// 13. Count spaces in 'learn javascript today'.
function spacesCount(str){
    console.log()
}

// 14. Count numeric characters in 'abc123xyz45' using ASCII.
// 15. Count uppercase letters in 'HeLLo' using ASCII.
// 16. Count lowercase letters in 'JaVaScRiPt' using ASCII.
// 17. Remove all commas from '1,23,456'.
// 18. Convert 'React,Node,Mongo,Express' into an array.
// 19. Convert ['HTML','CSS','JS'] into 'HTML CSS JS'.
// 20. Mask '9876543210' as '******3210'.



//-----------------------------------------------------------------------------------------------------
// let x=10
// if(x%2==0){
//     console.log("even")
// }else{
//     console.log("odd")
// }

// let a=30
// let b=200
// let c=40
// if(a>b && a>c){
//     console.log(a)
// }else if(b>a && b>c){
//     console.log(b)
// }else{
//     console.log(c)
// }

// let marks=70

// if(marks>=90){
//     console.log("O")
// }else if(marks>=80){
//     console.log("A+")
// }else if(marks>=70){
//     console.log("B+")
// }else{
//     console.log("fail")
// }

// for(let i=0;i<=1;i++){
//     console.log(i)
// }

// for(let i=1;i<=20;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// for(let i=10;i>=1;i--){
//     console.log(i)
// }

// let sum=0
// for(let i=0;i<=10;i++){
//     sum=sum+i
// }
// console.log(sum)

// let count=0
// for(let i=1;i<=10;i++){
//     count++
// }
// console.log(count)

// function factorial(number){
//     let result=1
//     for(let i=1;i<=number;i++){
//         result*=i
//     }
//     return result
// }
// console.log(factorial(5))

// function isPrime(num){
//     if(num<2){
//         return false
//     }
//         for(let i=2;i<num;i++){
//             if(num%i==0){
//                 return false
//             }
//         }
//         return true
//     }
// console.log(isPrime(8))

// function sumOfNumbers(num){
//     let sum=0
//     for(let i=1;i<=num;i++){
//         sum=sum+i
//     }
//     return sum
// }
// console.log(sumOfNumbers(123))

// let  number=10
// if(number%2==0){
//     console.log("even")
// }else{
//     console.log("odd")
// }

// let num=0
// if(num>0){
//     console.log("positive")
// }else if(num<0){
//     console.log("negative")
// }else{
//     console.log("zero")
// }
// let a=100
// let b=20

// if(a>b){
//     console.log(a)
// }else{
//     console.log(b)
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//for loop

// for(let i=1;i<=10;i++){
//     console.log(i)
// }

// for(let i=0;i<=20;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// for(let i=1;i<=20;i++){
//     if(i%2!==0){
//         console.log(i)
//     }
// }

// let sum=0
// for(let i=0;i<=10;i++){
//     sum=sum+i
// }
// console.log(sum)

// for(let i=10;i>=1;i--){
//     console.log(i)
// }
//break and continue
// for(let i=0;i<=10;i++){
//     if(i==5){
//         continue
//     }
//     console.log(i)
// }

// for(let i=1;i<=10;i++){
//     if(i==6){
//         break
//     }
//     console.log(i)
// }

//function()

// function greet(){
//     console.log("hello javaScript")
// }
// greet()

// function add(a,b){
//     console.log(a+b)
// }
// add(10,20)

// function isEven(num){
//     if(num%2==0){
//         console.log("Even")
//     }else{
//         console.log("odd")
//     }
// }
// isEven(7)

// function square(num){
//     num=num*num
//     console.log(num)
// }
// square(5)

// function sumOfNumbers(num){
//     let sum=0
//     for(let i=0;i<=num;i++){
//         sum=sum+i
//     }
//     console.log(sum)
// }
// sumOfNumbers(5)

// function factorial(n){
//     let result=1
//     for(let i=1;i<=n;i++){
//         result=result*i
//     }
//     console.log(result)
// }
// factorial(5)

// function countNumbers(num){
//     let count=0
//     for(let i=0;i<num;i++){
//         count++
//     }
//     console.log(count)
// }
// countNumbers(12345)

// function sumOfDigits(n){
//     let sum=0
//     for(let i=0;i<=n;i++){
//         sum=sum+i
//     }
//     console.log(sum)
// }
// sumOfDigits(3)

// function reverseNumber(n){
//     for(let i=4;i>=1;i--){
//         console.log(i)
//     }
// }
// reverseNumber(4)

// let n=12345
// console.log(n%10)

// function lastDigit(n){
//     return n%10
// }
// console.log(lastDigit(12345))

// function sumOfDigits(n) {
    
// }

// console.log(sumOfDigits(1234));

// let n = 123;

// n = Math.floor(n / 10);

// console.log(n);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function findLargest(arr){
//     let largest=arr[0]
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>largest){
//             largest=arr[i]
//         }
//     }
//     return largest
// }
// console.log(findLargest([11,2,3,44,53,10]))

// function findSmallest(arr){
//     let smallest=arr[0]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<smallest){
//             smallest=arr[i]
//         }
//     }
//     return smallest
// }
// console.log(findSmallest([1,2,3,44,32]))

//second largest

// function secondLargest(arr){
//     let first=arr[0]
//     let second=arr[0]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>first){
//             second=first
//             first=arr[i]
//         }else if(arr[i]>second){
//             second=arr[i] 
//         }
//         // else if(arr[i]>second && arr[i]!==first){
//         //     second=arr[i]
//         // }
//     }
//     return second
// }
// console.log(secondLargest([1,2,30,50]))


//check prime numbers and return 1 to 10 prime numbers
// function isPrime(n){
//     if(n<2){
//         return false
//     }
//     for(let i=2;i<n;i++){
//         if(n%i===0){
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(5))
// function printPrimeNumbers(){
//     for(let i=1;i<10;i++){
//         if(isPrime(i)){
//             console.log(i)
//         }
//     }
// }
// printPrimeNumbers()

// //factorial

// function factorialOfNum(n){
// let factorial=1
// for(let i=n;i>0;i--){
//     factorial=factorial*i
// }
// return factorial
// }
// console.log(factorialOfNum(5))


// //palindrome
// function isPalindrome(string) {
//     let i = 0;
//     let j = string.length - 1;
//     while (i < j) {
//         if (string[i] !== string[j]) {
//             return false;
//         }
//         i++;
//         j--;
//     }
//     return true;
// }
// console.log(isPalindrome("eye"));


// //object
// const userData={
// 	name:"Jhon Doe",
// 	age:25,
// 	posts:50
// }
// console.log(userData)

// //sum of digits

// function sumOfDigits(n){
//     let sum=0
//     while(n>0){
//         let digit=n%10
//         sum=sum+digit
//         n=Math.floor(n/10)
//     }
//     return sum
// }
// console.log(sumOfDigits(1234))

// let arr=[1,1,2,2,3,4,4]
// let frequency={}
// for(let char of arr){
//     frequency[char]=frequency[char]||+1
// }
// return frequency
// console.log(frequency)

// const students = [
//     {name: "A", marks: 80},
//     {name: "B", marks: 50},
//     {name: "C", marks: 90}
// ];
// function getStudents(students) {
//     const result = []
//     for(let student of students) {
//         if(student.marks > 80) {
//             result.push(student)
//         }
//     }
//     return result
// }
//console.log(getStudents(students))


//function sumOfElements(n){
//     let sum=0
//     while(n>0){
//         let digit=n%10
//         sum=sum+digit
//         n=Math.floor(n/10)
//     }
//     return sum
// }
// console.log(sumOfElements(1234))

// function sum(n){
//     let sum=0
// }

// const obj1={a:1,b:2}
// const obj2={b:3,c:4}
// function mergeObjects(obj1,obj2){
//     const obj3={}
//     for(let keys in obj1){
//         if(obj3[keys]=obj1[keys]){
//          obj3[keys]=obj1[keys]
//         }
//         if(obj3[keys]=obj2[keys]){
//             obj3[keys]=obj2[keys]
//         }
//     }
//     return obj3
// }console.log(mergeObjects({a:1,b:2},{b:3,c:4}))

// const obj1={
//     name:"Prashanthika",
//     age:21,
//     city:"Hyd"
// }
// console.log(obj1.city)
// console.log(obj1["name"])
// for(let key in obj1){
//     console.log(key)
//     console.log(obj1[key])
// }

//second largest
// function secondLargest(arr){
//     first =arr[0]
//     second=arr[0]
//     for(let i=0;i<arr.length;i++){
//         if(first>arr[i]){
//             first=second
//             second=arr[i]
//         }else if(second>arr[i]){
//             second=arr[i]
//         }
//     }    
//     return second
// }
// console.log(secondLargest([1,22,3,10]))

// const obj={
//     name:"chinuuuu",
//     d:10
// }
// obj.b="naniiii"
// obj["c"]="buntyyy"
// delete obj.b
// console.log(obj)
// console.log(obj.hasOwnProperty("d"))

// const obj1={a:1,b:3}
// const obj2={b:5,c:10}
// function mergeObjects(){
//     const obj={}
//     for(let key in obj1){
//         obj[key]=obj1[key]
//     }
//     for(let key in obj2){
//         obj[key]=obj2[key]
//     }
//     return obj
// }
// console.log(mergeObjects(obj1,obj1))


// const student = {
//     name: "John",
//     age: 20
// };

// let key = "name";

// console.log(student[key]);
// console.log(student.key);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function groupNumbers(arr){
    let result={even:[],odd:[]}
   for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        result.even.push(arr[i])
    }else{
        result.odd.push(arr[i])
    }
   }
   return result
}
console.log(groupNumbers([1,2,3,4,5]))

function doubleValues(obj1){
    result={}
    for(let key in obj1){
        result[key]=obj1[key]*2
    }
    return result
}
console.log(doubleValues({a:2,b:5}))
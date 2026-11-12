//Day 24--------------------------------------------------------------------------
//Objects:--object is a collection of key and value pairs
// const name="minhaj"
// const dod="01/01/2006"
// const phoneNumber=1234567988


//object creation
// const userOne={name : "Minhaj", dob:"01/01/2006" ,phoneNumber:12345678999,gradYear:2026 }
// const userTwo={name:"Nitesh", dob:"28/08/1999",phoneNumber:78946225555,gradYear:2021}
// const userThree={name:"Harish",dob:"29/09/2004",phoneNumber:78945612322,gradYear:2025,isValid:false}


// const newArray=[userOne,userTwo,userThree]
// console.log(newArray[0].gradYear)
// console.log(newArray)

//adding new vlaue to userfour
// userTwo.isValid=false //adds newvalue
// userThree["isValid"]=true //acesses the value from the object
// console.log(userTwo)
// console.log(userThree)

//Q:-- create a function that should add property called isValid if gradYear is greater than 2021 isValid=true else false

// function updateUsers(array,validYear,key){
//     for(let user of array){
//         if(user.gradYear>validYear){
//             user[key]=true
//         }else{
//             user[key]=false
//         }
//     }
//     return array

// }
// console.log(updateUsers(newArray,2021,"isValid"))

//Q:--Create a function that should return new array if gradYear is Greater than 2021

// function getValidGradYear(array,validYear){
//     const result=[]
//     for(let user of array){
//         if(user.gradYear>validYear){
//             result.push(user)
//         }
//     }
//     return result

// }
// console.log(getValidGradYear(newArray,2021))


//adding new vlaue to userfour

//console.log(userOne)

// delete userOne.dob
// delete userOne["Minhaj"]

//Access data from object using"."
// console.log(userOne.dob)

// const key="phoneNumber"
// console.log(userTwo[key])

//Create a function that should accept object and key and return the value

// function getOjectValue(obj,key){
//     return obj[key]
// }
// console.log(getOjectValue(userTwo,"dob"))

//Object methods :-- A function inside the method is called method
// const user={
//     name:"nitesh",
//     role:"developer",
//     phoneNumber:890890789,
//     summary:function (){
//         return "Nitesh is a developer currently working at Acciojob"
//     }
// }
//for in
// for(let key in user){
//     console.log(key,user[key])
// }

//["name","role","phoneNumber","summary"]

// function adding(){
//     const array=[]
//     for(let key in user){
//         console.log(key)
//         array.push(key)
//     }
//     return array
// }
// console.log(adding(user))

// //or direct with Object.keys
// console.log(Object.keys(user))
// console.log(Object.values(user))

// console.log(user.phoneNumber)
// console.log(user.summary())


//Day 25----------------------------------------------------------------
//JSON:-- JavaScript Object Notation.
//JSON.stringify() method converts a JavaScript value into JSON text. or to exchange data
//JSON.parse() method converts JSON text into JavaScript values.

// const obj={
//     name:"Accijob",
//     centre:"Hyderabad",
//     batches:13
// }
// const jsonFormat=JSON.stringify(obj)

// const convertToObject=JSON.parse(jsonFormat)
// const convertToarray=JSON.parse(jsonFormat)
// console.log(convertToarray)
// //console.log(convertToObject)
// console.log(obj)


// console.log(typeof jsonFormat)
// console.log(typeof obj)

//nested objects
// const studentOne={
//     name:"Prashanthika",
//     phoneNumber:12345689,
//     address:{
//         area:"Near JNTU",
//         city:"HYD",
//         pincode:505521
//     }
// }

// const studentOne={
//     name:"Prashanthika",
//     phoneNumber:12345689,
//     address:{
//         area:"Near JNTU",
//         city:"HYD",
//         pincode:505521
//     }
// }
// const studentTwo={
//     name:"Vipluv",
//     phoneNumber:12345689,
//     marks:0,
//     address:{
//         area:"Near bus stop",
//         city:"Barelly",
//         pincode:505521
//     }
// }
// const studentThree={
//     name:"Gautam",
//     phoneNumber:12345689,
//     address:{
//         area:"Near bus stop",
//         city:"Hyderabad",
//         pincode:505521
//     }
// }
// const students=[studentOne,studentTwo,studentThree]

// console.log(studentTwo.phoneNumber,'student phone number')

// if(studentTwo.hasOwnProperty("marks")){
//     console.log("Has Marks property")
// }else{
//     console.log("does not has marks property")
// }


// function getSpecificCity(students,city){
//     const result=[]
//     for(let student of students){
//         if(student.address.city===city){
//             result.push(student)
//         }

//     }
//     return result
// }
// console.log(getSpecificCity(students,"Hyderabad"))

//for of iterate thorugh function
//for in iterate through object

//Destructuring for objects
// const user={firstName:"nitesh",role:"developer",age:27}
// const{firstName}=user
// const{role:occupation}=user


// console.log(firstName)
// //console.log(role)
// console.log(occupation)



// const objOne={a:10,b:20}
// const objTwo=JSON.parse(JSON.stringify(objOne))
// const objThree={name:"ABC",age:21,
//     value:{}
// }

// objTwo.b=50

// console.log(objOne,objTwo)

// const studentThree={
//     name:"Gautam",
//     phoneNumber:12345689,
//     address:{
//         area:"Near bus stop",
//         city:"Hyderabad",
//         pincode:505521
//     }
// }
// console.log(studentThree["address"]["area"])

//----------------------------------------------------------------------------------------------------

// Linear Search:-Searching for an element by checking each element one by one.
// Example: finding "c" in "abcde".
// Time Complexity:--Understanding how the running time of a program grows as the input size increases.
// You saw the idea of O(1) in your hasOwnProperty() lookup.
// You will likely learn more about O(n), O(n²), etc.
// Searching in Arrays of Objects
// Example: finding students based on their marks.
// Using for...of to iterate through objects.
// Removing Duplicates
// Using an object to keep track of characters already seen.
// Example:
// "hello" → "helo"
// Object Lookup
// Using hasOwnProperty() to check whether a key/character already exists.

//Day 26
//linear search and time complexity

// function checkCharacter(arr,target){
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]===target){
//         return i
//     }
//   }
//   return -1
// }
// console.log(checkCharacter("abcde","c"))

// const students = [{name: "nitesh", marks: 40},{name: "priya", marks: 30},{name: "minhaj", marks: 20}]
// function getMarks(students, target) {
//     const result = []
//     for (let student of students) {
//         if (student.marks > target) {
//             result.push(student)
//         }
//     }
//     return result
// }
// console.log(getMarks(students, 10));


// function findDuplicates(string){
//     let result=""
//     const obj={}
//     for(let char of string){
//         if(!obj.hasOwnProperty(char)){  //time complexity :- O(1)  
//             result+=char
//             obj[char]=1
//         }
//     }
//     return result
// }

// console.log(findDuplicates("hello"))

//     for(let char of string){
//         if(!customIncludes(result,char)){
//             result+=char
//         }
//     }
// }
// for(let i=0;i<string.length;i++){

// }
// console.log(findDuplicates("abababcd"))

// let s="aabba"
// function checksAB(str){

//     if(str[i]===a){
//         return "YES"
//     }if(str[i]===aab && str[i+1]===b){
//         return "NO"
//     }
// }
// console.log(checksAB("aabba"))

//--------------------------------------------------------------------------------------------------
//Day 27
//sort

// const numbers=[5,2,3,4,1,6]
// numbers.sort()
// console.log(numbers)

// const numbers=[10,2,5]
// numbers.sort(function(a,b){
//     //return a-b //for ascending order
//     return b-a   //for descending order
// })
// console.log(numbers)

// const arr=["a","g","d","c","f","e","b"]
// arr.sort()
// console.log(arr)

// const chars=["apple","Aaaa","Banana"]
// chars.sort(function(a,b){
//     return b.localeCompare(a)
// })
// console.log(chars)

// const employess=[{name:"nitesh",salary:5000},{name:"bhanu",salary:50000},{name:"shankar",salary:70000}]
// employess.sort(function(a,b){
//     //return b.salary-a.salary
//     //return b.name-a.name
//     return b.name.localecompare(a.name)
// })
// console.log(employess)


// function getValue(result,path){
//     const keys=path.split(",")

//     for(let key in keys){
//         result=result[key]
//     }
//     return result
// }
// console.log(getValue(a.b.c))

// const obj={
//     a:{
//         b:{
//             c:12,
//             j:false
//         }
//     }
// }

// const uesr={name:"nitesh",role:"devloper"}
// const userTwo={}

//---------------------------------------------------------------------------------------------------------------------------
// function sumOfElements(n){
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


const student = {
    name: "John",
    age: 20
};

let key = "name";

console.log(student[key]);
console.log(student.key);

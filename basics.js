//Day 4

// if ("" || (0 || "")&& true){
//     console.log("excute if")
// }else{
//     console.log("excute else")
// }


// console.log("" || "b")

// console.log("" || (0 || "")&& true)

// console.log("" && "nitesh")

//console.log("00" || '' )


//1  if greater than 40 "very hot"
//2  if greater than 30 "hot"
//3  if greater than 20 "normal"
//4  if greater than 10 "cold"
//5  if less than 10 "very cold"

// let temp=4

// if(temp>40){
//     console.log("very hot")
// }else if(temp>30){
//     console.log("hot")
// }else if(temp>20){
//     console.log("normal")
// }else  if(temp>10){
//     console.log("cold")
// }else{
//     console.log("very cold")
// }


//nested if

// if(true){
//     console.log("Executing if")

//     if(false){
//         console.log("executing nested if")
//     }else{
//         console.log("executing nested else")
//     }
// }

// const studentCentername="hyd"
// const studentGraduYear="2026"

//print student 

// if(studentCentername==="hyd"){
//     console.log("student is in  hyd")


//     if(studentGraduYear==2026){
//         console.log("Student is graduted in 2026")
//     }else{
//         console.log("Student is not graduted in 2026")
//     }
// }



// const studentCentername="hyd"
// const studentGraduYear="2026"

// if(studentCentername==="hyd"){
//     console.log("student is in  hyd")

//     if(studentGraduYear==2026){
//         console.log("Student is graduted in 2026")
//     }else{
//         console.log("Student is not graduted in 2026")
//     }
// }else if(studentCentername==="pune"){
//         console.log("student is in pune")
//         if(studentGraduYear==2026){
//         console.log("Student is graduted in 2026")
//     }else{
//         console.log("Student is not graduted in 2026")
//     }

// }else if(studentCentername==="noida"){
//         console.log("Student in noida")
//         if(studentGraduYear==2026){
//         console.log("Student is graduted in 2026")
//     }else{
//         console.log("Student is not graduted in 2026")
//     }
    
// }else{
//     console.log("student is not in hyd ,pune , noida")
// }


//Day 5

//switch cases

//syntax:

// let number=30

// switch(number){
//     case 1:
//         //block of code
//     break;
//     case 2 :
//         //block of code
//     break;

//     default:
//        //default block of code
// }


// let number=30

// switch(number){

//     //(number===30)
//     case 1:
//         //block of code
//     console.log("case 1 executed")
//     break;

//     //number===1
//     case 30 :
//         //block of code
//     console.log("case 2 executed")
//     break;

//     default:
//        //default block of code
//     console.log("default is executed")
// }


// let day="saturday"

// switch(day){
//     case "sunday":
//         console.log("It is sunday")
//         break;
//     case "monday" :
//         console.log("It is monday")
//          break;
//     case "tuesday" :
//         console.log("It is tuesday")

    
//     default:
//         console.log("default is executed")
    
// }


// const today="friday"

// switch(today){
//     case "saturday":
//         console.log("week off")
//         break;
//     case "sunday":
//         console.log("week off")
//         break;
//     case "monday":
//         console.log("working day")
//         break;
//     default:
//         console.log("Enter valid day")

// }




//day 6
//loop:--

//for loop:-- for(let i=1; i<=5 ;i++){
//console.log(i)
//}
// steps:= 1st let intialize the value i=1
// step2:= 2nd compare with the condition that is i<=5
// step3:= 3rd print console.log(i) ==1  or block of code is excute
// step4:= 4th next post increment i++  that is i became 2
// step5:= 5th next check the condition i<=5 i..e., 2<=5 next print


// for(let i=1; i<=5 ;i++){
//     console.log(i)
// }


// for(let i=1; i<=5 ;i++){
//     console.log(i)
//      if(i===5){
//           break
//       }
// }

// q1:-print me all even numbers from 1 to 100

// for(let i=0; i<=100 ;i+=2){
//     console.log(i)
// }

//or 

//for(let i=0; i<=100 ;i+=2){
//if (i%2===0){
//     console.log(i)
//} }


//q2:- give factorial for given number 5==> 5*4*3*2*1

// let number=5
// let factorial=1

// for(let i=number; i>0; i--){
//     factorial=i*factorial
// }
// console.log("factorial value:",factorial)

//i=5; true;//f=5
//i=4; true;//f=20
//i=3; true;//f=60
//i=2; true;//f=120
//i=1; true;//f=120


// //8 table
// for(let i=1;i<=10;i++){
//       console.log("8 x",i,"=",8*i)
//     }


// odd numbers from 1 to 50
// for (let i=1;i<=50;i++){
//   if(i%2!=0){
//     console.log(i)
//   }
// }

//sum of numbers from 1 to 100
// let sum=0
// for(let i=1;i<=100;i++){
//   sum=sum+i;
// }
// console.log(sum)

//reverse counting

// for(let i=10;i>=1;i--){
//   console.log(i)
// }

//Day 7 
//Blockly games

//*****************************************************************************************

//Day 8
//Array: An array is a collection of multiple values stored in a single variable.
//Array=[1,2,3,45,55]

// const firstName="chitti"
// const secondName="chikki"
// const thirdName="lucky"

//const names=["chitti","chikki","lucky"]
// console.log(names[0])
// console.log(names[1])
// console.log(names[2])
// console.log(names.length)


// const names=["chitti","chikki","lucky","chinnu"]

// names[0]="Accio"
// names[1]="Apple"
// names[2]="Bat"

// for(let i=0;i<names.length;i++){
//   console.log(names[i])
// }


// const names=["chitti","chikki","lucky"]
// const newNames=["Nitesh","pawan","Harish"]
// for(let i=0;i<names.length;i++){
//   (names[i]=newNames[i])
// }
// console.log(names,newNames)


//reverse

// const newNames=["Nitesh","pawan","Harish"]
// newNames.reverse()
// console.log(newNames)


//const names=["chitti","chikki","lucky"]
// const newNames=["Nitesh","pawan","Harish"]
// for(let i=newNames.length-1;i>=0;i--){
//   console.log(newNames[i])
// }


// const names=["chitti","chikki","lucky"]
// const newNames=["Nitesh","pawan","Harish"]
// for(let i=0;i<=newNames.length;i++){
//   names[i]=newNames(newNames.length-1-i)
// }
//console.log()


//push & pop
// const names=["chitti","chikki","lucky"]
// names.push("ABC")
// names.pop()
// console.log(names)



//task 1:Take values from arrayTwo then add in arrOne in same order using for loop
//task2: Remove all the elements from arrayTwo using array.pop()
//task 3:-arrOne should conatain all values from arrTwo in reverse order ex;(5,4,3,2,1)
//task 4:-arrTwo should get empty use only for loop


// const arrOne=[]
// const arrTwo=[1,2,3,4,5]
// for(let i=0;i<arrTwo.length;i++){
//   arrOne.push(i)
// }
// console.log(arrOne)


// const arrOne=[]
// const arrTwo=[1,2,3,4,5]

// for(let i=0;i<arrTwo.length;i++){
//   arrOne[i]=arrTwo[i]
// }
// console.log(arrOne,arrTwo)


// const arrOne=[]
// const arrTwo=[1,2,3,4,5]
// arrTwo.pop()
// arrTwo.pop()
// arrTwo.pop()
// arrTwo.pop()
// arrTwo.pop()
// console.log(arrTwo)


//task 2
// const arrOne=[]
// const arrTwo=[1,2,3,4,5]

// let length=arrTwo.length
// for(let i=0;i<length;i++){
//   arrTwo.pop()
// }
// console.log(arrTwo)


//task 3

// const arrOne=[]
// const arrTwo=[1,2,3,4,5]

// for(let i=0;i<arrTwo.length;i++){
//   arrOne[i]=arrTwo[arrTwo.length-1-i]
// }
// console.log(arrOne,arrTwo)

//task 4
// const arrOne=[]
// const arrTwo=[1,2,3,4,5]
// let length=arrTwo.length
// for(let i=0;i<length;i++){
//   arrOne[i]=arrTwo[length-1-i]
//   arrTwo.pop()
// }
// console.log(arrOne,arrTwo)

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
// const arr=[10,20,30,25,50]
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
// const arr=[2,5,8,7,10]
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

// let arr=[-2,5,-1,7,-8]
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

//----------------------------------------------------------------------------------------------------

//Day 9

//while loop   : A while loop repeats a block of code as long as the condition is true.

// let j=1

// while(j<=100){
//     if(j%2===0){
//         console.log(j)
//     }

//     j++
// }

//find the given number is prime number using while loop

// let givenNumber=10

// //to check the given number is prime number 2,3,4,5,6,7,8,9,10

// let k=2

// while(k<givenNumber){
//     if(givenNumber%k==0){
//         console.log(givenNumber,"is not a prime number",k)
//         break;
//     }else{
//         console.log(givenNumber," is a prime number")
//         break;
//     }
//     k++
// }


// let givenNumber=2
// let isGivenNumberPrime=true

//to check the given number is prime number 2,3,4,5,6,7,8,9,10

// let k=2

// while(k<givenNumber){
//     if(givenNumber%k==0){
//         console.log(givenNumber,"is not a prime number",k)
//         isGivenNumberPrime=false
//         break; //to break the loop or iteration that when it is==0 i.e,, 10%2==0
//     }
//     k++
// }
// if(isGivenNumberPrime){
//     console.log(givenNumber,"is prime number")
// }


//print 1 to 50 numbers which are not divisible by 3 using continue 
// let givenNumber=50
// let i=2

// while(i<=givenNumber){
//     if(i%3===0){
//         i++
//         continue  //skip the iteration --- continue skips the current iteration and moves to the next one
//     }
//     console.log(i)
//     i++
// }


// iterating through string

// const string="abcdef"
// // console.log(string[0],string.length,string(string.length-1))
// let i=0
// while(i<string.length){
//     console.log(string[i])
//     i++
// }

// identify the  number of vowels in a string
// const string="abcdef"
// let  i=0
// let count=0

// while(i<string.length){
//     if(string[i]=="a" || string[i]=="e" || string[i]=="i" || string[i]=="o" ||string[i]=="u"){
//         count++
//     }
//     i++

// }
// console.log(count,"vowels are present")


//Day 10
//Discussed 1st contest questions
//-------------------------------------------------------------------
// const student="bhanu"

// const lookingFor="Jai ram"

// // if(student==lookingFor){
// //     console.log("student arrived")
// // }else{
// //     console.log("student not arrived")
// // }

// //tarnary operator

//syntax : condition ? True Statement : False Statement  ********************************************

// console.log(student==lookingFor ? "Student arrived" : "Student not arrived")

// //If bhanu or jai ram arrived  then print student arrived else print student not arrived
// console.log(student=="bhanu" || student=="jai ram" ? "student arrived" : "student not arrived")


// question
/*
You will get two varaibles 
didStudentAttemptTest = true/false
studentScore = 35

If student attempted a test and scored above 40 print student pass
If student attempted a test and scored below 40 print student failed
If student did not attempt then say Student not attemnpted
*/

// let didStudentAttemptTest = true;
// let studentScore = 20;

// if(!didStudentAttemptTest){
//     console.log("Student Not Attempted");
// }
// else if(studentScore > 40){
//     console.log("Student Pass");
// }
// else{
//     console.log("Student Failed");
// }


//or Ternary

// const didStudentAttemptTest = true
// const studentScore = 35

// console.log(!didStudentAttemptTest ? "Student Not Attempted" : studentScore > 40 ? "Student Pass" : "Student Failed")

// const didStudentAttemptTest=true
// const studentScore=35

// console.log(didStudentAttemptTest ? studentScore > 40 ? "student pass" : "student failed" : "Student Not Attempted")

//---------------------------------------------------------------------------------------------------------------------------------
//Day 11

// const string ="abcdeaedfa"
// const findChar="a"

// let count =0
// let i=0

// while(i<string.length){
//     if (string[i]===findChar){
//       count++ 
//     }
//     i++
// }
// console.log(findChar,"has repated",count,"times")

//you will get one array ex:[1,2,3,4,5]==>12 give me the sum of second half of the array

// const array = [1,2,3,4,5]


// let k= Math.floor(array.length/2)
// let sum =0

// while (k<array.length){
//     sum=sum+array[k]
//     k++
// }
// console.log(sum)

//do while 

//syntax:--
// do{
//     console.log("excuted do while")
// }while(false)

// while(false){
//     console.log("excute while")
// }

// while                  | do...while                   
// Checks condition first | Executes first, checks later (or) excute atleast one time
// May execute 0 times    | Executes at least 1 time     


//palidrome 

// const number="eye"
// let isPalindrome=true
// let i=0
// let j=number.length-1
//  while(i<j){
//     if(number[i]!=number[j]){
//         //console.log("not palindrome")
//         isPalindrome=false
//         break
//     }
//     i++
//     j--
//  }
//  if(isPalindrome){
//     console.log("Palindrome")
//  }else{
//     console.log("Not palindrome")
//  }


//let number=525
// let sum=0

// while(number>0){
//     sum=sum+number%10
//     number=Math.floor(number/10)
// }
// console.log(sum, number)





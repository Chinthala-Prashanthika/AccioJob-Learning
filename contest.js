//CONTEST Questions

//Day 10
//1st question 

// const n=400

// //Extracting year from the given number
// const years=Math.floor(n/365)

// //Getting remamining days after identifying the number of days
// const remainigDaysInYear=n%365

// //Getting mmonth from remainig days after calculating year
// const month=Math.floor(remainigDaysInYear/30)

// //Getting remaining days from variable called remainingDaysInYear
// const days=remainigDaysInYear%30

// //printing the output in expected format
// console.log(years,"Year",month,"Month",days,"Days")

//2nd question is date is valid

// const date=30
// const month=9
// const year=2026

// //check for the month who are having 30 days in a month
// if(month==4 || month==6 || month==9 || month==11){
//     if(date>0 && date<31){
//         console.log("Date is valid")
//     }else{
//         console.log("Date is invalid")
//     }
// }
// //check for months who are having 31 days in a month
// else if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
// //
//     if(date>0 && date<32){
//         console.log("Date is valid")
//     }else{
//         console.log("Date is invalid ")
//     }
// }else if(month==2){
//     //Identifying the given yeaw is leap year 
//     if(year%4==0 && year%100!=0 || year%400==0){
//         if(date>0 && date<30){
//         console.log("Date is valid")
//     }else{
//         console.log("Date is invalid")
//     }
//     }
//      }else{
//         if(date>0 && date<29){
//              console.log("Date is valid")
//             }else{
//                 console.log("Date is invalid")
//             }
        
//     }


//3rd question 

//result=5+10*2>28&&(true||false)

//step 1: first brackets have high priority so it will excute first then the expression will be
//    result=5+10*2>28 && (true)

//step 2: next multiplication have high priority in the above expression it will excute first then the expression will become
//  result=5+20>28 &&(true)

// step 3 :next it will do the addition then the expression will become
//  reuslt=25>28 && (true)

//step4 : checking  > it become  false
//result=false && true

//step 5: final result will be false
//final result==false

// Q4. || Operator
// let a = 0;
// let ans = a || 100;

// console.log(ans);
//100 -->output

//5th question second Largest 

// const a=10
// const b=20
// const c=15
// const d=25

// let Largest=-Infinity //25
// let secondLargest=-Infinity //20

// if(a>b && a>c && a>d){
//     Largest=a
// }else if(b>a && b>c && b>d){
//     Largest=b
// }else if(c>a && c>b && c>d){
//     Largest=c
// }else{
//     Largest=d
// }
// if (a<Largest && (a>secondLargest)){
//     secondLargest=a
// }
// if (b<Largest && (b>secondLargest)){
//     secondLargest=b
// }
// if (c<Largest && (c>secondLargest)){
//     secondLargest=c
// }
// if (d<Largest && (d>secondLargest)){
//     secondLargest=d
// }
// console.log("Second Largest : ",secondLargest)

//-----------------------------------------------------------------------------------------------------------------------
//2nd contest questions 

//Q1:--123 sum of cudes of a number
// function findSumOfCubes(number){
//     const numberInString=number.toString()
// //123
//   let result=0

//   for(let i=0;i<numberInString.length;i++){
//     result+=Math.pow(Number(numberInString[i]),3)
//   }
//    return result
// }
// console.log((findSumOfCubes(123)))

//or 

// function sumOfCubes(n){
//     let sum=0
//     while(n>0){
//         let digit=n%10
//         sum=sum+digit**3
//         n=Math.floor(n/10) //to update the number
//     }
//     return sum
// }

// console.log(sumOfCubes(123))



//Q2:--prime numbers 1 or 10 that is 2,3,5,7

function isPrime(n){
    if(n<2){
        return false
    }
    for(let i=2;i<n;i++){
        if(n%i===0){
            return false
        }
    }
    return true
}
function printPrimeNumbers(){
    for(let i=1;i<10;i++){
        if(isPrime(i)){
            console.log(i)
        }
    }
}
printPrimeNumbers()


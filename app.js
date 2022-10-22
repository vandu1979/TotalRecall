// // STRINGS 
// let firstvarible = "Hello World";
// let secondvarible = "undefined";
// let yourName = "Vandana";
// firstvarible = 1979;
// secondvarible = firstvarible;
// secondvarible = "Hello Hello World";
// let output = `Hello, my name is ${yourName}`;
// console.log(output);


// //BOOLEANS

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';


// console.log(a < b);//true
// console.log(c > d);//true
// console.log('Name' ==='Name');//true

// console.log(true || false);
// console.log(false && false && false && false && false || true);console.log(false || true);
// console.log(e &&'Kevin');
// console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)`
// console.log(a && a || d); // note: the answer is a simple arithmetic equation, not something "weird"`
// console.log(48 && '48');

// //the Farm
// let animal = prompt("name of animal");
// if (animal != "cow") {
//     console.log("Hey you are not a cow!");
//     console.log("you should try cow....do it....");
// }
//     else if(animal === "Cow") {
//         console.log("Moooooooooooo!")
//     }

// //Driver's Ed
// let currentAge;
// if (currentAge >= 16) {
//     console.log("sorry, you are too young.");

// }
// else if (currentAge > 18) {
//     console.log("you are ready to drive.")


// }


// //LOOPS
// for(let i1 = 0; i1 < 10; i1++) {
//     console.log(i1);
// }
// for(let i2 = 10; i2 <= 400; i2++) {
//     console.log(i2);
// }
// for(let i3 = 12; i3 <= 4000; i3 += 3) {
//     console.log(i3);
// }



//The Basics

// //Get Even
// for(let i4 =0; i4 <= 100; i4++) {
//     if(i4 % 2 == 0) {
//         console.log(`${i4} <-- is an even number`)
//     } 
//     else {
//         console.log(i4)
//     }
    
//     } 
    // for(let i5 = 0; i5 <= 100; i5++)
    // if(i5 > 0 && (i5 % 5)){
    //     console.log(`i found a ${i5}. High five!`)
    // }
    // if(i5 > 0 && !(i5 % 3)){
    //     console.log(`I found a ${i5}. Three is a crowd.`)
    // }




//Give Me 5


// //Savings Account
// let totalBalance = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let bank_account = 0;

// totalBalance.forEach(
//     element => {
//         bank_account += element
// });
// console.log(bank_account)

// //or

// let bank_account_2 = 0;

// for(i = 0; i <= 10; i++){
//     bank_account_2 += i;}
//     console.log(bank_account_2)

//     let bank_account_3 = 0;
//     for(i = 0; i <= 100; i++){
//         bank_account_3 += i * 2;}
//         console.log(bank_account_3)



//ARRAYS & CONTROL FLOW

// quotes = ["you vs you", "practice makes perfect"]

// const myArray = [5, 10, 500, 20]
// myArray.push("Aegon","Tom");
// myArray.shift(myArray);
// myArray.unshift("Bob Marley");
// myArray.pop();
// Array.prototype.reverse();
//  myArray.reverse();

// console.log(myArray)


//Biggie Smalls

// let variable = 0;
// if (variable < 100) {
//     console.log("little number");
// }
// else {
//     console.log("big number");
// }

// 0r

// let bigsmall = prompt("enter any number within 1-500.")
// if (bigsmall <= 100){
//     console.log("little number")

// }
// else if (bigsmall >=100){
//     console.log("big number")
// }

// //Monkey in the Middle
// let variable = 0
// if (variable < 5) {
//     console.log("little number");
// }
// else if (variable > 10) {
//     console.log("Big number");
// }
// else {console.log("monkey");
// }

// What's in Your Closet?

// const kristynscloset = [
//     "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps" 
// ];
// console.log(`Kristyn is rocking that ${kristynscloset[2]} today!`)
// kristynscloset.splice(6,0,"raybans")
// kristynscloset.splice(5,1,"stained knit hat")
// console.log(kristynscloset)
// const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];
  //console.log(thomsCloset[0][0])

  

//   thomsCloset[1].pop();
//   thomsCloset[1].push("Footie pjs");
//  // console.log(thomsCloset)
// console.log(`Thom is looking handsome while wearing his ${thomsCloset[1][2]}, his${thomsCloset[1][2]}, while also rockin some ${thomsCloset[2][2]}`)

// /////////////////////////////////////////////////////////////////
// //function

// printCool = function(name){ 
//     this.name = name;
    
// } 
//  name = prompt("What is your name?")
// console.log(`${this.name} is cool!`)
// tried without function arrow method.
//calculateCube = function(length, width, height){
//     //this is one way
//     this.length = length;
//     this.width = width;
//     this.height = height;
//     this.totalVolume = totalVolume;
//     totalVolume = length * width * height
// }
// let cubeVolume = newcalculate
// console.log(totalVolume)
///////////////////////////////////////////
// let calculateCube = (length, width, height) => {
//     length = prompt("enter a length");
//     width = prompt("enter a width");
//     height = prompt("enter a height");
//     let volume = length * width * height;
//     console.log(`this cube has the volume of ${volume}`);
// }
// calculateCube(5,5,5);
 
//vowel 

// function isVowel(letter){



// let vowels = ["a", "e", "i","o","u"]
  
// for(i = 0; i < vowels.length; i++){
//     if (letter === vowels[i]){

   
//     return true;
// }
// }
// return false;
// }
// console.log("e is a vowel?", isVowel("e"))

//  function twoLengths(string1,strings2){
//     let arr = [];
//     for(var i = 0; i < arguments.length; i++){
//         arr.push(arguments[i].length);
//     }
//     return arr;

//     console.log(twoLengths("Hiiiii", "Yayyyyyyyyy", "Hellooooooooo"))
    
//  }

//  //or another solution
//  function getTwoLengths(string1, strings2){
//     return [string1.length, strings2.length];
//  }

 //getMultipleLengths

 // need to do this exercise


 //maxOfThree

//  function maxOfThree(a, b, c)
//  if((a >= b) && (a >= c)){
//     return a;
//  } else if ((b >= a) && (b >= c)) {
//     return b;
//  } else {return c;
// }

function printLongestWord(arr){
  let aWord = "";
  
  for (aWord.length < arr[i].length){
    aWord = arr[i];
  } 
  return aWord;

  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]))
}
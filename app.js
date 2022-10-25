// STRINGS 

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
//   console.log("Hey you are not a cow!");
//   console.log("you should try cow....do it....");
//   alert("we don't know that animal")
// }
// else if(animal === "cow") {
//   console.log("Moooooooooooo!")
//   alert("mooooooooooooooo")
// }


//  //Driver's Ed
// // let currentAge;
// // if (currentAge >= 16) {
// //     console.log("sorry, you are too young.");
// // }
// // else if (currentAge > 18) {
// //     console.log("you are ready to drive.")
// // }

// // Ariel's solution
// // let age = 10;
// // const drivingAllowed = (age) => {
// //   return age >= 16 ? "Here are the keys!"

// //       console.log("you are ready to drive."
      


// //LOOPS

// //The Basics
// for(let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// for(let j = 10; j <= 400; j++) {
//     console.log(j);
// }
// for(let k = 12; k <= 4000; k += 3) {
//     console.log(k);
// }


// //Get Even
// for(let i = 1; i <= 100; i++) {
//   if(i % 2 == 0) {
//     console.log(`${i} <-- is an even number`)
//   } 
//   else {
//    console.log(i)
//   } 
// } 
 

// //Give Me 5
// for(let i = 0; i <= 100; i++){
//   if(i > 0 && (i % 5 == 0)){
//     console.log(`i found a ${i}. High five!`)
//   }
//   if(i > 0 && (i % 3 == 0)){
//     console.log(`I found a ${i}. Three is a crowd.`)
//   }
// }


// //Savings Account
// let totalBalance = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let bank_account = 0;

// totalBalance.forEach(
//   element => {
//     bank_account += element
// });
// console.log(bank_account)

//  //or

// let bank_account_2 = 0;

// for(i = 0; i <= 10; i++){
//     bank_account_2 += i;}
//     console.log(bank_account_2)

//     let bank_account_3 = 0;
//     for(i = 0; i <= 100; i++){
//         bank_account_3 += i * 2;}
//         console.log(bank_account_3)


// //ARRAYS & CONTROL FLOW

// const quotes = ["you vs you", "practice makes perfect","Victory has a thousand fathers, but defeat is an orphan." ]
// //accessing Elements

// const randomThings = [1, 10, "Hello", true]

// randomThings[0]; //"get done"
// randomThings[2] = "World";
// console.log(randomThings)

// const myArray = [5, 10, 500, 20]
// myArray.push("Aegon");
// myArray.push("Tom");
// myArray.shift();
// // add bob marley to the beginning og the array
// myArray.unshift("Bob Marley");
// myArray.pop();
// //reverse
// Array.prototype.reverse();
//  myArray.reverse();
// console.log(myArray)


// //Biggie Smalls
// let variable = 0;
// if (variable < 100) {
//     console.log("little number");
// }
// else {
//     console.log("big number");
// }

// // 0r

// let bigsmall = prompt("enter any number within 1-500.")
// if (bigsmall <= 100){
//     console.log("little number")
// }
// else if (bigsmall >=100){
//     console.log("big number")
// }


// //Monkey in the Middle
// variable = 0
// if (variable < 5) {
//     console.log("little number");
// }
// else if (variable > 10) {
//     console.log("Big number");
// }
// else {console.log("monkey");
// }


// //What's in Your Closet?
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
// //kristynscloset[5]= "stained knit hat";
// console.log(kristynscloset)
//  const thomsCloset = [
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
//   console.log(thomsCloset[0][0])

  

//   thomsCloset[1].pop();
//   thomsCloset[1].push("Footie pjs");
//   //thomsCloset[1][2] = "Footie pjs";
//  console.log(thomsCloset)
// console.log(`Thom is looking handsome while wearing his ${thomsCloset[1][2]}, his${thomsCloset[1][2]}, while also rockin some ${thomsCloset[2][2]}`)

// // /////////////////////////////////////////////////////////////////
// // //function

// printCool = function(name){ 
//     this.name = name;
    
// } 
//  name = prompt("What is your name?")
// console.log(`${this.name} is cool!`)

//  function calculateCube(length, width, height){
//     //this is one way
    
//     let totalVolume = length * width * height
//     console.log(totalVolume)
// }
// //let cubeVolume = newcalculate

// /////////////////////////////////////////
// let calculateCube1 = (length, width, height) => {
//     length = prompt("enter a length");
//     width = prompt("enter a width");
//     height = prompt("enter a height");
//     let volume = length * width * height;
//     console.log(`this cube has the volume of ${volume}`);
// }
// calculateCube1(5,5,5);
 
//isVowel

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

// function twoLengths(string1,strings2){
//   let arr = [];
//   for(var i = 0; i < arguments.length; i++){
//     arr.push(arguments[i].length);
//   }
//   return arr;
// }

// console.log(twoLengths("Hiiiii", "Yayyyyyyyyy", "Hellooooooooo"))
    
 

//  //or another solution
//  function getTwoLengths(string1, strings2){
//     return [string1.length, strings2.length];
//  }
//  console.log(getTwoLengths("Hank", "Hippopopalous"));

//  //getMultipleLengths
//   function getMultipleLengths(strings){
//    const output =[];
//    for(let string of strings){
//     output.push(string.length);
//    }
//    return output;
//   }
//   console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))
 

//  //maxOfThree

// function maxOfThree(a, b, c) {
//   if((a >= b) && (a >= c)){
//     return a;
//   } else if ((b >= a) && (b >= c)) {
//     return b;
//   } else {
//     return c;
//   }
// }
// console.log(maxOfThree(1, 5, 8))

// //printLongestWord

// function printLongestWord(arr){
//   let aWord = "";
//   for (i = 0; i < arr.length; i++) {

//   if (aWord.length < arr[i].length){
//     aWord = arr[i];
//   } 
// }
//   return aWord;
// }

//   console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]))

// // Objects
// const user = {
//   name: "Tommy",
//   email:"tommy@yahoo.com",
//   age: 35,
//   purchased: []
// }
// user.email = "tommy1@yahoo.com" 
// user.age++
// user.location = "New York"
// user.purchased.push("carbohydrates")
// user.purchased.push("peace of mind")
// user.purchased.push("Merino jodhpurs")
// console.log(user)
// console.log(user.purchased[2])
// user.friend = {
//   name: "Gisele",
//   age: 33,
//   location: "Chicago",
//   purchased: []
// }
// console.log(user)
// console.log(user.friend.name)
// console.log(user.friend.location)
// user.friend.age = 55
// user.friend.purchased.push("The One Ring")
// user.friend.purchased.push("A latte")
// console.log(user.friend.purchased[1])
// for (let i = 0; i < user.purchased.length; i++) {
//   console.log(user.purchased[i])
// }
// //loops ==
// for (let i = 0; i < user.friend.purchased.length; i++) {
//   console.log(user.friend.purchased[i])
// }

// // for printing the array backwards: 
// // for (let i = user.purchased.length - 1; i >= 0; i--) {
// //   console.log(user.purchased[i])
// // }
// const updateUser = () => {
//   user.age++;
//   user.name = user.name.toUpperCase();
//   console.log(user);
// };
// updateUser();

// const oldAndLoud = (person) => {
// person.age += 1;
// person.name = person.name.toUpperCase();
// console.log(person);
// };

// oldAndLoud(user);

//Easy Going
// for(let i = 1; i <= 20; i++){
//   console.log(i);
// }
// //Get Even
// for (let i = 3; i <= 200; i+=2){
//   console.log(i);
// }
// //Fizz Buzz
// for(let i = 1; i <= 100; i++){
//   if(i % 5 == 0 && i % 3 == 0){
// console.log(`${i} FizzBuzz`)}
// else if (i % 5 == 0){
//   console.log(`${i}Buz`)
// }
// else if (i % 3 == 0){
//   console.log(`${i}Fizz`)
// }
// }
// // Wild Wild Life

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee[2]++;
// wolfy[3]="Gotham City";
// dart[3]= "Upside Down";
// wolfy[0]= "Gameboy";
// console.log(wolfy);
// console.log(plantee);
// console.log(dart);

// //Yell at the Ninja Turtles
// const ninjaTurtles =
// ["Dontello", "Leonardo", "raphael","Michaelangelo"]
// ;
// for(let i of ninjaTurtles){
//   i=i.toUpperCase();
//   console.log(i);
// }
//Methods, Revisited

//or 7.splice"Django Unchained" and add "Avatar" 
// for(let i = 0; i < favMovies.length; i++){
//   if (favMovies[i] == 'Django Unchained') {
//     favMovies.splice();
//     favMovies[i] = 'Avatar'
//   } 
// }
// favMovies[14];
// console.log(favMovies);

//Where is Waldo



//Excited Kitten
let kittyTalk = ["Love me, pet me! HSSSSSS!"] 
for (let i = 1; i <= 20; i++ ){
  
 
    console.log(`${kittyTalk} <--"Love me, pet me! HSSSSSS!"`)
  }
  




//Find the Median
// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// function Median(arr){
//   let length = arr.length;
//   let mid = Math.floor(length/2);
//   if(length % 2 != 0){
//     return arr[mid];
//   } else{
//     return (arr[mid - 1])/2
//   }
// }
// console.log(nums[14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12])
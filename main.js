//NUMBER 66!!!

/*

*/

//MY SOLUTION


//NUMBER 65!!!

/*
Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".
*/

//MY SOLUTION
function hoopCount (n) {
  return (n >= 10) ? "Great, now move on to tricks" : "Keep at it until you get it"
}

//NUMBER 64!!!

/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, 
depending on your language. You may assume the argument is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

//MY SOLUTION
function findNextSquare(sq) {
  if(Number.isInteger(Math.sqrt(sq))) {
    return (Math.sqrt(sq) + 1)**2
  } 
    else {
     return -1 
    }
  }


//NUMBER 63!!!

/*
This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.
*/

//MY SOLUTION
function checkForFactor (base, factor) {
  return base % factor === 0;
}


//NUMBER 62!!!

/*
Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17
*/

//MY SOLUTION
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals+ copaDelReyGoals + championsLeagueGoals
}

//NUMBER 61!!!

/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
*/

//MY SOLUTION
function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function(a,b) {return a - b;});
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}

//NUMBER 60!!!

/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. 
Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the 
respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

//MY SOLUTION
function openOrSenior(data){
  let output = []
  data.forEach((info) => {
    if (info[0] >= 55 && info[1]>7) {
    output.push("Senior")
  }
  else {
    output.push("Open")
  }
  })
  return output
}


//NUMBER 59!!!

/*
Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) 
which receives two parameters. The first parameter, employed, is true whenever you are employed 
and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the 
circumstances under which you need to set an alarm). It should return false otherwise. Examples:

employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false
*/

//MY SOLUTION
function setAlarm(employed, vacation){
  return employed && !vacation
  }


//NUMBER 58!!!

/*
Implement a function that accepts 3 integer values a, b, c. The function should return true
 if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

Examples:

Input -> Output
1,2,2 -> true
4,2,3 -> true
2,2,2 -> true
1,2,3 -> false
-5,1,3 -> false
0,2,3 -> false
1,2,9 -> false 
*/

//MY SOLUTION
function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  }
  return false;
}


//NUMBER 57!!!

/*
Implement a function that adds two numbers together and returns their sum in binary. 
The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

//MY SOLUTION
function addBinary(a,b) {
  return (a + b).toString(2)
  }


//NUMBER 56!!!

/*
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.
*/

//MY SOLUTION
function otherAngle(a, b) {
  let c = 180 - a - b
  return c
}


//NUMBER 55!!!

/*
Bean counting
write a function called countChar that behaves like countBs, except it takes a second argument 
that indicates the character that is to be counted (rather than counting only uppercase B characters). 
Rewrite countBs to make use of this new function.

example:

console.log(countBs("BOB"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
*/

//MY SOLUTION
function countChar(str, char) {
  let sum = 0
  for (let i = 0; i <= str.length; i++) {
      if (str[i] === char) {
          sum = sum + 1
      }
  }
  return sum
}


//NUMBER 54!!!

/*
Coding in function threeInOne. function accept 1 parameters arr, it's a 1D number array.
 Your task is to merge each of the 3 elements into 1 elements (sum value) and return the result.

Note1: You should not modify the original array.

Note2: Because this is a beginner Kata, and due to the author's mercy ;-), so you do 
not have to verify the validity of the parameter, and do not worry about the number of elements of the array is 
not a multiple of 3.

Example:

threeInOne( [1,2,3]) should return [6]
threeInOne( [1,2,3,4,5,6]) should return [6,15]
threeInOne( [1,2,3,4,5,6,7,8,9]) should return [6,15,24]
threeInOne( [1,3,5,2,4,6,7,7,7]) should return [9,12,21]
*/

//MY SOLUTION
function threeInOne(arr) {
  
  let newArr = arr.slice();
  let result = [];

  
  for (let i = 0; i < newArr.length; i += 3) {
      
      let sum = newArr[i] + (newArr[i + 1] || 0) + (newArr[i + 2] || 0);
      result.push(sum);
  }

  return result;
}

//NUMBER 53!!!

/*
Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of 
the cuboid. Write a function to help Bob with this calculation.
*/

//MY SOLUTION
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    // your code here
    return length * width * height
  }
}


//NUMBER 52!!!

/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

//MY SOLUTION
function sumTwoSmallestNumbers(numbers) {  
  let newNumbers = numbers.sort((a,b) => a-b)
  return newNumbers[0] + newNumbers[1]
}


//NUMBER 51!!!

/*
Complete the function so that it finds the average of the three scores passed to it and returns 
the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

//MY SOLUTION
function getGrade (s1, s2, s3) {
  let score = (s1 + s2 + s3)/3
  return score >= 90 ? 'A' :
         score >= 80 ? 'B' :
         score >= 70 ? 'C' :
         score >= 60 ? 'D' : 'F';
}


//NUMBER 50!!!

/*
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an 
integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/

//MY SOLUTION
var isSquare = function(n){
  //find the square root of n
  //check and see if the square root is an interger.
  //if it is, return true
  //else return false
  
  if (Number.isInteger(Math.sqrt(n))) {
    return true
  }
  else {
    return false
  }
}


//NUMBER 49!!!

/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!
*/

//MY SOLUTION
function squareDigits(num){
  //split the numbers into an array
  //map each number and square it
  //join the numbers for concatanation
  let final = []
  let newNum = num.toString().split('')
  newNum.map((number)=> {
    final.push(Number(number) **2)
  })
  return Number(final.join(''))
}

//NUMBER 48!!!

/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; 
and month 11 (November), is part of the fourth quarter.

Constraint:

1 <= month <= 12
*/ 

//MY SOLUTION
const quarterOf = (month) => {
  
  switch(true) {
      case month == 1 || month == 2 || month == 3:
      return 1;
      break;
      
      case month == 4 || month == 5 || month == 6:
      return 2;
      break;
      
      case month == 7 || month == 8 || month == 9:
      return 3;
      break;
      
      case month == 10 || month == 11 || month == 12:
      return 4;
      break;
      
      default:
      return "please enter a month"
  }
  
  
}


//NUMBER 47!!!

/*
Usually when you buy something, you're asked whether your credit card number, 
phone number or answer to your most secret question is still correct. However,
\ since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"
*/ 

//MY SOLUTION
function maskify(cc) {
  let secretCollection = []
  let numberReveal = []
  if (cc.length > 4) {
for (let i = 0; i < cc.length-4; i++) {
  secretCollection.push('#')
}
for (let i = cc.length - 1; i >= cc.length - 4; i--) {
  numberReveal.push(cc[i])
}  
      let finalCollection = secretCollection.concat(numberReveal.reverse())
       return finalCollection.join('')
    }
    
   else {
     return cc
   }

}

//NUMBER 46!!!

/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/ 

//MY SOLUTION
function accum(s) {
	// set the string to lower case
  //make each character in the string repeat itself.
  //push each charater into a new array
  //concatenate the needed parts of the array
  //return the new array with the appropriate join method
  
  let newS = s.toLowerCase() 
  let newArr = []
  let sum = 0
  for(let i = 0; i < newS.length; i++) {
    sum = sum + 1
    newArr.push(newS[i].repeat(sum))
  }
  let finalArray = []
  for (let i = 0; i < newArr.length; i++) {
    finalArray.push(newArr[i][0].toUpperCase() + newArr[i].slice(1))
  }
  return finalArray.join('-')
}


//NUMBER 45!!!

/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

*/ 

//MY SOLUTION
const reverseSeq = n => {
  let diff = n
  let numCollection = []
  while (diff > 0) {
    numCollection.push(diff)
    diff = diff - 1
  }
  return numCollection
};

//NUMBER 44!!!

/*
You were camping with your friends far away from home, but when it's time to go back, 
you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, 
your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.
*/ 

//MY SOLUTION
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  if ((fuelLeft * mpg) >= distanceToPump) {
    return true
  }
  else {
    return false
  }
};


//NUMBER 43!!!

/*
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) 
that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
*/ 

//MY SOLUTION
var min = function(list) {
    
  return Math.min(...list);
}

var max = function(list){
  
  return Math.max(...list);
}


//NUMBER 42!!!

/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/ 

//MY SOLUTION
function bmi(weight, height) {
  return (weight/(height*height) <= 18.5) ? "Underweight" :
         (weight/(height*height) <= 25.0) ? "Normal":
         (weight/(height*height) <= 30.0) ? "Overweight" : "Obese"
 }


//NUMBER 41!!!

/*
A hero is on his way to the castle to complete his mission. However, he's been told that the
 castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, 
 our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given 
 number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)
*/ 

//MY SOLUTION
function hero(bullets, dragons){
  //Get Coding!
    if ((bullets/2) >= dragons) {
      return true
    }
    else {
      return false
    }
  }

//NUMBER 40!!!

/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59

*/ 

//MY SOLUTION
function past(h, m, s){
  return (h * 3.6e+6) + (m * 60000) + (s * 1000)
}


//NUMBER 39!!!

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

*/ 

//MY SOLUTION
function isIsogram(str){
  let newStr = str.toLowerCase()
  for(var i = 0; i <= newStr.length; i++) {
        for(var j = i+1; j <= newStr.length; j++) {
            if(newStr[j] == newStr[i]) {
                return false;
            }
        }
    }
    return true;
}


//NUMBER 38!!!

/*
Introduction
The first century spans from the year 1 up to and including the year 100, the second century - 
from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28

*/ 

//MY SOLUTION
function century(year) {
  if (year < 100) {
    return 1
  }
   return (year <= 99) ? 1 : Math.floor((year - 1) / 100) + 1;

 // let centuryNumber = Math.floor(year/100) + 1
}


//NUMBER 37!!!

/*
In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

*/ 

//MY SOLUTION
function highAndLow(numbers){
  // ...
  let numbersCollection = numbers.split(' ').map(Number) 
  numbersCollection.sort((a,b) => a-b)
let finalCollection = `${numbersCollection[numbersCollection.length -1]} ${numbersCollection[0]}` 
return finalCollection
}


//NUMBER 36!!!

/*
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5

*/ 

//MY SOLUTION
function litres(time) {
  return Math.floor(time * 0.5)
}

//NUMBER 35!!!

/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

*/ 

//MY SOLUTION
function basicOp(operation, value1, value2){
  //Code
  let arithmetic = 0
  switch (operation) {
      case (operation = "+"):
      arithmetic = 0 + value1 + value2;
      break;
      
      case (operation = "-"):
      arithmetic = 0 + value1 - value2;
      break;
      
      case (operation = "*"):
      arithmetic = 0 + (value1 * value2);
      break;
      
      case (operation = "/"):
      arithmetic = 0 + (value1 / value2);
      break;
      
      default:
      arithmetic = 0;
  }
  return arithmetic
}



//NUMBER 34!!!

/*
Coding in function infiniteLoop. function accept 3 parameters. The 1st parameter is arr, it's a 2D array, it 
contains three 1D array. The 2nd parameter is d ，it's a string. The 3rd parameter is n, it's a number.

You can think of arr as a moat, the elements of arr like water constantly flow in. The direction of flow is
 controlled by the parameter d. The value of d can be "left" or "right". "left" means the "river" moves to the left. 
 All elements in the 1D array are to the left moving n position, if beyond the bounds of the array and the element is 
 moved to the tail on the left side of the array; if it exceeds the left boundary element would be moved to the tail of 
 3rd array(like a circle). Right is also similar to the operation, but it is moving to the right.

Finally, return arr.

Examples
infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"left",1) should return [[2,3,4],[5,6,7],[8,9,1]]
infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"right",1) should return [[9,1,2],[3,4,5],[6,7,8]]
infiniteLoop( [[1,2],[3,4,5,6],[7,8,9,10]],"left",2) should return [[3,4],[5,6,7,8],[9,10,1,2]]

*/ 

//MY SOLUTION
function infiniteLoop(arr,d,n){
  for (var i = 1; i <= n; i++){
  if (d === "left"){
    arr[2].push(arr[0].shift());
    arr[1].push(arr[2].shift());
    arr[0].push(arr[1].shift());
  }
  if (d === "right"){
    arr[0].unshift(arr[2].pop());
    arr[1].unshift(arr[0].pop());
    arr[2].unshift(arr[1].pop());
  }
  }
  return arr;
}


//NUMBER 33!!!

/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls'
 comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/ 

//MY SOLUTION
function disemvowel(str) {
  //prepare an empty array
  //iterate through the string
  //if the character is not a vowel, push it to the array
  //return and join the array
  let trollArray = []
  for(let i = 0; i < str.length; i++) {
    if (str[i] !=='a' && str[i] !=='e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 
    'u' && str[i] !== 'A' && str[i] !=='E' && str[i] !== 'I'  && str[i] !== 'O' && str[i] !== 'U'){
      trollArray.push(str[i])
    }
  }
  return trollArray.join('')
}


//NUMBER 32!!!

/*

This code does not execute properly. Try to figure out why.
*/ 

//MY SOLUTION
function multiply(a, b){
  return a * b
}


//NUMBER 31!!!

/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


*/ 

//MY SOLUTION
function getCount(str) {
  //make an empty array to collect the vowels.
  //use an if/else statemment to push vowels to the array
  //iterate through the strings to find vowels
  //make a sum variable to prepare to count the vowles
  //return total sum
  let vowelArr = []
  let sum = 0 
  for (let i = 0; i <= str.length; i++) {
  if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] === 'o' || str[i] == 'u') {
    vowelArr.push(str[i])
  }
    
}
  return vowelArr.length
  }




//NUMBER 30!!!

/*
Summation
Write a program that finds the summation of every number from 1 to num. 
The number will always be a positive integer greater than 0. Your function only 
needs to return the result, what is shown between parentheses in the example below is 
how you reach that result and it's not part of it, see the sample tests.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/ 

//MY SOLUTION
var summation = function (num) {
  // Code here
  
  let arr = []
  for(let sum = 1; sum <= num; sum++) {
    arr.push(sum)
  }
   for (let i = 1; i < arr.length; i++) {
       arr[i] = arr[i-1] + arr[i]
   }
    return arr.pop()
}


//NUMBER 29!!!

/*
Create a function shuffleIt. The function accepts two or more parameters. The first 
parameter arr is an array of numbers, followed by an arbitrary number of numeric arrays. 
Each numeric array contains two numbers, which are indices for elements in arr (the numbers will always be within bounds). 
For every such array, swap the elements. Try to use all your new skills: arrow functions, the spread operator, destructuring, 
and rest parameters.

Example:

shuffleIt([1,2,3,4,5],[1,2]) should return [1,3,2,4,5]
shuffleIt([1,2,3,4,5],[1,2],[3,4]) should return [1,3,2,5,4]
shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) should return [1,3,5,2,4]
*/ 

//MY SOLUTION
function shuffleIt(arr,...p){
  for (let i = 0; i<p.length; i++) {
    let a = p[i][0];
    let b = p[i][1];
    [arr[b], arr[a]] = [arr[a], arr[b]];
  }
  return arr;
}



//NUMBER 28!!!

/*
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100,
 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, 
 and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are 
divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of
 programmer candidates. So if you solved it, your labor market value just went up.)
*/ 

//MY SOLUTION
function fizzBuzzOne() {
  let num = 0;
  while (num < 100) {
      num += 1
   if (num % 3 === 0 && num % 5 === 0) {
          console.log("fizzbuzz")
      } 
      else if (num % 3 === 0) {
          console.log("fizz")
      } else if (num % 5 === 0) {
          console.log("buzz")
      } else {
          console.log(num)
      }
  }
}


//NUMBER 27!!!

/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
// → 3
*/ 

//MY SOLUTION
let hashMe = ''

for (let i = 0; i < 7; i++) {
    hashMe = hashMe + '#'
    console.log(hashMe)
}



//NUMBER 26!!!

/*
Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end. 
If you're unsure about the format, look at the sample tests.
*/ 

//MY SOLUTION
function multiTable(number) {
  let multiArray = [1,2,3,4,5,6,7,8,9,10]
  let map1 = multiArray.map((x) => 
    `${x} * ${number} = ${x * number}`
  )
                            
  return map1.join('\n')
}


//NUMBER 25!!!

/*
You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the 
first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting 
string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/ 

//MY SOLUTION
function array(string) {
  // TODO
  return string.split(",").slice(1,-1).join(" ") || null;
}

//NUMBER 24!!!

/*
The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets
 the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes 
one argument animal which corresponds to the animal encountered by the frog. 
If this one is an alligator (case-insensitive) return small otherwise return wide.
*/ 

//MY SOLUTION
function mouthSize(animal) {
  // code here
   return animal.toLowerCase() === 'alligator' ? 'small' : 'wide'
}


//NUMBER 23!!!

/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, 
  and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/ 

//MY SOLUTION
function twoSort(s) {
  let sortedOut = []
  let newString = s.sort()
  for (let i = 0; i < newString.length; i++) {
    sortedOut.push(newString[i].split(''))
  }
    return sortedOut[0].join('***')
  }


//NUMBER 22!!!

/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
 You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
*/ 

//MY SOLUTION
function removeChar(str){
  return str.slice(1, str.length-1)
 };


//NUMBER 21!!!

/*
Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.
Worked Example
("+-+", "+--") ➞ "+-0"
# Compare the first characters of each string, then the next in turn.
# "+" against a "+" returns another "+".
# "-" against a "-" returns another "-".
# "+" against a "-" returns "0".
# Return the string of characters.
Examples
("--++--", "++--++") ➞ "000000"

("-+-+-+", "-+-+-+") ➞ "-+-+-+"

("-++-", "-+-+") ➞ "-+00"
*/ 

//MY SOLUTION
function neutralise(s1, s2) {
  let piledUp = []
  let newStack
  let s11 = s1.split('')
  let s22 = s2.split('')
  //use logical operators
  //iterate through s1
  //compare element in s1 to element in s2
  //do logical operation
  //push logic results into new array
  //return newArray.join()
  for (let i = 0; i < s11.length; i++) {
    newStack = s11[i] + s22[i]
    if (newStack === '+' + '+') {
      piledUp.push('+')
    }
    else if (newStack === '-' + '-') {
      piledUp.push('-')
    }
    else {
      piledUp.push("0")
    }
  }
  return piledUp.join('')
}


//NUMBER 20!!!

/*
Write a function that removes the spaces from the string, then return the resultant string.

Examples:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"
*/ 

//MY SOLUTION
function noSpace(x){
  let home = []
 let letter = x.split('')
  letter.forEach((newLetter) => {
    newLetter.trim()
  })
  for (let i = 0; i < letter.length; i++) {
  if (letter[i] !== ' ') {
    home.push(letter[i])
  }
}
  return home.join('')
}



//NUMBER 19!!!

/*
write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/ 

//MY SOLUTION
function stringy(size) {
  let strings = [];
  let positive = '1';
  let neutral = '0'; 
  
  for (let i = 0; i < size; i++) {
    strings.push(i % 2 === 0 ? positive : neutral);
  }
  
  return strings.join('');
}


//NUMBER 18!!!

/*
Your mission is to implement a function that converts the following potentially harmful characters:

< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;
Good luck :D
*/ 

//MY SOLUTION
function htmlspecialchars(formData) {
  // Insert your code here
  let formDataa = formData.split('')
  for (let i = 0; i < formDataa.length; i++) {
  if (formDataa[i] === '<') {
    formDataa[i] = '&lt;'
  }
  else if (formDataa[i] === '>') {
    formDataa[i] = '&gt;'
  }
  else if (formDataa[i] === '"') {
    formDataa[i] = '&quot;'
  }
  else if (formDataa[i] === '&') {
    formDataa[i] = '&amp;'
  }
  
    }
  return formDataa.join('')
}

//NUMBER 17!!!

/*
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
*/ 

//MY SOLUTION
function correctPolishLetters (string) {
  let newString = string.split('')
  for (let i = 0; i < newString.length; i++) {
   if (newString[i] === 'ą') {
     newString[i] = 'a'
   }
    else if (newString[i] === 'ć') {
     newString[i] = 'c'
   }
    else if (newString[i] === 'ę') {
     newString[i] = 'e'
   }
    else if (newString[i] === 'ł') {
     newString[i] = 'l'
   }
    else if (newString[i] === 'ń') {
     newString[i] = 'n'
   }
     else if (newString[i] === 'ó') {
     newString[i] = 'o'
   }
    else if (newString[i] === 'ś') {
     newString[i] = 's'
   }
    else if (newString[i] === 'ź') {
     newString[i] = 'z'
   }
    else if (newString[i] === 'ż') {
     newString[i] = 'z'
   }
  }
  
  return newString.join('')
}

//NUMBER 16!!!

/*
Arrow style Functions
Come here to practice the Arrow style functions Not much else to say good luck!
Details
You will be given an array of numbers which can be used using the String.fromCharCode() (JS), 
Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over 
the array of numbers and convert each number to the corresponding ascii character.

Examples
These are example of how to convert a number to an ascii Character:
Javascript => String.fromCharCode(97) // a
C# => Tools.FromCharCode(97) // a
*/ 

//MY SOLUTION
var ArrowFunc = function(arr) {
  return arr.map((number) => {
    return String.fromCharCode(number);
  }).join('');
}

//NUMBER 15!!!

/*
Character recognition software is widely used to digitise printed texts. 
Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are 
digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/ 

//MY SOLUTION
function correct(string) {
  
  let chars = string.split('');
  
  for (let i = 0; i < chars.length; i++) {
    
    if (chars[i] === '0') {
      chars[i] = 'O';
    } else if (chars[i] === '5') {
      chars[i] = 'S';
    } else if (chars[i] === '1') {
      chars[i] = 'I';
    }
  }
  
  
  return chars.join('');
}

//NUMBER 14!!!

/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/ 

//MY SOLUTION
function sumMix(x){
  let sum = 0
  x.forEach((number) => {
    sum = sum + Number(number)
  })
  return sum
}

//NUMBER 13!!!

/*
Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

We translate the sentence into an alien language according to the following rules:

Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to 
lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)

for example:

alienLanguage("My name is John") should return "My NAMe Is JOHn"
alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
alienLanguage("Hello World") should return "HELLo WORLd"

*/ 

//MY SOLUTION
function alienLanguage(str){
  //coding here...
  let final
  let newString = str.toUpperCase().split(' ')
  
  for (let i = 0; i < newString.length; i++) {
    newString[i] = newString[i].slice(0,newString[i].length-1).concat(newString[i][newString[i].length-1].toLowerCase())
  }
  return newString.join(' ')
}

//NUMBER 12!!!

/*
Complete function padIt, which accepts 2 parameters:

str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
n: a number indicating how many times to pad the string.
Behaviour
You need to write a loop statement within the function that loops n times. Each time through the loop it will 
add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, 
the second time will add a * to the right side, and so on.

Finally, return the padded string.

*/ 

//MY SOLUTION
function padIt(str,n){
  //coding here
  
  let number = 0 
  let sumer = 1
  let finalStr = str
  
  do {
    number+=sumer
    sumer++
    
    if (sumer % 2 !== 0) {
      finalStr = finalStr + '*'
    }
    else if (sumer % 2 === 0) {
      
      finalStr = '*' + finalStr
    }
  } while (sumer <= n)
  
  
  return finalStr
  
  
}

//NUMBER 11!!!

/*
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: 
the dish must start and end with the same letters as the animal's name. 
For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false
 to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. 
\beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end 
of the string. They will not contain numerals.
*/ 

//MY SOLUTION
function feast(beast, dish) {
  //your function here
    
    if (beast[0]=== dish[0] && beast[beast.length-1] === dish[dish.length -1]) {
      return true
    }
    else {
      return false
    }
  }

//NUMBER 10!!!

/*
Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
*/ 

//MY SOLUTION
String.prototype.isUpperCase = function() {
  // your code here
  return this.toUpperCase() === this.toString()
}

//NUMBER 9!!!

/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/ 

//MY SOLUTION
function findSmallestInt(arr) {
  return Math.min(...arr)
}

//NUMBER 8!!!

/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a 
murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/ 

//MY SOLUTION
function countSheep(num) {
  
  let sheepSequence = [];
  
  
  for (let i = 1; i <= num; i++) {
    
    sheepSequence.push(`${i} sheep...`);
  }
  
  
  return sheepSequence.join('');
}

//NUMBER 7!!!

/*
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, 
there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/ 

//MY SOLUTION
function smash (words) {
  return words.join(" ")
};

//NUMBER 6!!!

/*
It's a well known fact that anything Chuck Norris wants, he gets. As a result Chuck very rarely has to use the word false.

It is a less well known fact that if something is true, and Chuck doesn't want it to be, Chuck can 
scare the truth with his massive biceps, and it automatically becomes false.

Your task is to be more like Chuck (ha! good luck!). You must return false without ever actually using the word false...

Go show some truth who's boss!
*/ 

//MY SOLUTION
function ifChuckSaysSo(){
  return !true
  }

//NUMBER 5!!!

/*
Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
*/ 

//MY SOLUTION
function toCsvText(array) {
  // good luck
 return array.join('\n')
}

//NUMBER 4!!!

/*
Coding in function fiveLine, function accept 1 parameter:s. s is a string.

Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

Note2: Using a string template can make your job easier.

Example:

fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"
a
aa
aaa
aaaa
aaaaa       <---The effect when you console.log it
fiveLine("  xy ") 
should return "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
xy
xyxy
xyxyxy
xyxyxyxy
xyxyxyxyxy  <---The effect when you console.log it

*/

//MY SOLUTION
function fiveLine(s){
  //coding here...
  return `${s.trim()}\n${s.trim()}${s.trim()}\n${s.trim()}${s.trim()}${s.trim()}\n${s.trim()}${s.trim()}${s.trim()}${s.trim()}\n${s.trim()}${s.trim()}${s.trim()}${s.trim()}${s.trim()}`
  
}


//NUMBER 3!!!

/*
Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

We translate the sentence into an alien language according to the following rules:

Each word in the sentence is separated by spaces. The last letter of each word in the sentence 
turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)

for example:

alienLanguage("My name is John") should return "My NAMe Is JOHn"
alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
alienLanguage("Hello World") should return "HELLo WORLd"
A small hint: The first conversion of the entire string will make the code easier
*/

//MY SOLUTION
function alienLanguage(str){
  //coding here...
  let newStr = str.toUpperCase().split(" ")
  for (let i = 0; i < newStr.length; i++) {
    
   // newStr[i] = newStr[i].replace(newStr[i][newStr[i].length - 1], newStr[i][newStr[i].length - 1].toLowerCase()) 
  newStr[i] = newStr[i].slice(0, newStr[i].length - 1) +newStr[i][newStr[i].length-1].toLowerCase()
}
  return newStr.join(" ")
 } 

//NUMBER 2 !!!

/*
Implement a function which accepts 2 arguments: string and separator.

The expected algorithm: split the string into words by spaces, split each word into separate 
characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

For example:

splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"
Series

*/

//MY SOLUTION
function splitAndMerge(string, separator) {

  let words = string.split(' ')
  let newHome = []
   
  for (let i = 0; i < words.length; i++) {
    newHome.push(words[i].split('').join(separator))
  }
 
return newHome.join(' ')
}


//NUMBER 1 !!!

/*
Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.

Please return the gap between the first position of c and the last position of c.

If there are a lot of c in the str, should return a positive integer; If there is only one c in str, 
should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.

for example:

firstToLast("ababc","a") should return 2(2-0)
firstToLast("ababc","c") should return 0(4-4)
firstToLast("ababc","d") should return -1

*/

//MY SOLUTION
function firstToLast(str,c){
    let first = str.indexOf(c)
    let last = str.lastIndexOf(c)
    
    if (first === -1 || last === -1) {
      return -1
    }
    else{
    
    return last - first
      }
  }
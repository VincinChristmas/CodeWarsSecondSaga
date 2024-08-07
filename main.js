
//NUMBER 100

/*
Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' 
has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest

Example:

  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00


After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

*/

//MY SOLUTION
function calculateYears(principal, interest, tax, desired) {
  let sum = principal; 
  let years = 0; 

  while (sum < desired) {
    let afterTaxInterest = (sum * interest * (1 - tax));
    sum += afterTaxInterest;
    years++;
  }

  return years;
}


//NUMBER 99

/*
Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truthy, func1 should be called, otherwise call the func2.

Example:
_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.

*/

//MY SOLUTION
function _if(bool, func1, func2) {
  if (bool == true) {
    func1()
  }
  else {
    func2()
  }
}

//NUMBER 98

/*
Coding in function countAnimals. function accept two parameters: animals, a string contains some animals; count, 
an array list of which animals we should count. The result should be a number array.

Examples
countAnimals("dog,cat",["dog","cat"]); //=> [1,1]
countAnimals("dog,cat",["dog","cat","pig"]); //=> [1,1,0]
countAnimals("dog,dog,cat",["dog","cat"]); //=> [2,1]
countAnimals("dog,dog,cat",["pig","cow"]); //=> [0,0]

*/

//MY SOLUTION
function countAnimals(animals,count){
  //coding here...
  let newArr = []
  
  count.forEach((subject)=> {
    newArr.push(animals.split(subject).length-1)
    
  })
  return newArr
}

//NUMBER 97

/*
Coding in function rndCode. Your task is to generate a random verification code. In accordance with the following rules:

the code length should be 8;

The 1st and 2nd characters should be two uppercase letters. The range is "ABCDEFGHIJKLM".

The 3rd-6th characters should be four numbers.

the 7th and 8th characters should be two symbols. The range is "~!@#$%^&*".

If Your code runs 100 times, It should generate 100 non duplicate verification codes.

Some valid verification code examples:
*/

//MY SOLUTION
function rndCode(){
  var randomRange = function (range, count) {
    var sequence = [];
    for (var i=0; i<count; i++) {
      sequence.push(range[~~(range.length*Math.random())]);
    }
    
    return sequence.join("");
  }
  
  return randomRange('ABCDEFGHIJKLM', 2) + randomRange('0123456789', 4) + randomRange('~!@#$%^&*', 2);
}

//NUMBER 96

/*
Coding in function cutCube. function accept 2 parameter: volume and n. volume is the volume of a cube. 
If we cut the cube into n block. please determine whether the length of the cube is an integer. return true or false.

For exmaple:

volume=27, it can be divided into 27 blocks, each small cube side length is 1

cutCube(27,27) should return true
volume=512, it can be divided into 8 blocks, each small cube side length is 4

cutCube(512,8) should return true
volume=512, it can be divided into 64 blocks, each small cube side length is 2

cutCube(512,64) should return true
If the side length of small cube is not a integer, should return false.

cutCube(256,8) should return false
cutCube(27,3) should return false
cutCube(123,456) should return false
If it can't be divided evenly into n small cubes, should return false too.

cutCube(50000,50) should return false
cutCube(256,4) should return false
The two examples above seems to meet our requirements, but please note: a cube is unable to evenly 
divided into 50 pieces or 4 pieces. Only cubic numbers(such as 8,27,64,125,216...) can be used to divide the cube evenly.
*/

//MY SOLUTION
function cutCube(volume,n){
  return !(Math.cbrt(n) % 1) && !(Math.cbrt(volume / n) % 1);
}

//NUMBER 95

/*
Coding in function maxMin. function accept 2 parameter arr1 and arr2. They are two number array and have the same number of elements.

First, calculate the difference of the same index of the arr1 and arr2. Like this:

[1,3,5]
 | | |   --->  8, 5, 2
[9,8,7]
Please note that the difference is positive. Such as the above 1 and 9, the difference should be 8, not -8. 
I think abs() can help you get the correct result ;-)

Then find the maximum and minimum values of them, and return the results in the form of an array. Like this:

  maxvalue , minvalue
[    8     ,    2     ]
Examples
maxMin([1,3,5],[9,8,7])               should return [8,2]
maxMin([1,10,100,1000],[0,0,0,0])     should return [1000,1]
maxMin([10,20,30,40],[111,11,1,-111]) should return [151,9]
*/

//MY SOULUTION
function maxMin(arr1,arr2){
  //coding here...
  let emptyArr = []
  let newArr = []
  for (let i = 0; i < arr2.length; i++) {
    emptyArr.push(Math.abs(arr2[i]-arr1[i]))
  }
  newArr.push(Math.max(...emptyArr)) 
    newArr.push(Math.min(...emptyArr))
  return newArr
}

//NUMBER 94

/*
Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

Good luck :)
*/

//MY SOLUTION
function unusualFive() {
  let array = ["f","","","",""]
  return array.length
}

//NUMBER 93

/*
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"
*/

//MY SOLUTION
function peopleWithAgeDrink(old) {
  return   (old < 14) ? "drink toddy" :
    ((old >= 14 && old < 18) ? "drink coke" :
    ((old >= 18 && old < 21) ? "drink beer" :
    (old >= 21) ? "drink whisky" : "don't drink"));
}


//NUMBER 92

/*
Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

If arr is not an array, function should return:

"It's a fake array"
If arr contains elements 5 and 13, function should return:

"It's a black array"
If arr contains neither 5 nor 13, function should return:

"It's a white array"
Examples
blackAndWhite(5,13) should return "It's a fake array"
blackAndWhite([5,13]) should return "It's a black array"
blackAndWhite([5,12]) should return "It's a white array" 
Using string template and ternary operator can make your work easier.
*/

//My SOLUTION
function blackAndWhite(arr){
  //coding here...
  if (Array.isArray(arr) === false) {
    return "It's a fake array"
  }
  
  else if ((arr.includes(5)===true) && (arr.includes(13)===true)) {
    return "It's a black array"
  }
  else if ((arr.includes(5)=== false) || (arr.includes(13)===false)) {
    return "It's a white array"
  }
  
}


//NUMBER 91


/*
Coding in function tailAndHead. function accept 1 parameter arr(a number array).

We use an example to explain this task:

You got an array [123,456,789,12,34,56,78].

First, from left to right, the tail of an element and the head of the next element are added together. 
The results are put into an array. like this:

[123,456,789,1 2,3 4,5 6,78]
   3+4 6+7 9+1 2+3 4+5 6+7  
    |   |   |   |   |   |
   [7 ,13 ,10 , 5 , 9 ,13]
And then, Calculate their product and return it(7x13x10x5x9x13=532350)

So, tailAndHead([123,456,789,12,34,56,78]) should return 532350 

All elements of arr are positive integer. If a number is less than 10, its head and tail are the same. 
Please try to use reduce() solve this kata.

Examples
tailAndHead([1,2,3,4,5]) should return 945
tailAndHead([111,2345,66,78,900]) should return 7293
tailAndHead([35456,782,569,2454,875]) should return 12012

*/


//MY SOLUTION
function tailAndHead(arr) {
  const digits = arr.map(num => num.toString().split('').map(Number));
  const sums = digits.reduce((acc, current, index, array) => {
      if (index < array.length - 1) {
          const next = array[index + 1];
          const sum = current[current.length - 1] + next[0];
          return [...acc, sum];
      }
      return acc;
  }, []);

  const product = sums.reduce((acc, current) => acc * current, 1);

  return product;
}

//NUMBER 90

/*
Messi's Goal Total
Use variables to find the sum of the goals Messi scored in 3 competitions

Information
Messi goal scoring statistics:

Competition	Goals
La Liga	43
Champions League	10
Copa del Rey	5
Task
Create these three variables and store the appropriate values using the table above:
laLigaGoals
championsLeagueGoals
copaDelReyGoals
Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.
*/

//MY SOLUTIONS
var  laLigaGoals = 43
var  championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals


//NUMBER 90

/* 
Coding in function mirrorImage. function accept 1 parameter arr, it's a number array. 
Your task is find the first pair of mirror-image number and return as an array. The two 
number must be adjacent, and the returned array is in accordance with the order from left to right.

What's the mirror-image number? for example:123 and 321 is a pair of mirror-image number. 
Two the same number of palindromes can also be seen as a pair of mirror-image number, such as 121 and 121.

If no such number is found, return[-1,-1]

Example
mirrorImage([11,22,33,33,22,11]) should return [33,33]
mirrorImage([454,86,57,75,16,88]) should return [57,75]
mirrorImage([454,0,57,0,16,88]) should return [-1,-1]

*/

//THE SOLUTION
function mirrorImage(arr) {
  var a, b;
  var result = arr.some((x, i) => {
      a = x, b = arr[i + 1];
      return x === Number(String(b).split('').reverse().join(''));
  });

  return result ? [a, b] : [-1, -1];
}

//NUMBER 89


/*
Coding in function bigToSmall. function accept 1 parameter arr(2D number array).

Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.

And then sort array in descending order.

Finally, use the separator ">" to connect the elements into a string.

Don't complain about the situation like 1>1 is not reasonable, it is just a separator.

Some example:

bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,3,5],[2,4,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,1],[1],[1,1]]) should return "1>1>1>1>1"
*/


//MY SOLUTION
function bigToSmall(arr){
  //coding here...
  let newArr = [].concat(...arr)
  return newArr.sort((a,b)=>a-b).reverse().join('>')
}

//NUMBER 88


/*
In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) 
called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. 
It then returns true if exactly one of the two expressions are true, false otherwise. For example:

false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
Task
Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is
 to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function 
 should have the behaviour described above, 
returning true if exactly one of the two expressions evaluate to true, false otherwise.
*/


//MY SOLUTION
function xor(a, b) {
  switch(true) {
      case (a===false&&b===false):
      return false;
      break;
      
      case (a===true&&b===false):
      return true;
      break;
      
      case (a===false&&b===true):
      return true;
      break;
      
      case(a===true&&b===true):
      return false;
      break;
      
      default:
      return "nothing"
      
  }
  }

//NUMBER 87

/*
Coding in function countGrade. function accept 1 parameters scores, it's a number array. Your task is to count the grade 
distribution of the scores, to return an object like this:

{S:888, A:888, B:888, C:888, D:888, X:888}
Grading rules:

Grade S: Full marks(score=100)
Grade A: score<100 and score>=90
Grade B: score<90 and score>=80
Grade C: score<80 and score>=60
Grade D: score<60 and score>=0
Grade X: score=-1(The cheating guy gets a score like that)
Example
countGrade([50,60,70,80,90,100]) should return {S:1, A:1, B:1, C:2, D:1, X:0}
countGrade([65,75,,85,85,95,100,100]) should return {S:2, A:1, B:2, C:2, D:0, X:0}
countGrade([-1,-1,-1,-1,-1,-1]) should return {S:0, A:0, B:0, C:0, D:0, X:6}

*/

//MY SOLUTION
function countGrade(scores){
  return {
    'S': scores.filter(function(x){return x == 100}).length,
    'A': scores.filter(function(x){return (x < 100 && x >= 90)}).length,
    'B': scores.filter(function(x){return (x < 90 && x >= 80)}).length,
    'C': scores.filter(function(x){return (x < 80 && x >= 60)}).length,
    'D': scores.filter(function(x){return (x < 60 && x >= 0)}).length,
    'X': scores.filter(function(x){return x == -1}).length,
  };
}

//NUMBER 86

/*
Coding in function isolateIt. function accept 1 parameters arr, it's a string array. Your task is to put 
a character "|" into the middle of each element.

If the string length is an even number, use the insert method. for example: "abcd" should became "ab|cd". 
"|" should be inserted between ab and cd.

If the string length is an odd number, use the replacement method. for example: "abcde" should became 
"ab|de". Character c will be replaced by |.

The original array should not be changed, you need to return a new array(if you use the map method, you 
do not need to worry about this).

Example
isolateIt(["abcd","efgh"]) should return ["ab|cd","ef|gh"]
isolateIt(["abcde","fghij"]) should return ["ab|de","fg|ij"]
isolateIt(["1234","56789"]) should return ["12|34","56|

*/

//MY SOLUTION
function isolateIt(arr) {
  return arr.map(item => {
      const midIndex = Math.floor(item.length / 2);
      if (item.length % 2 === 0) {
          
          return item.slice(0, midIndex) + '|' + item.slice(midIndex);
      } else {
          
          return item.slice(0, midIndex) + '|' + item.slice(midIndex + 1);
      }
  });
}


//NUMBER 85

/*
Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
The Database
[ ("english", "Welcome")
, ("czech", "Vitejte")
, ("danish", "Velkomst")
, ("dutch", "Welkom")
, ("estonian", "Tere tulemast")
, ("finnish", "Tervetuloa")
, ("flemish", "Welgekomen")
, ("french", "Bienvenue")
, ("german", "Willkommen")
, ("irish", "Failte")
, ("italian", "Benvenuto")
, ("latvian", "Gaidits")
, ("lithuanian", "Laukiamas")
, ("polish", "Witamy")
, ("spanish", "Bienvenido")
, ("swedish", "Valkommen")
, ("welsh", "Croeso")
]
*/

//MY SOLUTION
function greet(language) {
  
  switch(true) {
      case (language === "english"):
      return "Welcome";
      break;
      
      case (language === "czech"):
      return "Vitejte";
      break;
      
      case (language === "danish"):
      return "Velkomst";
      break;
      
      case (language === "dutch"):
      return "Welkom";
      break;
      
      case (language === "estonian"):
      return "Tere tulemast";
      break;
      
      case (language === "finnish"):
      return "Tervetuloa";
      break;
      
      case (language === "flemish"):
      return "Welgekomen";
      break;
      
      case (language === "french"):
      return "Bienvenue";
      break;
      
      case (language === "german"):
      return "Willkommen";
      break;
      
      case (language === "irish"):
      return "Failte";
      break;
      
      case (language === "italian"):
      return "Benvenuto";
      break;
      
      case (language === "latvian"):
      return "Gaidits";
      break;
      
      case (language === "lithuanian"):
      return "Laukiamas";
      break;
      
      case (language === "polish"):
      return "Witamy";
      break;
      
      case (language === "spanish"):
      return "Bienvenido";
      break;
      
      case (language === "swedish"):
      return "Valkommen";
      break;
      
      case (language === "welsh"):
      return "Croeso";
      break;
      
      default:
      return "Welcome"
  } 
}

//NUMBER 84

/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.

Examples:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

The function, when given n = 25 and d = 1 as argument, should return 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.
*/

//MY SOLUTION

//NUMBER 83

/*
Given two numbers and an arithmetic operator (the name of it, as a string), 
return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number
 in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
*/

//MY SOLUTION
function arithmetic(a, b, operator){
  switch(true) {
      case operator === 'add':
      return a + b;
      break;
      
      case operator === 'subtract':
      return a - b;
      break;
      
      case operator === 'multiply':
      return a * b;
      break;
      
      case operator === "divide":
      return a/b
      break;
  }
}


//NUMBER 82

/*
In this simple exercise, you will create a program that will take two lists of integers, a and b. 
Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. 
You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume
 of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.
*/

//MY SOLUTION
function findDifference(a, b) {
  return  Math.abs((a[0] * a[1] * a[2]) - (b[0] * b[1] * b[2]))
  
}


//NUMBER 81

/*
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"

*/

//MY SOLUTION
function sumStr(a,b) {
  return String(Number(a)+Number(b));
}


//NUMBER 80

/*
Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
Example
With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
So the maximum value that you can obtain is 9.
*/

//MY SOLUTION
function expressionMatter(a, b, c) {
  
  let first = a + b + c;  
  let second = a * b * c; 
  let third = (a + b) * c; 
  let fourth = a * (b + c); 
  
  
  let results = [first, second, third, fourth];

  
  let maxResult = Math.max(...results);

  return maxResult;
}


//NUMBER 79

/*Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

//MY SOLUTION
function removeUrlAnchor(url){
  // TODO: complete
  let realUrl = url.split('')
  if (realUrl.includes('#')) {
    return realUrl.join('').slice(0, realUrl.indexOf('#'))
  }
  else {
    return realUrl.join('')
  }
}

//NUMBER 78

/*
Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
Examples(Inputs-->Output):

100, 12 --> 100
99, 0 --> 100
10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0
20, 2 --> 0
*/

//MY SOLUTION
function finalGrade (exam, projects) {
  switch (true) {
      case (exam > 90 || projects > 10):
      return 100;
      break;
      
      case (exam > 75 && projects >= 5):
      return 90;
      break;
      
      case (exam > 50 && projects >=2):
      return 75;
      break;
      
      default:
      return 0;
  }
}


//NUMBER 77

/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/

//MY SOLUTION
var isAnagram = function(test, original) {
  test = test.toLowerCase();
  original = original.toLowerCase();
  if (test.length !== original.length) {
    return false;
  }
  let sortedTest = test.split('').sort().join('');
  let sortedOriginal = original.split('').sort().join('');
  return sortedTest === sortedOriginal;
};

//NUMBER 76

/*
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

//MY SOLUTION
var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  let catYears = 0
  let dogYears = 0
  if (humanYears === 1) {
    catYears = catYears + 15
    dogYears = dogYears + 15
  }
  else if (humanYears === 2) {
    catYears = catYears + 15 + 9
    dogYears = dogYears + 15 + 9
  }
  else {
    catYears = catYears + 15 + 9 + (4 * (humanYears-2))
    dogYears = dogYears + 15 + 9 + (5 * (humanYears-2))
  }
  return [humanYears, catYears, dogYears]
}

//NUMBER 75!!!

/*
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an 
empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

//MY SOLUTION

function solution(nums) {
  if (nums === null || nums === false) {
    return [];
  } else {
    return nums.sort((a, b) => a - b);
  }
}


//NUMBER 74!!!

/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 
with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/

//MY SOLUTION
function powersOfTwo(n){
  let num = 0
  let emptyArr = []
while (num <= n) {
   emptyArr.push(2**num)
  num = num + 1
 
}
return emptyArr
}

//NUMBER 73!!!

/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

//MY SOLUTION
function stray(numbers) {
  let emptyArr = []
  let newNums = numbers.sort((a,b)=> {a-b})
  newNums.forEach(num => {
    if (newNums.indexOf(num) === newNums.lastIndexOf(num)) {
      emptyArr.push(num)
    }
  })
  return emptyArr.pop()
}


//NUMBER 72!!!

/*
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/

//MY SOLUTION
function oddOrEven(array) {
  //enter code 
 let sum = array.reduce((accumulator, currentValue) => {
 return accumulator + currentValue
   }, 0);
    if (Math.abs(sum) % 2 === 0) {
      return 'even'
    }     
   else {
     return 'odd'
   }
}

//NUMBER 71!!!

/*
Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15
*/

//MY SOLUTION
function move (position, roll) {
  return (2 * roll) + position
}

//NUMBER 70!!!

/*
There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the 
number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). 
Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they 
are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned 
integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

*/

//MY SOLUTION
var number = function(busStops){
  // Good Luck!
  let sum1 = 0
  let sum2 = 0
  
  for (let i = 0; i < busStops.length; i++) {
    sum1 += busStops[i][0]
    sum2+= busStops[i][1]
  }
  return sum1 - sum2
}


//NUMBER 69!!!

/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

*/

//MY SOLUTION
const binaryArrayToNumber = arr => {
  let xSum = -1
  let arrSum = 0
  for (let i = arr.length - 1; i >=0; i--) {
    xSum = xSum + 1
    arr[i] = arr[i] * (2**xSum)
    arrSum = arrSum + arr[i]
  }
  return arrSum
};


//NUMBER 68!!!

/*
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.

*/

//MY SOLUTION
function switchItUp(number){
  //Write your own Code!
    switch(true) {
        case number === 0:
        return 'Zero'
        break;
        
        case number === 1:
        return 'One'
        break;
        
        case number === 2:
        return 'Two'
        break;
        
        case number === 3:
        return 'Three'
        break;
        
        case number === 4:
        return 'Four'
        break;
        
        case number === 5:
        return 'Five'
        break;
        
        case number === 6:
        return 'Six'
        break;
        
        case number === 7:
        return 'Seven'
        break;
        
        case number === 8:
        return 'Eight'
        break;
        
        case number === 9:
        return 'Nine'
        break;
    }
  }

//NUMBER 67!!!

/*
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, 
for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would 
be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g.
 aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a 
string representing a rational whose numerator is the number of errors and the denominator the length of the control string. 
Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"

*/

//MY SOLUTION
function printerError(s) {
  //make an array of letters a - m
 //iterate through the string
 //if anny letter of the string is included in the array of letters, add 1 to sum
 //return sum over the length of the string
 //if no error , return 0 over the length of the string
 let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
 let newS = s.split('');
 let sum = 0;
 newS.forEach((letter) => {
   if (arr.includes(letter)) {
     // Do nothing
   } else {
     sum += 1;
   }
 });
 return `${sum}/${newS.length}`;
}


//NUMBER 66!!!

/*
Recursion
We’ve seen that we can use % (the remainder operator) to test whether a number is 
even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a 
positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function 
should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

//MY SOLUTION
function isEven(n) {
  if (n == 0) {
      return true
  }
  else if(n == 1) {
      return false
  }
  else if (n < 0) {
      return isEven(-n)
  }
  else {
      return isEven(n - 2)
  }
}


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
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
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
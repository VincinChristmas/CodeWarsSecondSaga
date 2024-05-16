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
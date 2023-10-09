
// function palindromeWord(word){
//   return word.split("").reverse().join("")
   
// }

function isPalindrome(word) {
  // Write your algorithm here
  //  const reversedWord = palindromeWord()

  //  return word === reversedWord

  for(let startIndex = 0; startIndex < word.length/2; startIndex ++){
    const endIndex = word.length - 1 - startIndex;
    if(word[startIndex] !== word[endIndex]){
      return false;
    }

  }
  return true;
}
/* 
  Add your pseudocode here
  (noon === noon) // true
  (boy === yob) // false

  return output true if the input is the spelled and pronounced the same backwards 

  if(noon){
    return true; 
  }
  else{
    return false;
  }
 
*/

/*
  Add written explanation of your solution here
  The function isPalindrome recieves only one arguemnt in string form as input.
   If its output is spellted the same backwards as it is forward. 
   That means the first letter is the same as the last, the second letter is the same as the second last
   and so on till the middle letter is reached. 

   to do that, we iterate the word from the beginning of the string, comparing the letters, till the end. 
   to calculate the output, subtract 1 and the length of the starting of the word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("noon"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("boy"));
}

module.exports = isPalindrome;

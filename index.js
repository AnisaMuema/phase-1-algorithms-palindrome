
function isPalindrome(mom) {
  // Write your algorithm here
  if(mom){
    return mom;
  }
  else{
    return robot
  }
}
/* 
  Add your pseudocode here
  
  Initalize mom as an arguement in "isPalindrome" function
  Add noon as the condition in the IF statement
  return mom if true
  else return robot if false
*/

/*
  Add written explanation of your solution here
The passed arguement as string "mom" in the function "isPalindrome" is used 
as the condition in the if statement. 
Meaning, if the conditions are met then the output should me mom.
Else output will be robot

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

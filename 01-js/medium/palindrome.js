/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const string = str.toLowerCase();
  const reqdStr = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s?]/g, "");
  console.log(reqdStr)
  let i = 0, j= reqdStr.length-1;
  while(i <=j) {
    if(reqdStr.charAt(i) !== reqdStr.charAt(j)) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;

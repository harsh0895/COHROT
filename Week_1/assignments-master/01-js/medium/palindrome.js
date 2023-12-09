/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // let i = 0;
  // let j = str.length-1;

  // str.toLowerCase();
  // while( i<j ){
  //   if( str.charAt(i) != str.charAt(j) ){
  //     return false;
  //   }
  //   if( str.charAt(i)==' '){
  //     i++;
  //   }
  //   if( str.charAt(j)==' '){
  //     j--;
  //   }
  //   i++;
  //   j--;
  // }

  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Reverse the string
  const reversedStr = cleanStr.split('').reverse().join('');
  
  // Compare the original and reversed strings
  let ans = false;
  if( cleanStr === reversedStr ){
    ans = true;
  }
  return ans;
  // return true;
}

module.exports = isPalindrome;

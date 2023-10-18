function isPalindrome(string) {
  let j = string.length-1 
  for(let i=0; i<String.length/2; i++){ 
      if(string[i]!=string[j]){ 
          return false; 
      } 
      j--; 
  } 
  return true; 
} 


//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false
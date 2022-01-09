/*Palindrome Number*/
/*
Given an integer x, return true if x is palindrome integer.
Constraints: -231 <= x <= 231 - 1
Follow up: Could you solve it without converting the integer to a string?
*/

/*****Thought process for solving*****/
/*
    1)Reverse input
    1.1)put input into an array
    1.2)reverse array
    1.3)return array as string or integer
    2)assign input to variable
    3)check if reversed input is same as original
    */

function isPalindromeNum(integer) {
  let reversed = integer.toString().split("").reverse().join("");
  /*
    - integer.toString() #take input and turn it into a string
    -.split('')          #takes string and places each character into an array
    - .reverse()         #reverses the array in place
    - .join('')          #joins array values together and returns as string
    */
  if (integer == reversed) {
    /*Compare reversed value to original*/
    return true;
  } else {
    return false;
  }
}
/**************************************************************/

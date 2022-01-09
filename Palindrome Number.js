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
/*No strings version */
//Uses slightly less memory, but considerably slower
/*****Thought process for solving*****/
/*
  1)Divide integer to get individual numbers
  2)create a copy of array
  3)reverse copied array
  4)compare array and reversed array
   4.1)Loop through both arrays
  */

function splitNum(number) {
  /*-loop through number
     -take the remainder of integer divided by a number (should give either first or last digit) and put it into an array
     -when modulo= 0, end loop */
  let numArr = []; //initialize an empty array
  let numberCopy = number; //make a copy of original input
  while (numberCopy / 10 !== 0) {
    //Check that number is not 0
    numArr.push(numberCopy % 10); //Take remainder of number divided by 10 and put into array
    numberCopy = Math.floor(numberCopy / 10); //divide number by 10 and set it equal to the integer rounded down
  }
  /*array returned from loop is in reverse order */
  return numArr.reverse(); //return array in correct order
}

function isPalindromeNumNoString(integer) {
  if (integer < 0) {
    return false;
  } else {
    let integerArr = splitNum(integer);
    let reversedArr = integerArr.slice().reverse(); //Copy and reverse integerArr
    let falseFound = 0; //variable created to help compare array values
    integerArr.forEach((value, a) => {
      //for each value of integerArr and iterator a
      if (value !== reversedArr[a]) {
        //compare value of integerArr and reversedArr at 'a' position
        falseFound++; //if values aren't equal, add one to counter
        return;
      }
    });
    if (falseFound) {
      return false;
    } else {
      return true;
    }
  }
}

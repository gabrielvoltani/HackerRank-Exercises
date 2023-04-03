// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with  places after the decimal.
// Note: This challenge introduces precision problems.
// The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

function plusMinus(arr) {
  const totalNumbers = arr.length;
  let positiveNumbers = 0;
  let negativeNumbers = 0;
  let neutralNumbers = 0;
  
  function checkNumber(n) {
      if (n === 0) {
          neutralNumbers ++
      } else if ( n < 0 ) {
          negativeNumbers ++
      } else if ( n > 0 ) {
          positiveNumbers ++
      };
  }
  
  arr.forEach((n) => checkNumber(n));
  
  console.log((positiveNumbers/totalNumbers).toFixed(6));
  console.log((negativeNumbers/totalNumbers).toFixed(6));
  console.log((neutralNumbers/totalNumbers).toFixed(6)); 
}

const numbers = [1, 3, -1, -6, -8, -8, 0]

plusMinus(numbers);

// My comments:
// With this exercise i was able to remember how to use "toFixed()" to return a decimal value
// Besides that, i was able to use HOF's, such as forEach
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {

  const highArray = [...arr];
  const lowArray = [...arr];
  
  const highestNum = Math.max(...arr);
  const lowestNum = Math.min(...arr);
  
  const indexOfHigh = arr.indexOf(highestNum)
  const indexOfLow = arr.indexOf(lowestNum)
  
  lowArray.splice(indexOfHigh, 1);
  highArray.splice(indexOfLow, 1);
  
  
  const lowSum = lowArray.reduce((acc, curr) => acc + curr, 0);
  const highSum = highArray.reduce((acc, curr) => acc + curr, 0);
  
  
  console.log(lowSum, highSum);
  
  }

const numbers = [1, 7, 10, 13, 8]

miniMaxSum(numbers);

// My comments:
// With this exercise i was able to remember how to use "Math.max" and "Math.min" to get the highest and lowest number on the array.
// Besides that, i was able to use HOF's, such as reduce
// Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger(a) {
  for (let i = 0; i < a.length; i++) {
      if (a.indexOf(a[i]) === a.lastIndexOf(a[i])) {
          return a[i];
      }
  };
}

const array = [1, 1, 6, 6, 8, 8, 18];

console.log(lonelyinteger(array));

// My notes:
// With this problem, i was able to remember the usage of "lastIndexOf" as a way to compare the number in the array
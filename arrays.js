// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result
function myFunction(arr) {
  return arr.sort();
}
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
function myFunction(a) {
  return a.slice(3);
}
// Write a function that takes an array (a) as argument
// Return the number of elements in a
function myFunction(a) {
  return a.length;
}
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
function myFunction(a, n) {
  return a.slice(a.length - n, a.length);
}
// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers
function myFunction(a) {
  return a.reduce((sum, an) => {
    return (sum += an);
  });
}
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
function myFunction(a, n) {
  return a[n - 1];
}
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
function myFunction(a) {
  return a.filter((n) => {
    return n < 0;
  }).length;
}
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
function myFunction(arr) {
  return (
    arr.reduce((sum, n) => {
      return (sum += n);
    }) / arr.length
  );
}
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
function myFunction(arr) {
  return arr.sort((a, b) => b - a);
}
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum
function myFunction(a, b) {
  return a.filter((n) => n > b).reduce((sum, n) => (sum += n));
}
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
function myFunction(a) {
  return a.slice(0, 3);
}
// Write a function that takes an array of strings as argument
// Return the longest string
function myFunction(arr) {
  return arr.sort((a, b) => b.length - a.length)[0];
}
// Write a function that takes an array (a) and a value (b) as argument
// The function should remove all elements equal to 'b' from the array
// Return the filtered array
function myFunction(a, b) {
  return a.filter((n) => n !== b);
}
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of 'a'
// Return the resulting array
function myFunction(a) {
  return a.slice(a.length - 3, a.length);
}
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
function myFunction(...arrays) {
  return [].concat(...arrays);
}
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array
function myFunction(arr, num) {
  return num < 6 ? [0].concat(...arr) : [num].concat(...arr);
}
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max
function myFunction(min, max) {
  let arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }

  return arr;
}
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
function myFunction(a, b) {
  return [...new Set([...a, ...b])].sort((a, b) => a - b);
}
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
function myFunction(a, b) {
  return [...new Set([...a, ...b])].sort((a, b) => a - b);
}
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
function myFunction(arr) {
  return arr.every((n) => n === arr[0]);
}
//////////
function myFunction(arr) {
  return new Set(arr).size === 1;
}
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

function myFunction(arr) {
  return arr.reduce((acc, cur) => {
    const firstLetter = cur.toLowerCase().charAt(0);
    return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
  }, {});
 }

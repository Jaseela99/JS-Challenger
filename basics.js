// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
function myFunction(a, b) {
  return a + b;
}
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
function myFunction(a, b) {
  return a === b;
}
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
function myFunction(str) {
  return str.substr(str.length - 3, str.length);
}
// Write a function that takes a value as argument
// Return the type of the value
function myFunction(a) {
  return typeof a;
}
// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function myFunction(a, n) {
  return a.charAat(n - 1);
}
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
function myFunction(a) {
  return a.slice(0, a.length - 3);
}
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
function myFunction(a) {
  return a.substr(0, a.length / 2);
}
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
function myFunction(a, b) {
  return a < b ? a / b : a * b;
}
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
function myFunction(a) {
  return a.slice(3, a.length);
}
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
function myFunction(a) {
  return a.slice(0, 3);
}
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
function myFunction(a) {
  return a === Math.floor(a);
}
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
function myFunction(a, b) {
  return a.includes(b) ? b.concat(a) : a.concat(b);
}
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
function myFunction(a) {
  return a % 2 === 0;
}
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting
function myFunction(a) {
  return a
    .toString()
    .split("")
    .map((n) => parseInt(n));
}
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function myFunction(a, b) {
  return b.split("").filter((x) => x === a).length;
}
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
function myFunction(a) {
  return Number(a.toFixed(2));
}
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
function myFunction(a, b) {
  return (b / 100) * a;
}
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y
function myFunction(x, y) {
  while (x % y !== 0) {
    x++;
  }
  return x;
}
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
function myFunction(str) {
  let arr = [...str];
  let correct = arr.map((e) => String.fromCharCode(e.charCodeAt() + 1)); //every e in arr is first converted in to Unicode its is added by 1
  return correct.join(""); //String.fromCharCode()converts unicode to string and it is mapped in arr and finally returned by join
}
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc
//myFunction('java', 'tpi%rcs') Expected:'Javascript'
function myFunction(a, b) {
  let arr = a.concat(b.split("").reverse().join("")).replace("%", "");
  return arr[0].toUpperCase() + arr.slice(1);
}
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order
function myFunction(a, b, c, d, e, f) {
  return (((a + b - c) * d) / e) ** f;
}
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
function myFunction(a, b) {
  let resultStr = "";
  let index = 0;
  for (let i = a.length - 1; i > -1; i--) {
    index++;
    resultStr = a[i] + resultStr;
    if (index % 3 === 0) {
      resultStr = b + resultStr;
    }
  }
  return resultStr;
}
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number
function myFunction(a) {
  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };
  while (!isPrime(a)) a++;
  return a;
}

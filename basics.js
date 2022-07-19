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
function
myFunction
(
a
)
{

return Number(a.toFixed(2))
}
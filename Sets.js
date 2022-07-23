// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result
function myFunction(set, val) {
  set.delete(val);
  return set;
}
// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array
function myFunction(set) {
  return [...set];
}
// Write a function that takes two sets (a and b) as arguments
// Get the intersection of the sets
// In other words, return a set containing all elements that are both in a as well as b
function myFunction(a, b) {
  return new Set([...a].filter((n) => b.has(n)));
}
// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code
function myFunction(a, b) {
  const result = new Set(a);
  b.forEach((el) => result.add(el));
  return result;
}
// Write a function that takes a Set and an array as arguments
// If not already existing, add each element in the array to the Set
// Return the modified Set
function myFunction(set, arr) {
  return new Set([...set, ...arr]);
}
// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result
function myFunction(a, b, c) {
  const arr = [a, b, c];
  return new Set(arr);
}

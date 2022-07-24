// Sounds easy, but you need to know the trick
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise
function myFunction(a, b) {
  return a.getTime() === b.getTime();
}
// Write a function that takes two date instances as argument
// It should return true if the difference between the dates is less than or equal to 1 hour
// It should return false otherwise
function myFunction(a, b) {
  return Math.abs(a - b) / 1000 / 60 <= 60;
}
// This is a more difficult challenge
// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds
function myFunction(a, b) {
  const hrs = Math.abs(a.getHours() - b.getHours());
  const min = Math.abs(a.getMinutes() - b.getMinutes());
  const sec = Math.abs(a.getSeconds() - b.getSeconds());
  return { hrs, min, sec };
}
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
function myFunction(a, b) {
  return Math.abs(a - b) / (24 * 60 * 60 * 1000);
}
// Write a function that takes two date instances (a and b) as arguments
// It should return true if a is earlier than b
// It should return false otherwise
function myFunction(a, b) {
  return a < b;
}
// Write a function that takes as argument a date instance (a) and a number (b)
// It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC
function myFunction(a, b) {
  let date = a.setDate(a.getDate() + b);
  return date;
}
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise
function myFunction(a, b) {
  return a.getTime() === b.getTime();
}
// Write a function that takes a Date instance as argument
// It should return the next nearest quarter hour in minutes
// For example, if the given date has the time 10:01 the function should return 15
function myFunction(date) {
  const min = date.getMinutes();
  for (let i = 15; i <= 60; i += 15) {
    if (i - min > 0 && min < 45) return i;
    else if (min > 45) return 0;
  }
}

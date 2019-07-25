// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6]; 
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
numbersnumbers.sort((a, b) => b - a); // [101, 18, 12, 11, 9, 7, 6, 5, 4, 3, 1]
console.log(number[0]); // 101

// Find longest string in string
var longestWord = " ";
for (i = 0; i < strings.length; i++) {
  if (strings[i].length > longestWord.length ) {
    longestWord = strings[i];
  }
}
return longestWord; // "collection"

// Find all the even numbers
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
numbers.filter(number => number % 2 == 0);

// Find all the odd numbers
numbers.filter(number => !(number % 2 == 0)); 

// Find all the words that contain 'is' use string method 'includes'
strings.filter(string => string.includes("is")); // ["this", "is"]

// Find all the words that contain 'is' use string method 'indexOf'
strings.filter(string => string.indexOf("is") >= 0); // ["this", "is"]

// Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(number =>{
  return (number % 3 === 0);
}); // False

//  Sort Array from smallest to largest
numbers.sort((a, b) => a - b);

// Remove the last word in strings
strings.slice(-1)
console.log(strings);

// Add a new word in the array
numbers.pop();
console.log(numbers); // (7) [1, 12, 4, 18, 9, 7, 11, 3, 101, 5]

// Remove the first word in the array
numbers.shift();
console.log(numbers);

// Place a new word at the start of the array use (unshift)
strings.unshift("First Word");
console.log(strings);

// Make a subset of numbers array [18,9,7,11]
numbers.slice(3, 7);

// Make a subset of strings array ['a','collection']
strings.slice(2,3);

// Replace 12 & 18 with 1221 and 1881

// Replace words with string in strings array
strings.splice(5, 1, "string");
console.log(strings); // ["this", "is", "a", "collection", "of", "string"]

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
customers.filter(item =>{
  return item.firstname.indexOf("J") == 0}) 

// 0: {firstname: "Joe", lastname: "Blogs"}
// 1: {firstname: "John", lastname: "Smith"}
// 2: {firstname: "Jack", lastname: "White"}

// Create new array with firstname and lastname
customers.map(item => {
  return { name : item.firstname + " " + item.lastname}});

// 0: {name: "Joe Blogs"}
// 1: {name: "John Smith"}
// 2: {name: "Dave Jones"}
// 3: {name: "Jack White"}

// Sort the array created above alphabetically
function sortByName(item1, item2) {
  if(item1.name < item2.name){
      return - 1;
  } else if (item1.name > item2.name){
      return 1;
  } else {
      return ;
  }
}
customers.sort(sortByName);

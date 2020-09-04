// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js
// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

// Check the current temperature vs boiling point
const boilingPoint = (number) => {
  // is number below boiling point
  if (number < 212) {
    return `${number} is below boiling point`
  } else if (number > 212) {
    // is number above boiling point
    return `${number} is above boiling point`
  } else {
    // is number at boiling point
    return `${number} is at boiling point`
  }
}

console.log(boilingPoint(temp1));
console.log(boilingPoint(temp2));
console.log(boilingPoint(temp3));


// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

// multiply each element of an input array
const multiplyBy5 = (array) => {
  let newArray = [];
  // loop through the array
  for (let i = 0; i < 5; i++) {
    // multiply each element by 5 and add to new array
    newArray[i] = array[i] * 5;
  }
  return newArray;
}

console.log(multiplyBy5(myNumbers1));


// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

// function that takes an array parameter and multiplies each element by 5
const multBy5 = (array) => {
  // go thru entire array and mult each element by 5
  return array.map(value => value * 5)
}

console.log(multBy5(myNumbers2));


// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

// take a string input and remove all the stringWithVowels
const removeVowels = (string) => {
  // create an array of letters
  let strArray = string.split('');
  // find the vowels and remove them
  return strArray.filter( value => {
    return value.toLowerCase() !== 'a' && value.toLowerCase() !== 'e' && value.toLowerCase() !== 'i' && value.toLowerCase() !== 'o' && value.toLowerCase() !== 'u';
  }).join(''); // reassemble the string before passing it back
}

console.log(removeVowels(stringWithVowels1));
console.log(removeVowels(stringWithVowels2));


// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string"

var notAString1 = true
var notAString2 = 42

// take any variable input and check the data type before processing
// the vowel removal functionality
const removeVowels2 = (string) => {
  // check the data type first
  if (typeof string ===  "string") {
    // create an array of letters
    let strArray = string.split('');
    // find the vowels and remove them
    return strArray.filter( value => {
      return value.toLowerCase() !== 'a' && value.toLowerCase() !== 'e' && value.toLowerCase() !== 'i' && value.toLowerCase() !== 'o' && value.toLowerCase() !== 'u';
    }).join(''); // reassemble the string before passing it back
  } else {
    // if the input was not a string
    return `${string} is not a string`
  }

}

console.log(removeVowels2(notAString1));
console.log(removeVowels2(notAString2));


// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [ { name: "Itchy", animal: "mouse" }, { name: "Stimpy", animal: "cat" }, { name: "Daffy", animal: "duck" }, { name: "Scratchy", animal: "cat" }, { name: "Ren", animal: "dog" }, { name: "Felix", animal: "cat" }]

// function to take an array input and return the "cat" elements
const findTheCats = (array) => {
  // go thru the array and find the cats only
  return array.filter(value => {
    return value.animal === "cat";
  })
}

console.log(findTheCats(toonimals));

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

// function to take an array input and return the "cat" elements
const findTheNonCats = (array) => {
  // go thru the array and find the NON-cats only
  return array.filter(value => {
    return value.animal === "mouse" || value.animal === "duck" || value.animal === "dog";
  })
}

// take in an array object and find the name element
const findNames = (array) => {
  return array.map(value => {
    return value.name;
  }).join(' '); // convert back to string here
}

console.log(findNames(findTheNonCats(toonimals)));

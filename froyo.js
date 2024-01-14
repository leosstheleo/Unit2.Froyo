// 1. Ask the user to enter a list of comma-separated froyo flavors using a prompt.
// 2. Split the entered string into an array of flavors.
// 3. Create an object to store the count of each flavor.
// 4. Iterate through the array and update the flavor count in the object.
// 5. Display the flavor count in a table in the browser console.

// Step 1: Ask the user to enter froyo flavors
let userInput = prompt("Enter your froyo flavors:");

// Step 2: Split the entered string into an array of flavors
let flavorsArray = userInput.split(',');

// Step 3: Create an object to store the count of each flavor
let flavorCount = {};

// Step 4: Iterate through the array and update the flavor count
for (let i = 0; i < flavorsArray.length; i++) {
  let flavor = flavorsArray[i].trim(); // Remove extra spaces
  flavorCount[flavor] = (flavorCount[flavor] || 0) + 1; // Increment count
}

// Step 5: Display the flavor count in a table in the browser console
console.table(flavorCount);
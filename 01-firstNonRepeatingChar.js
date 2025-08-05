// Given a string, find the first character that does not repeat anywhere in the string. Return None if all characters repeat.



// Input: "Hello"

// Output: "H"
// Input: "Swiss"
// Output: "w"
function firstNonRepeatingChar(string) {
    const charCount = {};//store character counts

    // Count occurrences
    for (let char of string) {
        if (charCount[char]) {
            charCount[char]++;//if character appears more than once there will be an increament of the charCount
        } else {
            charCount[char] = 1;
        }
    }

    // Find the first unique character
    for (let char of string) {//to loop through the given string
        if (charCount[char] === 1) {
            return char;
        }
    }

    // No unique characters found
    return null;
}

// Test cases
console.log(firstNonRepeatingChar("Hello")); // H
console.log(firstNonRepeatingChar("Swiss")); // w
console.log(firstNonRepeatingChar("aabb"));  // null

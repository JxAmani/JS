// Given a list containing n distinct numbers from 0 to n, find the missing number.



// Input: [3, 0, 1]

// Output: 2
// NOTE: No number limit
function findMissingNumber(numbers) {
    const n = numbers.length; // array length

    // Loop through numbers from 0 to n
    for (let i = 0; i <= n; i++) {
        let found = false; // flag to check if number exists

        // Loop through the array to see if `i` exists
        for (let num of numbers) {
            if (num === i) {
                found = true;
                break; 
            }
        }

        // If number `i` is not found in the array, that's the missing number
        if (!found) {
            return i;
        }
    }

    // If no missing number found
    return null;
}

console.log(findMissingNumber([3, 0, 1])); // 2
console.log(findMissingNumber([0, 1]));    // 2
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8

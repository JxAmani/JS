// Given a string s, find the length of the longest substring without repeating characters.
// Example
// Input: s = "bbbbb"
// Output: 1

// Input: s = "pwwkew"
// Output: 3


function lengthOfLongestSubstring(string) {
  // This will keep track of the characters we've seen in the current substring
  const seenChars = new Set();

  //start and end to represent the sliding window
  let start = 0;
  let end = 0;

  // store the longest length found
  let maxLength = 0;

  // Loop through the string
  while (end < string.length) {
    const currentChar = string[end];

    if (!seenChars.has(currentChar)) {
      seenChars.add(currentChar); // Add to the set
      end++; // Move the end forward
      // Update maxLength if needed
      const currentLength = end - start;
      if (currentLength > maxLength) {
        maxLength = currentLength;
      }
    } else {
      // If character is already in the set, remove the leftmost character
      seenChars.delete(string[start]);
      start++; // Move the start forward
    }
  }

  return maxLength;
}
console.log(lengthOfLongestSubstring("bbbbb"));    //  1
console.log(lengthOfLongestSubstring("pwwkew"));   // 3


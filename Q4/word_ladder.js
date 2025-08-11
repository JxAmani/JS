// Given two words, beginWord and endWord, and a dictionary of words wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, such that:


// Only one letter can be changed at a time.

// Each transformed word must exist in the word list.


// Return 0 if no such sequence exists.


// All words have the same length and consist of lowercase letters only.


// beginWord is not considered a transformed word and may not be in wordList.
// Example:
// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log","cog"]

// Output: 5

function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) {
        return 0;
    }

    const queue = [];
    queue.push([beginWord, 1]);

    while (queue.length > 0) {
        const currentPair = queue.shift();
        const currentWord = currentPair[0];
        const currentLength = currentPair[1];

        if (currentWord === endWord) {
            return currentLength;
        }

        for (let i = 0; i < currentWord.length; i++) {
            for (let charCode = 97; charCode <= 122; charCode++) {
                const letter = String.fromCharCode(charCode);
                const newWord =
                    currentWord.slice(0, i) + letter + currentWord.slice(i + 1);

                if (wordSet.has(newWord)) {
                    wordSet.delete(newWord);
                    queue.push([newWord, currentLength + 1]);
                }
            }
        }
    }

    return 0;
}

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
// Output: 5
// Sequence: hit → hot → dot → dog → cog


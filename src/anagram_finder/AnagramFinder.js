const getKey = word => word.toLowerCase().split('').sort().join('');

// One more way to generate a key: replace every non alphabetical character with an empty string.
// This leaves us with only letters and numbers.
// Therefore, acer and race` words will be anagrams to each other.
// 
// const getKey = word => word.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');

export default async function solve(e) {
    const wordsString = e.target.result;

    // Handle empty string
    if (wordsString.length == 0) {
        return [];
    }
    
    // Each word is placed on a new line
    // The same perfomance as if we parce it char by char
    const words = wordsString.split('\n');

    const foundAnagrams = new Map();

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        const key = getKey(word);

        // If this is the first anagram with this key
        // we need to initialize array for it
        if (!foundAnagrams.has(key)) {
            foundAnagrams.set(key, []);
        }

        foundAnagrams.get(key).push(word);
    }

    let longestList = [];

    for (const key of foundAnagrams.keys()) {
        const currentList = foundAnagrams.get(key);

        if (longestList.length > currentList.length) continue;

        if (longestList.length < currentList.length || key.length > longestList[0].length) {
            longestList = currentList;
        }
    }

    return longestList;   
};

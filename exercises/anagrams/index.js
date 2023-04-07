// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}
function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
module.exports = anagrams;

// BUILDING A OBJECT MAP TO SOLVE IT

// function anagrams(stringA, stringB) {
//   const aCleaned = charBuilder(stringA);
//   const bCleaned = charBuilder(stringB);

//   if (Object.keys(aCleaned).length !== Object.keys(bCleaned).length) {
//     return false;
//   }
//   for (let char in aCleaned) {
//     if (aCleaned[char] !== bCleaned[char]) {
//       return false;
//     }
//   }
//   return true;
// }
// function charBuilder(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

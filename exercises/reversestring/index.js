// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const arr = str.split('');
  return arr.reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

// FIRST SOLUTION USING THE 'REVERSE HELPER METHOD
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// SOLUTION 2 USING A FOR LOOP
// function reverse(str) {
//   reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

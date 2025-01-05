const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let string = n.toString();
  let result
  let temp
  for(let i = 0; i < n.toString().length; i++){
    if (!result) {
      result = string.split('')
      result.splice(i, 1)
      result = result.join('')
    } else {
      temp = string.split('')
      temp.splice(i, 1)
      temp = temp.join('')
      result = +result < +temp ? +temp : +result;
    }
  }
  return result;
}

module.exports = {
  deleteDigit
};

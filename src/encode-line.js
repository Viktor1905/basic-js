const { NotImplementedError } = require('../extensions/index.js');
const { c } = require("sinon/lib/sinon/spy-formatters");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 0;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if(str[i] === str[i+1]){
      counter += 1;
    } else if(str[i] !== str[i-1]) {
      counter = 0;
    } else {
      result += counter+str[i];
    }
  }
  return result.replace(/1/g, '')
}

module.exports = {
  encodeLine
};

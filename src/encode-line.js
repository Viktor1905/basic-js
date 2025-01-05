const { NotImplementedError } = require('../extensions/index.js');
const { c } = require("sinon/lib/sinon/spy-formatters.js");

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
      if(counter === 0){
        counter += 1
      }
      counter += 1;
    }  else {
      result += counter+str[i];
      counter = 0
    }
  }
  return result.replace(/1|0/g, '')
}

module.exports = {
  encodeLine
};

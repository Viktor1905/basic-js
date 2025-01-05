const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/* str, options */ ) {

  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let repeatTimes = options.repeatTimes;
  let separator = options.separator ? options.separator : '+';
  let result = str
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  if(repeatTimes === 1) {
    return str;
  }

  for (let i = 0; i < repeatTimes-1; i++) {
    if(addition){
      for (let i = 0; i < additionRepeatTimes; i++) {
        if(i+1 === additionRepeatTimes){
          result = result + addition
        } else {
          result = result + addition + additionSeparator
        }
      }
    }
    result = result + separator + str;
    if(i === repeatTimes-2){
      for (let i = 0; i < additionRepeatTimes; i++) {
        if(i+1 === additionRepeatTimes){
          result = result + addition
        } else {
          result = result + addition + additionSeparator
        }
      }
    }
  }

  return result
}

module.exports = {
  repeater
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members ) {
  let result;
  if(members instanceof Array){
    result = members.map(name => {
      if(typeof name === 'string'){
        return name.trim()[0].toUpperCase()
      }
    })
  } else{
    return false
  }

  return result.sort((a, b) => a > b ? 1 : -1).join('')
}

module.exports = {
  createDreamTeam
};

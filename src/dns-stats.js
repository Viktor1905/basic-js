const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {            let obj = new Map;
  domains.forEach(item => {
    let key = "." +item.split('.').reverse()[0];
    objAdd(key);
    if(item.split('.').length > 2){
      key =  "." + item.split('.').reverse()[0] + "." + item.split('.').reverse()[1];
      objAdd(key);
    }
    key = "." + item.split('.').reverse().join('.');
    objAdd(key);

    function objAdd (item) {
      if(obj.has(item)) {
        obj.set(item, obj.get(item)+1);
      } else {
        obj.set(item, 1);
      }
    }

  })
  return Object.fromEntries(obj)
}

module.exports = {
  getDNSStats
};

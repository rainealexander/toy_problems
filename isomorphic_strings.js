/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let patternOne = stringToPattern(s);
  let patternTwo = stringToPattern(t);
  for (let i = 0; i < s.length; i++) {
    if (patternOne[i] !== patternTwo[i]) {
      return false;
    }
  }
  return true;
};

/**
 * @param {string} str
 * @return {Array}
 */
var stringToPattern = function(str) {
  let result = [];
  let count = 0;
  let pattern = {};
  for (let i = 0; i < str.length; i++) {
    if(pattern[str[i]] === undefined) {
      pattern[str[i]] = count;
      count++;
      result.push(count);
    } else {
      result.push(pattern[str[i]]);
    }
  }
  return result;
};

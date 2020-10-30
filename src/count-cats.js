const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  return arr.length==0 ? 0 : arr.reduce((prev, cur)=> prev.concat(cur)).filter(el => /^(\x5E\x5E)$/.test(el)).length;
};

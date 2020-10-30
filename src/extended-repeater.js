const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(!options.separator) options.separator ='+';
  if(!options.additionSeparator) options.additionSeparator ='|';
  return Array(options.repeatTimes).fill(str + Array(options.additionRepeatTimes).fill(options.addition === null ? 'null' : options.addition).join(options.additionSeparator)).join(options.separator);
};
  
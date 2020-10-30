const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  if (members.filter(element => typeof(element)=="string").length == 0) return false;
  return members.filter(element => typeof(element)=="string").map(element => element.trim()).map(element => element[0]).map(element => element.toUpperCase()).sort().join('');
};

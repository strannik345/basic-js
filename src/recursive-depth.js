const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(){
    this.depth = 1;
  }
  calculateDepth(arr) {    
    for(let i=0;i<arr.length;i++){
      if(Array.isArray(arr[i])){
        this.depth++;
        this.calculateDepth(arr[i])
      }
    }
    return this.depth;
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};
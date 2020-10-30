const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw new Error;
  let copy = [...arr];
  let newArr=[];
  for(let i=0;i<copy.length;i++){
    switch(arr[i]){
      case '--discard-next':
        copy[i+1]=null;
        break;
      case '--discard-prev':
        if(i!=0) newArr.pop();
        break;
      case '--double-next':
        if(i!=copy.length-1) newArr.push(copy[i+1]);
        break;
      case '--double-prev':
        if(i!=0) newArr.push(copy[i-1]);
        break;
      default:
        newArr.push(copy[i]);
    }
  }
  return newArr.filter(el => el!=null);
};

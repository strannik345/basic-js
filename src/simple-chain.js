const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));
    return this;    
  },
  removeLink(position) {
    if(position < 0 || isNaN(position) || position >= this.chain.length) {
       this.chain=[];
       throw new Error;
    }
    for(let i=position-1;i<this.chain.length-1;i++)
    {
      this.chain[i]=this.chain[i+1];
    }
    this.chain.pop(); 
    return this;   
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let answer = this.chain.filter(el => el!=undefined).map(el=> '( '+ el + ' )').join('~~');
    this.length=0;
    this.chain=[];
    return answer;
  }
};

module.exports = chainMaker;

function findKeywords(text, keywords) {
    const foundKeywords = [];
    const lowercaseText = text.toLowerCase();
    const lowercaseKeywords = keywords.map(keyword => keyword.toLowerCase());

    lowercaseKeywords.forEach(keyword => {
      if(lowercaseText.includes(keyword)) {
        foundKeywords.push(keyword);
      }
    });
    return foundKeywords;
}
console.log(findKeywords('Люк, я твой отец!', ['отец']))

module.exports.findKeywords = findKeywords;

exports.even = function isEven(num){
  return num%2==0
}
exports.prime = function isPrime(num){
  if(num==1 && num==2 && num==5){
      return true
  }else if(num!=0){
      if(num%2!=0 && num%3!=0 && num%5!=0){
          return true
      }
  }
  return false
}




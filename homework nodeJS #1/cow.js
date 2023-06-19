const cowsay = require('cowsay');

function cowSpeak(text) {
  const cow = cowsay.say({
    text: text,
    e: "**",       
    T: "$$",       
    n: true,       
    W: 40,         
    r: true        
  });
  console.log(cow);
}


module.exports = cowSpeak;
const readline = require('readline');
const inp = readline.createInterface({
input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {

{
  s=userInput[0]
  console.log(s.split('').filter(i=>i !==' ').length)
}
  
});

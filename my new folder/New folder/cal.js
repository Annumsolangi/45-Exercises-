//let k=3;
//let n="";
//for(let a=1;a<=k;a++){
//for(let b=10;b>=a;b--){ 
//n+="i am a student";
//}
//n+= "\n";
//}
//console.log(n)
//concatenation 
//console.log('i am ali'+' i am   student of i.t course');
//console.log('2'+2);
var promt = require("prompt-sync")();
let n1 = parseInt(promt("please enter your first num: "));
let n2 = parseInt(promt("please enter your secound num :"));
let operator = promt("please enter your operator(+,-,',/) ");
if (operator == '+') {
    console.log("The Anwer is ".concat(n1, " ").concat(operator, " ").concat(n2, "=").concat(n1 + n2));
} else if (operator == '-') {
    console.log(" The Answer is ".concat(n1, " ").concat(operator, " ").concat(n2, "=").concat(n1 + n2));
} else if (operator == '*') {
    console.log("the answer is ".concat(n1, " ").concat(operator, " ").concat(n2, "=").concat(n1 + n2));
}
if (operator == '/') {
    console.log("the answer is ".concat(n1, " ").concat(operator, " ").concat(n2, "=").concat(n1 + n2));
} else {
    console.log("please select the correct operator");
}
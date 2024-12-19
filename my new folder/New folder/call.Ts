

let answer =await inquirer.prompt([
{
message:"select your opreator",
type: "list",
 name: "opreator",
 choices:["addition", "subtraction", "multiplication", " addition"],
 },
]), 
//conditional statment if else
if (answer.opreator==="addition"){
    console.log(answer.firstnumber+answer.secondnumber)
}
else if (answer.opreator==="subtraction"){
    console.log( answer.firstnumber-answer.secondnumber)
}
else if (answer.opreator==="multiplication"){
    console.log(answer.firstnumber*answer.secondnumber)
}
else(answer.opreator==="division"){
    console.log(answer.firstnumber/ answer.secondnumber)
}
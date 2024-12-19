const number1 = document.getElementById("num1")as HTMLInputElement
const number2 = document.getElementById("num2")as HTMLInputElement

const AddBtn = document.getElementById("Add")as HTMLButtonElement
const SubBtn = document.getElementById("Sub")as HTMLButtonElement
const MulBtn = document.getElementById("Mul")as HTMLButtonElement
const DivBtn = document.getElementById("Div")as HTMLButtonElement

const printResult = document.getElementById ("result") as HTMLOutputElement

function AddNumbers(){
    let a= parseFloat(number1.value);
    let b= parseFloat(number2.value);
    let result=a+b; 
    printResult.textContent=result.toString();
    
}
AddBtn.addEventListener("click", AddNumbers)

function SubNmubers(){
    let a= parseFloat( number1.value);
    let b= parseFloat( number2.value);
    let result =a-b;
    printResult. textContent=result.toString();

}
SubBtn.addEventListener("click", SubNmubers)



function MulNumbers(){
let a= parseFloat (number1.value)
let b= parseFloat(number2 .value)
let result =a*b;
printResult.textContent=result.toString();

}
MulBtn.addEventListener("click", MulNumbers)
        
function DivNumbers(){
let a= parseFloat (number1.value)
let b= parseFloat(number2 .value)
let result =a/b;
printResult.textContent=result.toString();

}
DivBtn.addEventListener("click", DivNumbers)
        
let userInput = prompt('Enter the number',0);
console.log(typeof userInput)
let numb = parseInt(userInput);
console.log(numb,typeof numb);
function fnEvenOdd(){
    if(numb % 2 == 0){
        console.log("Even number");
    }else{
        console.log("Odd number")
    }
}
fnEvenOdd();
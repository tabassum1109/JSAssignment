// Question 1 -->

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

//Question 2--->

let userInput1 = prompt("Enter OS name","Angular 9");
console.log(userInput1);
let splitVal =userInput1.split(' ');
console.log(`The OS name is ${splitVal[0]} and version is ${splitVal[1]}`)

//Question 3--->

let userInput2 = prompt('Enter the marks',0);
let parsedVal =parseInt(userInput2);

// using if condition
if(parsedVal>50){
    console.log(`Marks are ${parsedVal} and grade is A` )
}else{
    if(parsedVal<=50){
        console.log(`Marks are ${parsedVal} and grade is B` )
    }
}

//Using ternary operator
let terVal =   (parsedVal>50)?console.log(`Marks are ${parsedVal} and grade is A`):
            (parsedVal<=50)?console.log(`Marks are ${parsedVal} and grade is B`):console.log(`Marks are ${parsedVal} and grade is C`)


switch(parsedVal){
    case parsedVal>50: 
        console.log(`Marks are ${parsedVal} and grade is A`);
        break;
    case parsedVal<=50:
        console.log(`Marks are ${parsedVal} and grade is B`);
        break;
    default : 
        console.log(`Marks are ${parsedVal} and grade is C`);
}
           

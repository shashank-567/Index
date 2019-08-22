/*let calculator = ()=>{

}
*/

let add = (num1,num2)=>{
return num1+num2;
}

let substract = (num1,num2)=>{
return num1-num2;	
}

let multiply = (num1,num2)=>{
	return num1*num2;
}

let divide = (num1,num2)=>{
	return num1/num2;
}
let option=window.prompt("Enter a number:\n1 for addition\n2 for substraction\n3 for multiplication\n4 for division");
if(option<5 && option>0){
let num1=window.prompt("Enter first number");
let num2=window.prompt("Enter second number");

switch(option)
{
	case '1':
	alert(add(num1,num2));
	break;
	case '2':
	alert(substract(num1,num2));
	break;	
	case '3':
	alert(multiply(num1,num2));
	break;	
	case '4':
	alert(divide(num1,num2));
	break;	
	default:	
	alert("Invalid Input");
	
}
}

else{
	alert("Invalid Input");
}
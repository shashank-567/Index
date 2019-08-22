/*function multiply(x,y){
return(x*y)
}

var product = multiply(2,4)

alert(product)
*/


/*
var generateEmail = function(name,message){
	var emailmessage = 'Hi '+ name + '\n The message is:\n'+message
	return emailmessage
 }

 var Welcomemessage = generateEmail('Shashank','Welcome bro')

 alert(Welcomemessage)*/


var factorialNumber = window.prompt("Enter the number to find factorial:");
   var factorial = 1;
   for(i=1;i<=factorialNumber;i--){
       factorial=factorial*factorialNumber;
   }
alert(factorial);
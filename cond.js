var grade = window.prompt('Enter the grade obtained')
var result
/*
var cloths = window.prompt("Enter number of cloths purchased")

if(cloths>3){
alert("Promo code available")

}else if(cloths==3){
alert("Promo code available after 1 more purchase")

}else{
alert("Promo code not available")
}


cloths>3?alert("Promo code available"):alert("Promo code is not available")

*/


switch(grade)
{
	case 'A':
	result = "Distintion"
	break;
	case 'B':
	result = "First class"
	break;	
	case 'C':
	result = "Second class"
	break;	
	case 'D':
	result = "Fail"
	break;	
	default:	
	result = "Unknown"
	
}
alert(result)

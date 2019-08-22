var calculateAge = function(day, month, year) {
  // start your code here.
var today = new Date(Date.now());
var getAge = today.getFullYear()-year;

if (today.getMonth() < month || 
        today.getMonth() == month && today.getDate() < day) {
       getAge--;
    }
return getAge;
};




var age = calculateAge(28,12,1992);
alert(age)



// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

<<<<<<< HEAD
1-
var PartnerFirstName="wale"
var PartnerLastName= "abdaoui"
var myPartner= PartnerFirstName + PartnerLastName;
2-
function multiple3(num){
    if (num%3===0){
        return true;
    }return false;
}

3-
var ages=[13,14,13,15,16,17,19,13,16,15] 
function averageAges(ages){
   var total=0;
     for (i=0;i<ages.length;i++){
      total=(total+ages[i]/ages.length);
}
return total;
}
4-
function agePerSeconds(age){
    return 'your age is '+(age*(((365*24)+6))*60*60)+'seconds';
}
 
=======
// your code is here
<<<<<<< HEAD

<<<<<<< HEAD
//1
function name(firstName, lastName) {
	return firstName + ' ' + lastName;
}
//'Siwar'+' Hkimi';

//2
function multipleOrNot(x, y) {
	if (x % y === 0) {
		return x + " is a multiple of " + y + ".";
	}
	else {
		return x + " is not a multiple of " + y + ".";
	}
}
//13%3===1 different from 0 so 13 isn't a multiple of 3

//3
function average(arr) {
	var i = 0;
	var average = 0;
	while (i < arr.length) {
		average = average + arr[i]
		i++
	}
	return average / arr.length
}

//average=(13+14+13+15+16+17+19+13+16+15)/10;

//4
// function ageInSeconds(day,month,year){
// var ageYear=0;
// var ageMonth=0;
// var ageDay=0;
// ageYear=(2020-year)*365*24*60;
// var array=['January','February','March','April','May','June','July','August','Septembre','October','November','December']
// if(month==='January'||month==='March'||month==='May'||month==='July'||month==='Septembre'||month==='Novembre'){
// 	ageMonth=31*24*60;
// }	
// else if(month==='April'||month==='June'||month==='August'||month==='October'||month==='December'){
// 	ageMonth=30*24*60;
// }
// else {
// 	ageMonth=28*24*60;
// }
// 
// }
//age=26*365*24*60
=======

>>>>>>> c07720253c870302a2825e47eeb180a082689769
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
=======
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6

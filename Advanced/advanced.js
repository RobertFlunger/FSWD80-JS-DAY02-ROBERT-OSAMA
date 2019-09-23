/*Advanced Exercise 1*/

function minConversion(x) {
	var hours = Math.floor(x / 60);
	var mins = x % 60;

	var output = x + " minutes = " + hours + " hour(s) and " + mins + " minute(s). <br>";
	return(output);
	}

document.write(minConversion(340));

function yesterday(x) {

	var date1= new Date(x);

	date1.setDate(date1.getDate()-1);
	return(date1)

}
document.write(yesterday("Feb 23, 2017"));

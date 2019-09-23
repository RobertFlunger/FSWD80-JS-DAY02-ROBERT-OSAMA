/*Advanced Exercise 1*/

function minConversion(x) {
	var hours = Math.floor(x / 60);
	var mins = x % 60;

	var output = x + " minutes = " + hours + " hour(s) and " + mins + " minute(s). <br>";
	return(output);
	}

document.write(minConversion(340));


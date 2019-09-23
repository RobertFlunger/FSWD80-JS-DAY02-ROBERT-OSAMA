/*Intermediate Exercise 1*/

function capitalizeFirst(x) {
	var upper = x.charAt(0).toUpperCase() + x.substring(1);
	return(upper);
}

	document.write(capitalizeFirst("i am a web developer"));
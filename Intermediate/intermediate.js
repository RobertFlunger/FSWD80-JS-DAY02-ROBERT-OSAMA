/*Intermediate Exercise 1*/

function capitalizeFirst(x) {
	var upper = x.charAt(0).toUpperCase() + x.substring(1);
	return(upper);
}

	document.write(capitalizeFirst("i am a web developer") + "<br>");

	function grade ( a , b ,c ) {

		var sum= a+b+c;
		    average= sum /3;

		    stringgrade= " the sum is: " + sum + " <br>" + " the average is : "+ average ;
		    return(stringgrade);
	}
	document.write(grade( 3 , 4 ,5));
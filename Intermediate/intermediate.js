/*Intermediate Exercise 1*/


	function grade() {

		var a= prompt(" please inter a math grade");
		var	b= prompt("please inter a phisic grade");
		var	c= prompt("please inter english grade");
		var	sum= Number(a)+ Number(b) + Number(c);
		var average= sum /3;
		var stringgrade= " the sum is: " + sum + " <br>" + " the average is : "+ average ;
		    
		    return (stringgrade);

	}

	document.getElementById("note").innerHTML = grade();
	
	
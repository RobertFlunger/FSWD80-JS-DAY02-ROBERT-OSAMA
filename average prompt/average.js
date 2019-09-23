/*Intermediate Exercise 1*/


	function grade() {

		var a= prompt("please enter a math grade");
		var	b= prompt("please enter a physics grade");
		var	c= prompt("please enter an english grade");
		var	sum= Number(a)+ Number(b) + Number(c);
		var average= sum /3;
		var stringgrade= " the sum is: " + sum + " <br>" + " the average is : "+ average ;
		    
		    return (stringgrade);

	}

	document.getElementById("note").innerHTML = grade();
	
	
function crystalGazer(a,b,c,d) {
	var sentence = "You will be a " + a + " in " + b + " and married to " + c + " with " + d +"." +"<br>";
	console.log(sentence);
	return sentence;
}

document.write(crystalGazer("dentist", "California", "a wonderful woman", 3))

function ageCalculator(x,y) {
	var age = y-x;
	var theAge = " you are either " + age + " or " + --age + "<br>";
	console.log(age);
	
	return theAge;
}
	document.write(ageCalculator(1990, 2019))

function ageCalculator2(x) {
	var d = new Date();
	var year = d.getFullYear()
	
	var age = year - x;
	
	var theAge = " you are either " + age + " or " + --age + "<br>";
	console.log(age);
	
	return theAge;
}
	document.write(ageCalculator2(1990))

function degConversion(x) {

	var radians = x * (Math.PI / 180)
	var message = x + " degrees equal " + radians + "<br>"
	console.log(radians)
	return message
}

	document.write(degConversion(90))

/*x = width, y = height, z = depth*/
function box(x, y, z) {
	var area = x * y;
	var volume = x * y * z;

	var result = "The area of the box is: " + area + "<br> The volume of the box is: " + volume + "<br>";
	return result
}	

	document.write(box(10,5,2))

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
	
	var theAge = " you are either " + age + " or " + --age;
	console.log(age);
	
	return theAge;
}
	document.write(ageCalculator2(1990))
	document.write( Math.PI);

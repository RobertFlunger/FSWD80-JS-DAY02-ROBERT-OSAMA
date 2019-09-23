function crystalGazer(a,b,c,d) {
	var sentence = "You will be a " + a + " in " + b + " and married to " + c + " with " + d +".";
	console.log(sentence);
	return sentence;
}

document.write(crystalGazer("dentist", "California", "a wonderful woman", 3))

function ageCalculator(x,y) {
	var age = y-x;
	var theAge = " you are either " + age + " or " + --age;
	console.log(age);
	
	return theAge;
}
	document.write(ageCalculator(1990, 2018))


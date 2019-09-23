var array = [5, 7, 9, 2, 3, 8, 1, 4, 6];

function BubbleSort(n) {
	/*random number generator*/
	var array = new Array();
	for(var i=0;i<n;i++) {
		array[i] = Math.round(Math.random()*9);
		}
	console.log(array)
	/*Bubble Sort*/
	for(h=0;h<n;h++) {
		for(j=0;j<n-h-1;j++){
			if (array[j]>array[j+1]) {
				var x = array[j]; 
				var y = array[j+1];
				array[j] = y;
				array[j+1] = x;
				console.log(array)
					}
				}
			}
	return(array)
}

document.write(BubbleSort(10))
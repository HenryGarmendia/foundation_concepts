/*
	Multiples of Six
	Print multiples of 6 up to 60,000, using a WHILE.
*/

let multiSix = function () {
	// body...
	start = 0;
	while (start <= 60) {
		// statement
		if (start % 6 === 0) {
			console.log('These are the multiples of six :', start);
		}
		start++;
	}
}

multiSix();
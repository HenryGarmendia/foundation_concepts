/*
	Whoa, That Sucker’s Huge…
	Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
*/

let suckerHuge = function (start, stop) {
	// body... 
	let sum = 0;
	for (let i = start; i <= stop; i++) {
		if (i % 2 != 0) {
			sum += i;
		}
		console.log(sum);
	}
}

suckerHuge(-300000, 300000);

/*
	Countdown By Fours
	Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop
*/

let countDownFours = function (starting) {
	// body...
	while (starting > 0) {
		// statement
		if (starting == 0) {
			continue;
		}
		console.log(starting)
		starting -= 4;
	}
}

countDownFours(2016);

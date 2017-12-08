/*
	Flexible Countdown
	Based from earlier “Countdown By Fours”, given (lowNum, highNum, mult), 
	print the numbers in multiples of mult from highNum down to lowNum, using a FOR loop.

	Example: For (2,9,3), print 9 6 3 (on successive lines).
*/

let flexibleCount = function (lowNum, highNum, mult) {
	// body...
	for (let i = highNum; i >= lowNum; i--) {
		if (i % mult == 0) {
			console.log(i)
		}
	}
}

flexibleCount(2,9,3);


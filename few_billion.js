/*
	For a Few Billion
	There is an old tale about a king who offered a servant $10,000 as a reward. The servant instead asked that 
	for 30 days he be given an amount that would double, starting with a penny. (1 penny for the first day, 2 
	for the second, 4 for the third, then 8, 16, 32 pennies, and so on).

	Use for loops to answer the following:

	How much was the reward after 30 days?
	remember, a penny isn't 1, but 0.01

	Bonus (Only If You Have Time):

	How many days would it take the servant to make $10,000?
	How about 1 billion?
	In JavaScript, there is a value Infinity, how many days until the servant has infinite money?
*/

let in30Days = () => {

let money 		= 0.01;
let days 		= 1;
let total 		= 0;
let infinite 	= true;

	// How much in 30 days?
	for(days; infinite; days++) {
		total += money;
		money *= 2;

		if (days === 30) {
			console.log('It took the servant ' + days + ' days to make ' + '$' + total);
			infinite = false;
		}
	}
}

let tenThousand = () => {

let money 		= 0.01;
let days 		= 1;
let total 		= 0;
let infinite 	= true;

	// Reach for $10000
	while (infinite) {
		days++;
		total += money;
		money *= 2;
		if (money >= 10000) {
			console.log('It took the servant ' + days + ' days to make ' + '$' + total);
			infinite = false;
		}
	}
}

let oneBillion = () => {

let money 		= 0.01;
let days 		= 1;
let total 		= 0;
let infinite 	= true;

	// Reach for $1Billion
	while (infinite) {
		days++;
		total += money;
		money *= 2;
		if (money >= 1000000000) {
			console.log('It took the servant ' + days + ' days to make ' + '$' + total);
			// infinite = false;
			infinite = false;
		} 
	}
}

let stupidRich = () => {

let money 		= 0.01;
let days 		= 1;
let total 		= 0;
let infinite 	= true;
	
	// Infinity Rich
	while (infinite) {
		days++;
		total += money;
		money *= 2;
		if (money === Infinity) {
			console.log('It took the servant ' + days + ' days to be ' + Infinity + ' Rich!!');
			infinite = false;
		}
	}
}

in30Days();
tenThousand();
oneBillion();
stupidRich();







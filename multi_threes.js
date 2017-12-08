/*
	Multiples of Three – but Not All
	Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
*/

for (let i = -300; i <= 0; i++) {
	if (i == -3 || i == -6) {
		continue;	
	} else if (i % 3 == 0) {
		console.log('This is multiple number ', i);
	}
}
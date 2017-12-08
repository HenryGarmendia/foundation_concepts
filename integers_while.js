/*
	Printing Integers with While
	Print integers from 2000 to 5280, using a WHILE.
*/

let intergersWhile = function (start, stop) {
	// body... 
	while (start < stop) {
		// statement
		start++;
		console.log('This is number ', start);
	}
}

intergersWhile(1999, 5280);
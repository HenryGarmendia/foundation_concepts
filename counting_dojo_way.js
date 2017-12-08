/*
	Counting, the Dojo Way
	Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
*/

// let dojoWay = function (start, stop) {
// 	// body...
// 	for (var i = start; i <= stop; i++) {
// 		if (i % 5 === 0) {
// 			console.log('Coding');
// 		} else {
// 			console.log('Dojo')
// 		}
// 	}
// }

let dojoWay = function (start, stop) {
	// body...
	for (var i = start; i <= stop; i++) {
		if (i % 5 === 0 && i % 10 === 0) {
			console.log('Coding Dojo!!!');
		} else if (i % 5 === 0) {
			console.log('Coding');
		} else {
			console.log('Dojo');
		}
	}
}

dojoWay(1, 100);
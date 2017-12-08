/*
	Print and Count
	Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
*/

let printCount = function () {
	// body... 
	let count = 0;
	for(let i = 512; i <= 4096; i++) {
		if (i % 5 == 0) {
			count++;
		}
	}
	console.log('This is how many times ', count);
}

printCount();

/*
	You Say It’s Your Birthday
	If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day....",

	Example: given yourBirthday(4,19) or yourBirthday(19,4)
*/

let yourBirthday = function (month, day) {
	// body... 
	if (month == 4 && day == 19) {
		console.log('How did you know?');
	} else {
		console.log('Just another day...')
	}
}

yourBirthday(19,4);
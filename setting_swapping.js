/*
	Setting and Swapping
	Set variable myNumber to 42. Set variable myName to your name. Now swap myNumber into myName & vice versa.
*/

let myNumber = 42,
	myName 	 = 'Henry',
	tempt;

tempt = myNumber;
console.log('This is tempt ' + tempt);

myNumber = myName;
console.log('This is myNumber ' + myNumber);

myName = tempt;
console.log('This is myName ' + myName);

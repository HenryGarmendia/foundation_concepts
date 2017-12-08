/*
	Fancy Array
	Normally, if you print an array such as ["James", "Jill", "Jane", "Jack"], you will see the following:

	[ "James", "Jill", "Jane", "Jack" ]
	Let's make it look fancy! Write a function that will make it print like:

	0 -> James
	1 -> Jill
	2 -> Jane
	3 -> Jack
	Bonus (Only If You Have Time):

	Let the user pass in the symbol that will print (ex: "->", "=>", "::", "-----")
	Have an extra parameter reversed. If the user passes true, print the elements in reverse order
*/

let fancyArray = function (arr, sym, reversed) {

	let symbol;

	if (sym != null) {
		symbol = sym;
	} else {
		symbol = "-->";
	};
	
	if (reversed) {

		for (let i = arr.length - 1; i >= 0; i--) {
			console.log(i + ' ' + symbol + ' ' + arr[i]);
		};

	} else {

		for (let i = 0; i < arr.length; i++) {
			console.log(i + ' ' + symbol + ' ' + arr[i]);
		};

	};
};

fancyArray(["James", "Jill", "Jane", "Jack"]);
fancyArray(["James", "Jill", "Jane", "Jack"], "---", true);
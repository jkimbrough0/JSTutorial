// Array Creation
	var fruitAndVegetables = new Array();
	fruitAndVegetables[0]="Tomato";
	fruitAndVegetables[1]="Onion";
	fruitAndVegetables[2]="Spinach";
	fruitAndVegetables[3]="Potato";

// Initialize array with brackets
	var fruitAndVegetables = [];
	fruitAndVegetables[0]="Tomato";
	fruitAndVegetables[1]="Onion";
	fruitAndVegetables[2]="Spinach";
	fruitAndVegetables[3]="Potato";

//Types of Arrays:
//push, pop, shift, unshift, splice, reverse, sort, concat, slice, indexOf

//---------------------------------------
//'push' adds items to the end of an array
	var arr = [];

	arr.push('a');
	arr.push('b');
	arr.push('c');

	write('array.push(val) => ' + arr);

//---------------------------------------
//'pop' removes items off the end of an array

	arr.pop();

	write('array.pop() => ' + arr);

//---------------------------------------
//'shift' removes items off the beginning of an array

	arr.shift();

	write('array.shift() => ' + arr);

//---------------------------------------
//ushift adds items to the beginning of an array

	arr = []; //reset array

	arr.unshift('a');
	arr.unshift('b');
	arr.unshift('c');

	write('array.unshift(val) => ' + arr);

//---------------------------------------
//shift takes items off the beginning

	arr.shift('a');

	write('array.shift(val) =>' + arr);

//---------------------------------------
//reversing the array

	arr.unshift('c');

	arr.reverse();

	write('array.reverse() => ' + arr);

	arr.reverse();

	write('array.reverse() => ' + arr);

//---------------------------------------
//splicing inserts values into an array at a given position

	arr.splice(3, 'd');

//---------------------------------------
//sorts an array lexicographically (in dictionary order)

	arr.sort();

	write('array.sort() => ' + arr); 

//---------------------------------------
//concatenates values or arrays

	arr2 = [1,2,3];

	arr = arr.concat(arr2);

	write('array.concat(val) => ' + arr);

//---------------------------------------
//slice elements to create a new array

	arr = arr.slice(0,3); //index1, index2

	write('array.slice(begin,end) => ' + arr);

//---------------------------------------
//get index of a certain value in array

	var index = arr.indexOf('c');

	write('array.indexOf(\'c\') => ' + index);


//---------------------------------------
//print to document helper function

	function write(str) {
		document.write(str);
		document.write('<br><br>');
	}


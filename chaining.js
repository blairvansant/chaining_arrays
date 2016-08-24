// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.
// Sort the numbers in descending order (10, 9, 8, 7, etc).


var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
var sortedIntegers = integers.sort(
 	function(first, second){
 		return first - second;
 	}
 );
sortedIntegers.reverse();
console.log("Descending " + sortedIntegers);

for (var i = 0; i < sortedIntegers.length; i++) {
	if (sortedIntegers[i] >=19) {
		integers.splice(i, 4);
	}
}
console.log("Removed numbers over 19.    " + sortedIntegers);

var mappedIntegers = sortedIntegers.map(function(mapIt){
	return mapIt * 1.5 - 1;
})
console.log("Result of x * 1.5 - 1   " + mappedIntegers);


function addz(previousValue, currentValue){
	return previousValue + currentValue;
}
var sumz = mappedIntegers.reduce(addz);
console.log("this is the sum of the above array " + sumz);





// THE GUITAR SOLO PROJECT
// Investigations into the role of controlled randomnes, and its
// influence on Dance and playing the guitar.

var notes = ['C','D','D#','E','F','F#','G','G#','A','A#','B'];

var majorScale = ['W','W','H','W','W','W','H'];

function scaleFinder(array) {
	var i = 0;
	var j = 0;
	var result = [];
	while(i < array.length) {
		if (array[i] == 'W') {
			j += 2;
			result[i] = j; 
		}
		else if (array[i] == 'H') {
	 		j += 1;
	 		result[i] = j; 
		};
		i++;
	};
	return result;
};

scaleFinder(majorScale);

// [1,2,3,4,5,6,7,8,9,10,11]
// [12,13,14,15,16,17,18,19,20,21]



// function takes in array.
// Iterate through the array. 

// if H, do plus 1 
// if W, do plus 2.



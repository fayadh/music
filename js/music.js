// THE GUITAR SOLO PROJECT
// Investigations into the role of controlled randomnes, and its
// influence on Dance and playing the guitar.

var notes = ['C','D','D#','E','F','F#','G','G#','A','A#','B'];
var majorScale = ['W','W','H','W','W','W','H'];
var minorScale = ['W', 'H', 'W', 'W', 'H', 'W', 'W'];
var harmonicMinor = ['W', 'H', 'W', 'W', 'H', 'H', 'H'];
var melodicMinorGoingUp = ['W', 'H', 'W', 'W', 'W', 'W', 'H'];
var melodicMinorGoingDown = ['W', 'W', 'H', 'W', 'W', 'H', 'W'];
var dorianMode = ['W', 'H', 'W', 'W', 'W', 'H', 'W'];
// var mixolydianMode = [];

function scaleFinder(scale) {
	var i = 0;
	var j = -1;
	var result = [];
	while(i < scale.length) {
		if (scale[i] == 'W') {
			j += 2;
			result[i] = j; 
		}
		else if (scale[i] == 'H') {
	 		j += 1;
	 		result[i] = j; 
		};
		i++;
	};
	return result;
};

function scaleToNotes(scale) {
 result = [];
 for(var i = 0; i < scale.length; i++) {
 	result[i] = notes[scale[i]]; 
 }
 return result;
} 



$( document ).ready(function() {
			console.log( scaleFinder(majorScale) );
        console.log( scaleToNotes(scaleFinder(majorScale)) );
    });

// scaleFinder(majorScale);

// [1,2,3,4,5,6,7,8,9,10,11]
// [12,13,14,15,16,17,18,19,20,21]

// If we are going to have a scaleToNotes function, then 
// we are going to need to have it loop over the possible notes.
// how do we know which position each is in? 

// function takes in array.
// Iterate through the array. 

// if H, do plus 1 
// if W, do plus 2.



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
	var j = 0;
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

function scaleIndexToNotes(indexScale) {
 result = [];
 for(var i = 0; i < indexScale.length; i++) {
 	var index = indexScale[i] - 1;

 	// Octave recognition.
 	if (indexScale[i] <= 11) {
 		var octave = 0; 
 		result[i] = notes[ index ] + octave; 
 	} else {
 		var correction = (indexScale[i]) % 11;
 		var octave = Math.floor( (indexScale[i]) / 11) 
 		result[i] = notes[ correction ] + octave; //to correct the notes.
 	};
  
 }

 return result;
} 

// // Now what we want is if the loop hits something after 11,
// it automatically 	

// Math.floor() <-- Gives us the octave.
// % gives us the index. 

// First, let's give it octaves. 

$( document ).ready(function() {
			console.log( scaleFinder(majorScale) );
      console.log( scaleIndexToNotes(scaleFinder(majorScale)) );
    });

// scaleFinder(majorScale);

// [1,2,3,4,5,6,7,8,9,10,11]
// [12,13,14,15,16,17,18,19,20,21]
// if scale



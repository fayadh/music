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

function scaleFinder(scale, root) {
	var i = 0
	// var root = 0; //root sets the root note. 
	var result = [];
	while(i < scale.length) {
		if (scale[i] == 'W') {
			root += 2;
			result[i] = root; 
		}
		else if (scale[i] == 'H') {
	 		root += 1;
	 		result[i] = root; 
		};
		i++;
	};
	return result;
};

function scaleIndexToNotes(input) {
 result = [];
 for(var i = 0; i < input.length; i++) {
 	var index = input[i] - 1;  //

 	// Octave recognition.
 	if (input[i] <= 11) {
 		var octave = 0; 
 		result[i] = notes[ index ] + octave; 
 	} else {
 			if (((input[i]) % 11) == 0) {
 		 		var correction = 10; 
 		 	} else {
 		 		var correction = ((input[i]) % 11) - 1; 
 		 	};
 			var octave = Math.floor( (input[i]) / 11) 
 			result[i] = notes[ correction ] + octave; //to correct the notes.
 	};
 }
 return result;
} 


$( document ).ready(function() {
			experiment = scaleFinder(majorScale, 25)
			console.log( experiment );
      console.log( scaleIndexToNotes(experiment));
    });

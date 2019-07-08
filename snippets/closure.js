import transpose from 'fictional-library';

const up3M = note => transpose('up', '3M', note);

up3M({note: 'C', octave: 4}); // {note: 'E', octave: 4}
up3M({note: 'Bb', octave: 2}); // {note: 'D', octave: 3}

/* Stage 1 TC39 Native Partial Application Syntax */

const down7m = transpose('down', '7m', ?);

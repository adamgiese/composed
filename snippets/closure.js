import transpose from 'fictional-library';
// (dir, interval, note) => newNote

const upMajorThird = note => transpose('up', '3M', note);

upMajorThird({note: 'C', octave: 4}); // {note: 'E', octave: 4}
upMajorThird({note: 'Bb', octave: 2}); // {note: 'D', octave: 3}

/* Stage 1 TC39 Native Partial Application Syntax */

const downMinorSeventh = transpose('down', '7m', ?);


const notes = [
  { name: 'C', octave: 4 },
  { name: 'D', octave: 4 },
  { name: 'E', octave: 4 },
  { name: 'G', octave: 3 },
];

const incrementOctave = note => ({...note, octave: note.octave + 1});

const highNotes = notes.map(incrementOctave);

/*
  { name: 'C', octave: 5 },
  { name: 'D', octave: 5 },
  { name: 'E', octave: 5 },
  { name: 'G', octave: 4 },
*/

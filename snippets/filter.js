const notes = [ 'C', 'D', 'Eb', 'F', 'G', 'Ab', 'A' ];
const cPentatonic = [ 'C', 'D', 'E', 'G', 'A' ];

const isInCPentatonic = note => cPentatonic.includes(note);
const diatonicNotes = notes.filter(isInCPentatonic);
// ['C', 'D', 'G', 'A']

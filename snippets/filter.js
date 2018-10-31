import Tone from 'tone';
const melody = [
  'C4', 'D4', 'Eb4', 'G3',
  'F4', 'Ab3', 'Eb4', 'D4', 'C4'
];
const freq = note => Tone.Frequency(note).toFrequency();
const isHigh = note => freq(note) >= freq('C4');

const highNotes = melody.filter(isHigh);
// ["C4", "D4", "Eb4", "F4", "Eb4", "D4", "C4"]

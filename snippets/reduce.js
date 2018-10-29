import Tone from 'tone';

const melody = [
  { name: 'D4', length: '16n' },
  { name: 'E4', length: '16n' },
  { name: 'F4', length: '16n' },
  { name: 'G4', length: '16n' },
  { name: 'A4', length: '16n' },
  { name: 'Bb4', length: '16n' },
  { name: 'C#4', length: '16n' },
  { name: 'Bb4', length: '16n' },
  { name: 'A4', length: '16n' },
  { name: 'G4', length: '16n' },
  { name: 'F4', length: '16n' },
  { name: 'E4', length: '16n' },
  { name: 'F4', length: '16n' },
];

const toLength = (total, note) =>
  total + Tone.Time(note.length).toSeconds();

const length = melody.reduce(toLength, 0);
// 1.625

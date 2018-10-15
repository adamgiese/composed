const melody = [
  'D4', 'E4', 'F4', 'G4', 'A4', 'Bb4',
  'C#4', 'Bb4', 'A4', 'G4', 'F4', 'E4', 'F4'
];

const toUniqueNotes = (unique, note, index, melody) => {
  const validName = RegExp(/[A-G](#|b)?/);
  const name = validName.exec(note)[0];
  return unique.includes(name) ? unique : [...unique, name];
};

const notes = melody.reduce(
  toUniqueNotes,
  []
);
//  ["D", "E", "F", "G", "A", "Bb", "C#"]

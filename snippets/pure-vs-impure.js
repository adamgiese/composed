const middleC = {
  name: 'C',
  octave: 4,
};

const incrementOctave = note => ({...note, octave: note.octave + 1});
const highC = incrementOctave(middleC);

play(middleC);
play(highC);
play(incrementOctave(middleC));

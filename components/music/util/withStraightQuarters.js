import Tone from 'tone';

export default (name, index) => ({
  name,
  length: Tone.Time('4n'),
  time: Tone.Time('4n').toSeconds() * index,
});


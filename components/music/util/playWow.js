import Tone from 'tone';
const synth = new Tone.Synth().toMaster()

export default notes => () => {
  notes.forEach(({name, octave, length, time, velocity = 1}) => {
    synth.triggerAttackRelease(`${name}${octave}`, '16n', `+${time}`, velocity);
  });
}

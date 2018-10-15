import Tone from 'tone';
const synth = new Tone.Synth().toMaster()

export default notes => () => {
  notes.forEach(({name, length, time}) => {
    synth.triggerAttackRelease(name, length, `+${time}`);
  });
}

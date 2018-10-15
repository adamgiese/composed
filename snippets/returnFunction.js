import Tone from 'tone';
const synth = new Tone.Synth().toMaster()

const playNote = note => () => synth.triggerAttackRelease(note, '2n');
const playMiddleC = playNote('C4');

const button = getElementById('middleCTrigger');
button.addEventListener('click', playMiddleC);

import React from 'react'
import DisplayButton from '../../DisplayButton.js'
import Tone from 'tone';
const synth = new Tone.Synth().toMaster()

const withTime = (name, index) => ({
  name,
  time: Tone.Time('4n') * index,
});

const playNote = function(transportTime, note) {
  const { name, time } = note;
  synth.triggerAttackRelease(name, "4n", transportTime);
}

const toggle = () => Tone.Transport.toggle();

export default (props) => {
  const { id, children, notes } = props;
  new Tone.Part(playNote, notes.map(withTime)).start(0);
  return (
    <DisplayButton id={id} fn={toggle}>
      { children }
    </DisplayButton>
  );
};

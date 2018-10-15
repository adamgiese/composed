import React from 'react'
import DisplayButton from '../../DisplayButton.js'
import Tone from 'tone';
import play from '../util/play.js';
import withTime from '../util/withStraightQuarters';

const melody = [ 'C4', 'D4', 'Eb4', 'G3', 'F4', 'Ab3', 'Eb4', 'D4', 'C4' ];

const getFreq = note => Tone.Frequency(note).toFrequency();
const isHigh = note => getFreq(note) >= getFreq('C4');

export default () => (
  <div>
    <DisplayButton id='unfiltered' fn={play(melody.map(withTime))}>
      Play Unfiltered
    </DisplayButton>

    <DisplayButton id='filtered' fn={play(melody.filter(isHigh).map(withTime))}>
      Play Filtered
    </DisplayButton>
  </div>
);

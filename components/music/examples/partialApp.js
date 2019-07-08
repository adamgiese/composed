import React from 'react'
import DisplayButton from '../../DisplayButton.js'
import Tone from 'tone';
import play from '../util/play.js';
import withTime from '../util/withStraightQuarters';

const melody = [ 'C4', 'C4', 'G4', 'G4', 'A4', 'A4', 'G4' ];
const high = [ 'E4', 'E4', 'B4', 'B4', 'C#5', 'C#5', 'B4' ];
const low = [ 'D3', 'D3', 'A3', 'A3', 'B3', 'B3', 'A3' ];

export default () => (
  <div>
    <DisplayButton id='pA' fn={play(melody.map(withTime))}>
      Original
    </DisplayButton>

    <DisplayButton id='pA1' fn={play(high.map(withTime))}>
      Up Major 3rd
    </DisplayButton>

    <DisplayButton id='pA2' fn={play(low.map(withTime))}>
      Down Minor 7th
    </DisplayButton>
  </div>
);

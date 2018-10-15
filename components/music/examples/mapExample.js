import React from 'react'
import DisplayButton from '../../DisplayButton.js'
import Tone from 'tone';
import play from '../util/play.js';
import withTime from '../util/withStraightQuarters';

const melody = [ 'C4', 'D4', 'E4', 'G3', 'C4' ];
const highMelody = [ 'C5', 'D5', 'E5', 'G4', 'C5' ]; // fake mapping, TODO: replace with real

export default () => (
  <div>
    <DisplayButton id='preMap' fn={play(melody.map(withTime))}>
      Play Melody
    </DisplayButton>

    <DisplayButton id='postMap' fn={play(highMelody.map(withTime))}>
      Play High Melody
    </DisplayButton>
  </div>
);

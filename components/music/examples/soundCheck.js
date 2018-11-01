import React from 'react'
import DisplayButton from '../../DisplayButton.js'
import Tone from 'tone';
import play from '../util/play.js';
import withTime from '../util/withStraightQuarters';

const note = [ 'C3', 'C4', 'C5' ];

export default () => (
  <div>
    <DisplayButton id='soundCheck' fn={play(note.map(withTime))}>
      🔊
    </DisplayButton>
  </div>
);

import React from 'react'
import DisplayButton from '../../DisplayButton.js'
import Tone from 'tone';
import play from '../util/play.js';
import withTime from '../util/withStraightQuarters';

const C = [ 'C4' ];

export default () => (
  <div>
    <DisplayButton id='middleC' fn={play(C.map(withTime))}>
      Play C4
    </DisplayButton>
  </div>
);

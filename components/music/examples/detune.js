import React from 'react'
import DisplayButton from '../../DisplayButton.js'
import Tone from 'tone';
import play from '../util/play.js';
import withTime from '../util/withStraightQuarters';

const a = [ 440 ];
const aUp = [ 440 * 1.02];

export default () => (
  <div>
    <DisplayButton id='aTuned' fn={play(a.map(withTime))}>
      Play A4
    </DisplayButton>

    <DisplayButton id='aDetuned' fn={play(aUp.map(withTime))}>
      Play A4 (detuned)
    </DisplayButton>
  </div>
);

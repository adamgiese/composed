import React from 'react';
import DisplayButton from '../../DisplayButton.js'
import wow from '../wow/wowShort.js';
import play from '../util/playWow.js';

export default ({id, title}) => {
  return (
    <div>
      <DisplayButton id={id} fn={play(wow[id])}>{title}</DisplayButton>
    </div>
  );
}

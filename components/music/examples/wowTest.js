import React from 'react';
import DisplayButton from '../../DisplayButton.js'
import wow from '../wow/wowShort.js';
import play from '../util/playWow.js';

export default () => {
  return (
    <div>
      <DisplayButton id='preludeInC' fn={play(wow.preludeInC)}>Prelude in C</DisplayButton>
      <DisplayButton id='mario' fn={play(wow.mario)}>Mario</DisplayButton>
    </div>
  );
}

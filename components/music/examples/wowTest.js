import React from 'react';
import DisplayButton from '../../DisplayButton.js'
import wow from '../wow/index.js';
import play from '../util/playWow.js';

export default () => {
  return (<DisplayButton id='wow' fn={play(...wow)}>
    Wow!
  </DisplayButton>);
}

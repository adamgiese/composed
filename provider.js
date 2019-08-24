import React from 'react'
import useAnimationFrame from './util/useAnimationFrame.js'
import Unswitch from 'unswitch';
import fireKeyEvent from './util/fireKeyEvent.js'

const unswitch = new Unswitch({
  side: 'R',
  buttons: (button, pressed, side) => console.log(`Catch-all - button: ${button} was ${pressed ? 'pressed' : 'released'} on the ${side} side`),
  b: p => {},
  a: p => {
    if (p) {
      console.log('should fire right event')
      fireKeyEvent(document, 39);
    }
  },
  y: p => {
    if (p) {
      fireKeyEvent(document, 37);
    }
  },
  x: p => {},
  sl: p => {},
  sr: p => {},
  minus: p => {},
  plus: p => {},
  lstick: p => {},
  rstick: p => {},
  home: p => {},
  screenshot: p => {},
  bumper: p => {}, // L or R
  trigger: p => {}, // ZL or ZR
  axes: p => {},
});

export default props => {
  useAnimationFrame(() => unswitch.update());

  return (
    <div>
      {props.children}
    </div>
  )
}

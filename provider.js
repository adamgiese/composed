import React from 'react'
import useAnimationFrame from './util/useAnimationFrame.js'
import Unswitch from 'unswitch';
import fireKeyEvent from './util/fireKeyEvent.js'
import { updaters, withSlide } from 'mdx-deck'


export default props => {
  const slide = React.useContext(withSlide);
  const unswitch = new Unswitch({
    side: 'R',
    buttons: (button, pressed, side) => console.log(`Catch-all - button: ${button} was ${pressed ? 'pressed' : 'released'} on the ${side} side`),
    b: p => {
      if (p) {
        /* i know this shit is ugly but i'm done trying to find a cleaner way */
        const slideNumber = document.querySelector('#root > div').getAttribute('activeslide')
        const activeSlide = document.querySelector(`div[class*='CarouselInner'] > div:nth-child(${Number(slideNumber) + 1})`)
        const buttons = Array.from(activeSlide.querySelectorAll('button'));
        const indexOfFocus = buttons.findIndex(x => document.activeElement === x);
        const isEnd = buttons.length - 1 === indexOfFocus;
        if (!isEnd) {
          buttons[indexOfFocus + 1].focus()
        }
      }
    },
    a: p => {
      if (p) {
        props.update(updaters.next)
      }
    },
    y: p => {
      if (p) {
        props.update(updaters.previous)
      }
    },
    x: p => {
        /* i know this shit is ugly but i'm done trying to find a cleaner way */
        const slideNumber = document.querySelector('#root > div').getAttribute('activeslide')
        const activeSlide = document.querySelector(`div[class*='CarouselInner'] > div:nth-child(${Number(slideNumber) + 1})`)
        const buttons = Array.from(activeSlide.querySelectorAll('button'));
        const indexOfFocus = buttons.findIndex(x => document.activeElement === x);
        const isStart = indexOfFocus === 0

        if (!isStart) {
          buttons[indexOfFocus - 1].focus()
        }
    },
    sl: p => {},
    sr: p => {},
    minus: p => {},
    plus: p => {
      if (p) {
        /* i know this shit is ugly but i'm done trying to find a cleaner way */
        const slideNumber = document.querySelector('#root > div').getAttribute('activeslide')
        const activeSlide = document.querySelector(`div[class*='CarouselInner'] > div:nth-child(${Number(slideNumber) + 1})`)
        const buttons = Array.from(activeSlide.querySelectorAll('button'));
        const hasActiveButtonOnSlide = buttons.some(x => x === document.activeElement)

        if (hasActiveButtonOnSlide) {
          document.activeElement.click();
        }
      }
    },
    lstick: p => {},
    rstick: p => {},
    home: p => {},
    screenshot: p => {},
    bumper: p => {}, // L or R
    trigger: p => {}, // ZL or ZR
    axes: p => {},
  });
  useAnimationFrame(() => unswitch.update());

  console.log(props)

  return (
    <div activeSlide={props.index}>
      {props.children}
    </div>
  )
}

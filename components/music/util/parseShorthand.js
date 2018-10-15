import { pipe, split, map, match, head, applySpec, join, addIndex, last, add } from 'ramda';
import Tone from 'tone';
const { Time } = Tone;

const indexedMap = addIndex(map);
const calcDuration = pipe(split('@'), last); // TODO: add ternary for 'implied' cascade
const getSPN = pipe(
  split('@'),
  head,
);

export default pipe(
  split(','),
  indexedMap(
    applySpec({
      name: pipe(
        getSPN,
        match(/[A-G](b|#)?/),
        head,
      ),
      octave: pipe(
        getSPN, // add implied cascade
        match(/[0-9]/),
        join(''),
        parseInt,
      ),
      duration: calcDuration,
      time: (note, index, array) =>
        array
          .slice(0,index)
          .map(pipe(calcDuration, Time))
          .reduce(add, 0)
    })
  ),
);

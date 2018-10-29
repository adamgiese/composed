import {
  pipe,
  split,
  map,
  match,
  head,
  applySpec,
  join,
  addIndex,
  last,
  add,
  filter,
} from 'ramda';
import Tone from 'tone';
const { Time } = Tone;

const parseName = pipe(
  match(/^[A-G](b|#)?/),
  head,
);

const parseOctave = pipe(
  match(/\d*(?=@)/),
  Number,
);

const parseDuration = pipe(
  split('@'),
  last,
);

const parseTime = (note, index, notes) => notes
  .slice(0,index)
  .map(pipe(parseDuration, Time))
  .reduce(add, 0);

const arrayMap = addIndex(map);
const parseShorthand = pipe(
  split(/[ ,]+/),
  arrayMap(
    applySpec({
      name: parseName,
      octave: parseOctave,
      length: parseDuration,
      time: parseTime,
    })
  ),
);

export default parseShorthand;

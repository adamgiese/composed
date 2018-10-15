import { pipe, split, map, match, head, applySpec, join, addIndex, last, add, reverse, findLast, ifElse, T, F, prop, assoc, filter } from 'ramda';
import Tone from 'tone';

/* some utility functions */

const applyPattern = key => pattern => (note, index) => pattern[index % pattern.length];

const logThrough = note => x => { console.log(note, x); return x; };
const isValidNumber = x => typeof x === 'number' && !isNaN(x);
const getSPN = pipe(split('@'), head); // rewrite to be more generic (if no '@', for example)
const matchDigit = match(/\d+/);
const getPreceding = (note, index, array) => array.slice(0,index);

/* COMMENTS ARE TEMPORARY, SHOULD MOVE TO CODESURFER */

/* note name -- fairly straightforward */
const getName = pipe(getSPN, match(/[A-G](b|#)?/), head);

/* dealing with octave stuff */
const parseOctave = pipe(getSPN, matchDigit, head, Number); // converts 'C4@16n' shorthand to octave number
const hasValidOctave = pipe(getSPN, parseOctave, isValidNumber);
const parseImpliedOctave = pipe(
    getPreceding,
    findLast(hasValidOctave),
    parseOctave,
);

const getOctave = ifElse(
  pipe(parseOctave, isValidNumber),
  parseOctave,
  parseImpliedOctave,
);

/* rhythm */

const parseDuration = pipe(split('@'), prop('1'));
const hasValidDuration = pipe(parseDuration, Boolean);

const parseImpliedDuration = pipe(
  getPreceding,
  findLast(hasValidDuration),
  parseDuration,
);

const getDuration = ifElse(
  pipe(parseDuration, Boolean),
  parseDuration,
  parseImpliedDuration,
);

/* schedule it */

const convertToSeconds = duration => Tone.Time(duration).toSeconds();
const schedule = (note, index, array) => array
  .slice(0,index)
  .map(pipe(getDuration, convertToSeconds))
  .reduce(add, 0)
;

/* adding velocity */
const swell = [.7,.75,.8,.9,1,.9,.8,.85];
const getVelocity = applyPattern('velocity')([...swell, ...swell.map(x => x / 2)]);

/* pulling it all together */
const arrayMap = addIndex(map);

const parseShorthand = pipe(
  split(/\s/), // convert from string to array
  filter(Boolean),
  arrayMap(
    applySpec({ // applySpec maps an object of functions to an object of function results
      name: getName,
      octave: getOctave,
      length: getDuration,
      time: schedule,
      velocity: getVelocity,
    }),
  ),
);

const arpeggios = parseShorthand(
  `
   C4@16n E G C5 E G4 C5 E 
   C4 E G C5 E G4 C5 E
   C4 D A D5 F A4 D5 F
   C4 D A D5 F A4 D5 F
  `
)

const score = [
  arpeggios,
]

export default score

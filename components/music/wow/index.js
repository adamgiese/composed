import {
  add,
  addIndex,
  applySpec,
  assoc,
  filter,
  findLast,
  head,
  ifElse,
  last,
  map,
  match,
  pipe,
  prop,
  reduce,
  split,
} from 'ramda';

import Tone from 'tone';

/* some utility functions */

const applyPattern = key => pattern => (note, index) =>
  pattern[index % pattern.length];

const isValidNumber = x => typeof x === 'number' && !isNaN(x);
const getSPN = pipe(split('@'), head);
const matchDigit = match(/\d+/);
const getPreceding = (note, index, array) => array.slice(0,index);
const arrayMap = addIndex(map);

/* COMMENTS ARE TEMPORARY, SHOULD MOVE TO CODESURFER */

/* note name -- fairly straightforward */
const getName = pipe(getSPN, match(/[A-G](b|#)?/), head);

/* dealing with octave stuff */
const parseOctave = pipe(getSPN, matchDigit, head, Number);
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

const addStart = (notes, note) => {
  const lastNote = last(notes);
  const time = !notes.length ? 0 : pipe(
    prop('length'),
    convertToSeconds,
    add(prop('time', last(notes)))
  )(lastNote);
  const noteWithTime = assoc('time', time, note);
  return [...notes, noteWithTime];
}

/* adding velocity */
const loudSwell = [.7,.75,.8,.9,1,.9,.8,.85];
const quietSwell = loudSwell.map(x => x / 2);
const getVelocity =
  applyPattern('velocity')([...loudSwell,...quietSwell]);

/* pulling it all together */

const parseShorthand = pipe(
  split(/\s/),
  filter(Boolean),
  arrayMap(
    applySpec({
      name: getName,
      octave: getOctave,
      length: getDuration,
      velocity: getVelocity,
    }),
  ),
  reduce(addStart, []),
);

const arpeggios = parseShorthand(
  `
  C4@16n E G C5 E G4 C5 E C4 E G C5 E G4 C5 E
  C4 D A D5 F A4 D5 F C4 D A D5 F A4 D5 F
  B3 D4 G D5 F G4 D5 F B3 D4 G D5 F G4 D5 F 
  C4 E G C5 E G4 C5 E C4 E G C5 E G4 C5 E 
  C4 E A E5 A A4 E5 A C4 E A E5 A A4 E5 A 
  C4 D F# A D5 F#4 A D5 C4 D F# A D5 F#4 A D5 
  B3 D4 G D5 G G4 D5 G B3 D4 G D5 G G4 D5 G 
  B3 C4 E G C5 E4 G C5 B3 C4 E G C5 E4 G C5 
  A3 C4 E G C5 E4 G C5 A3 C4 E G C5 E4 G C5 
  D3 A D4 F# C5 D4 F# C5 D3 A D4 F# C5 D4 F# C5 
  G3 B D4 G B D G B G3 B D4 G B D G B 
  G3 Bb E4 G C#5 E4 G C#5 G3 Bb E4 G C#5 E4 G C#5 
  F3 A D4 A D5 D4 A D5 F3 A D4 A D5 D4 A D5 
  F3 Ab D4 F B D F B F3 Ab D4 F B D F B 
  E3 G C4 G C5 C4 G C5 E3 G C4 G C5 C4 G C5 
  E3 F A C4 F A3 C4 F E3 F A C4 F A3 C4 F 
  D3 F A C4 F A3 C4 F D3 F A C4 F A3 C4 F 
  G2 D3 G B F4 G3 B F4 G2 D3 G B F4 G3 B F4 
  C3 E G C4 E G3 C4 E C3 E G C4 E G3 C4 E 
  C3 G Bb C4 E Bb3 C4 E C3 G Bb C4 E Bb3 C4 E 
  F2 F3 A C4 E A3 C4 E F2 F3 A C4 E A3 C4 E 
  F#2 C3 A C4 Eb A3 C4 Eb F#2 C3 A C4 Eb A3 C4 Eb 
  Ab2 F3 B C4 D B3 C4 D Ab2 F3 B C4 D B3 C4 D 
  G2 F3 G B D4 G3 B D4 G2 F3 G B D4 G3 B D4 
  G2 E3 G C4 E G3 C4 E G2 E3 G C4 E G3 C4 E 
  G2 D3 G C4 F G3 C4 F G2 D3 G C4 F G3 C4 F 
  G2 D3 G B F4 G3 B F4 G2 D3 G B F4 G3 B F4 
  G2 Eb3 A C4 F# A3 C4 F# G2 Eb3 A C4 F# A3 C4 F# 
  G2 E3 G C4 G G3 C4 G G2 E3 G C4 G G3 C4 G 
  G2 D3 G C4 F G3 C4 F G2 D3 G C4 F G3 C4 F 
  G2 D3 G B F4 G3 B F4 G2 D3 G B F4 G3 B F4 
  C2 C3 G Bb E4 G3 Bb E4 C2 C3 G Bb E4 G3 Bb E4 
  C2 C3 F A C4 F C A3 C4 A3 F A F D F D 
  C2 B G4 B D5 F D B4 D5 B4 G B D F E D 
  C5@4n
  `
);

const score = [
  arpeggios,
]

export default score

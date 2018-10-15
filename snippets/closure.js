function doesArrayInclude(array) {
  return function(value) {
    return array.includes(value);
  }
}

const doesArrayIncludeConcise =
  array => value => array.includes(value);

const cMajor = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const cMinor = ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'];
const isInC = doesArrayInclude(cMajor);
const isInCminor = doesArrayInclude(cMinor);

isInC('E'); // true
isInC('Eb'); // false
isInCminor('E'); // false
isInCminor('Eb'); // true

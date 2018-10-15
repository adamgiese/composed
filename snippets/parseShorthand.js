import { pipe, split, map, match, head, applySpec, join, addIndex, last, add } = R;
const { Time } = Tone;

const mapWithIndex = addIndex(map);

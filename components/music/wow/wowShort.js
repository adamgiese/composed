import parseShorthand from '../util/parseShorthand';

const preludeInC =
 `C4@16n E4@16n G4@16n C5@16n E5@16n G4@16n C5@16n E5@16n C4@16n E4@16n G4@16n C5@16n E5@16n G4@16n C5@16n E5@16n
  C4@16n D4@16n A4@16n D5@16n F5@16n A4@16n D5@16n F5@16n C4@16n D4@16n A4@16n D5@16n F5@16n A4@16n D5@16n F5@16n
  B3@16n D4@16n G4@16n D5@16n F5@16n G4@16n D5@16n F5@16n B3@16n D4@16n G4@16n D5@16n F5@16n G4@16n D5@16n F5@16n
  C4@16n E4@16n G4@16n C5@16n E5@16n G4@16n C5@16n E5@16n C4@16n E4@16n G4@16n C5@16n E5@16n G4@16n C5@16n E5@16n
`;

console.log(parseShorthand(preludeInC))

const mario =
 `E5@16n E5@8n E5@8n C5@16n E5@8n G5@4n G4@4n
  C5@8n. G4@8n. E4@8n. A4@8n B4@8n Bb4@16n A4@8n
  G4@8t E5@8t G5@8t A5@8n F5@16n G5@8n
  E5@8n C5@16n D5@16n B4@8n.
  C5@8n. G4@8n. E4@8n. A4@8n B4@8n Bb4@16n A4@8n
  G4@8t E5@8t G5@8t A5@8n F5@16n G5@8n
  E5@8n C5@16n D5@16n B4@8n.
`;
export default {
  preludeInC: parseShorthand(preludeInC),
  mario: parseShorthand(mario),
}

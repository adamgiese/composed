import { future as theme } from 'mdx-deck/themes'
import darcula from 'react-syntax-highlighter/styles/prism/duotone-dark'

const codeStyles = {
  ...darcula,
  'code[class*="language-"]': {
    ...darcula['code[class*="language-"]'],
    fontSize: '32px',
  },
}

console.log(codeStyles);

export default {
  ...theme,
  heading: {
    textTransform: 'none',
  },
  blockquote: {
    fontSize: '.7em',
    borderLeft: '.5em solid currentColor',
    paddingLeft: '1em',
    maxWidth: '50em',
  },
  css: {
    fontSize: '14px',
    textAlign: 'left',
    '@media screen and (min-width:64em)': {
      fontSize: '28px'
    },
    button: {
      padding: '1rem 2rem',
      fontSize: '1.4em',
      background: 'transparent',
      color: '#75d7be',
      border: '4px solid currentColor',
    },
    'button:focus': {
      backgroundColor: '#323232',
    },
    'button:not(:first-child)': {
      marginLeft: '1rem',
    },
    '.thanks': {
      color: '#c47de8',
      fontWeight: '400',
      textTransform: 'uppercase',
      letterSpacing: '4px',
    },
  },
  prism: {
    style: codeStyles,
  }
}

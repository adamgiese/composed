import { future as theme } from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'

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
      padding: '2rem 4rem',
      fontSize: '2em',
    },
  },
  prism: {
    style: okaidia
  }
}

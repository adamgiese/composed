import { future as theme } from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'

export default {
  ...theme,
  heading: {
    textTransform: 'none',
  },
  blockquote: {
    fontSize: '1em',
  },
  prism: {
    style: okaidia
  }
}

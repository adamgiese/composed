import React from 'react';
import drake from '../images/drake-empty.png';
import { Appear } from 'mdx-deck';

const svgStyles = {
  width: '80vw',
  maxWidth: '900px',
};

const Text = ({children}) => (
  <text
    fontSize="20" fontWeight="900" fontFamily="Anton"
    textAnchor="left"
    fill="black"
  >
    {children}
  </text>
);

const Span = ({y, children}) => (
  <tspan
    x="260" y={y}
  >{children}</tspan>
);

const Meme = ({isTop, top1, top2, bottom1, bottom2}) => (
  <svg viewBox={`0 ${isTop ? 0 : 200} 600 200`} style={svgStyles}>
    <image
      xlinkHref={drake}
      x={0}
      y={0}
      height="400"
      width="600"
    />

    { isTop &&
      <Text>
        <Span y={90}>{top1}</Span>
        <Span y={130}>{top2}</Span>
      </Text>
    }

    { !isTop &&
      <Text>
        <Span y={280}>{bottom1}</Span>
        <Span y={320}>{bottom2}</Span>
      </Text>
    }
  </svg>
)

export default (props) => (
  <Appear step='1'>
    <div><Meme isTop={true} {...props} /></div>
    <div><Meme isTop={false} {...props} /></div>
  </Appear>
);

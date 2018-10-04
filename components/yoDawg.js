import React from 'react';
import dawg from '../images/yo-dawg.jpg';

const svgStyles = {
  width: '80vw',
  maxWidth: '600px',
};

const Text = ({children, y}) => (
  <text
    fontSize="22" fontWeight="900" fontFamily="Anton"
    textAnchor="middle"
    fill="white"
    y={y}
    x='300'
  >{children}</text>
)

export default ({line1, line2}) => (
  <svg viewBox='0 0 600 400' style={svgStyles}>
    <image
      xlinkHref={dawg}
      x={0}
      y={0}
      height="400"
      width="600"
    />
    <Text y='320'>{line1}</Text>
    <Text y='356'>{line2}</Text>
  </svg>
);

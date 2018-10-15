import React from 'react';
import gru from '../images/gru.jpg';

const svgStyles = {
  width: '80vw',
  maxWidth: '800px',
  display: 'block',
  marginBottom: 0,
};

const Text = ({children, y, x}) => (
  <text
    fontSize="18" fontWeight="900" fontFamily="Anton"
    textAnchor="middle"
    fill="black"
    y={y}
    x={x}
  >{children}</text>
)

export default ({box1, box2, box3, box4}) => (
  <svg viewBox='0 0 600 400' style={svgStyles}>
    <image
      xlinkHref={gru}
      x={0}
      y={0}
      height="400"
      width="600"
    />
    <Text x={230} y={100}>Learn</Text>
    <Text x={230} y={130}>functional</Text>
    <Text x={230} y={160}>programming</Text>

    <Text x={545} y={100}>Remove</Text>
    <Text x={545} y={130}>all</Text>
    <Text x={545} y={160}>side effects</Text>

    <Text x={230} y={270}>Program</Text>
    <Text x={230} y={300}>is</Text>
    <Text x={230} y={330}>useless</Text>

    <Text x={545} y={270}>Program</Text>
    <Text x={545} y={300}>is</Text>
    <Text x={545} y={330}>useless</Text>
  </svg>
);

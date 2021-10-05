import React from 'react';

function BoxColor({ r, g, b }) {
  return (
    <div
      style={{
        backgroundColor: `rgb(${r},${g},${b})`,
        borderStyle: 'solid',
        margin: '5px',
      }}
    >
      <p>
        rgb({r},{g},{b})
      </p>
    </div>
  );
}

export default BoxColor;

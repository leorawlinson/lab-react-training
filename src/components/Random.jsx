import React from 'react';

const randomStyle = {
  borderStyle: 'solid',
  fontSize: '20px',
  paddingLeft: '10px',
  margin: '5px',
};

function randomNum(num) {
  return Math.floor(Math.random() * num);
}

function Random({ min, max }) {
  return (
    <div style={randomStyle}>
      <p>
        Random value between {min} and {max} => {randomNum(max)}
      </p>
    </div>
  );
}

export default Random;

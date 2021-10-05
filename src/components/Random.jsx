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
      <p>Random value between 1 and 6 => {randomNum(min)}</p>
      <p>Random value between 1 and 100 => {randomNum(max)}</p>
    </div>
  );
}

export default Random;

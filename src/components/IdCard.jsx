import React from 'react';

const idStyle = {
  display: 'flex',
  justifyContent: 'flexEnd',
  borderStyle: 'solid',
  margin: '5px',
  maxHeight: '185px',
  padding: '10px',
};

function IdCard({ lastname, firstname, gender, height, birth, picture }) {
  return (
    <div style={idStyle}>
      <img src={picture} alt="id" />
      <div>
        <p>
          <strong>Last name:</strong>
          {lastname}
        </p>
        <p>
          <strong>First name:</strong>
          {firstname}
        </p>
        <p>
          <strong>Gender:</strong>
          {gender}
        </p>
        <p>
          <strong>Height:</strong>
          {`${height / 100}m`}
        </p>
        <p>
          <strong>Date of birth:</strong>
          {birth}
        </p>
      </div>
    </div>
  );
}

export default IdCard;

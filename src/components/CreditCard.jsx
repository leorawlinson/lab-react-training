import React from 'react';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: color,
        maxWidth: '350px',
        minHeight: '175px',
        borderRadius: '10px',
        margin: '5px',
        padding: '0px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <p>{type}</p>
      </div>
      <br />
      <div style={{ flexDirection: 'column' }}>
        <p>.... .... .... {number.slice(12)}</p>
        <p>
          Expires {expirationMonth}/{expirationYear}
        </p>
        <p>{bank}</p>
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;

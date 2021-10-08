import React from 'react';

const driverStyle = {
  borderStyle: 'solid',
  fontSize: '20px',
  paddingLeft: '10px',
  margin: '5px',
  backgroundColor: 'lightblue',
};

function ratingDecider(rating) {
  const roundedRating = Math.round(rating);
  switch (true) {
    case roundedRating < 1:
      return '☆☆☆☆☆';
    case roundedRating < 2:
      return '★☆☆☆☆';
    case roundedRating < 3:
      return '★★☆☆☆';
    case roundedRating < 4:
      return '★★★☆☆';
    case roundedRating < 5:
      return '★★★★☆';
    case roundedRating >= 5:
      return '★★★★★';
    default:
      return '☆☆☆☆☆';
  }
}

function DriverCard({ name, rating, img, car }) {
  return (
    <div style={driverStyle}>
      <img style={{ maxWidth: '200px' }} src={img} alt="profile" />
      <p>{name}</p>
      <p>{ratingDecider(rating)}</p>
      <p>{car.model}</p>
      <p>{car.licensePlate}</p>
    </div>
  );
}

export default DriverCard;

import React from 'react';
const ratingStyle = {
  borderStyle: 'solid',
  fontSize: '20px',
  paddingLeft: '10px',
  margin: '5px',
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
function Rating({ children }) {
  return (
    <div>
      <p style={ratingStyle}>{ratingDecider(Number(children))}</p>
    </div>
  );
}

export default Rating;

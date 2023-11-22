
import React from 'react';

const Image = ({ imageUrl, name }) => {
  return (
    <div>
    <img src={imageUrl} alt={name} />
    <h2>{name}</h2>
  </div>
  );
};

export default Image;

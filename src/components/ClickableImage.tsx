import React from 'react';

const ClickableImage = ({ src, alt, onClick }) => (
  <img src={src} alt={alt} onClick={onClick} style={{ cursor: 'pointer' }} />
);

export default ClickableImage;

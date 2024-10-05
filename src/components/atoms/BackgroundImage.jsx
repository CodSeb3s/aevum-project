import React from 'react';

const BackgroundImage = ({ src, alt, className}) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} className="object-cover w-full h-full" />
    </div>
  );
};

export default BackgroundImage;
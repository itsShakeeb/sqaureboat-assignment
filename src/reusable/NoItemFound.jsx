import React from "react";

const NotItemFound = ({ image, text }) => {
  return (
    <div>
      <div>
        <img src={image} alt={text} className='no-item-image' />
      </div>
      <div>
        <span className='no-item-text'>{text}</span>
      </div>
    </div>
  );
};

export default React.memo(NotItemFound);

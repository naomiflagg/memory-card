import React, { useState } from 'react';

const Card = (props) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    debugger;
    props.checkClicked(clicked)
    if (clicked === false) {
      setClicked(true);
    }
  };

  return (
    <figure onClick={handleClick}>
      <img src={props.imageUrl} alt={props.alt} />
      <figcaption>{props.text}</figcaption>
    </figure>
  );
};

export default Card;

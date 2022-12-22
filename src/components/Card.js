import React, { useState } from "react";
import "../styles/card.css";

const Card = (props) => {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const image = props;

  const scored = () => {
    if (hasBeenClicked === true) {
      return false;
    }
    return true;
  };

  const handleClick = () => {
    if (scored() === false) {
      props.onClick(false);
    } else {
      props.onClick(true);
      setHasBeenClicked(true);
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={image.image} alt="insect head" />
    </div>
  );
};

export default Card;

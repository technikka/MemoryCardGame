import React, { useState } from "react";
import "../styles/card.css";

const Card = (props) => {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const image = props;

  const scored = () => {
    if (hasBeenClicked === true) {
      return false;
    } else if (hasBeenClicked === false) {
      return true;
    } else {
      console.log("ERROR with hasBeenClicked");
    }
  };

  const handleClick = () => {
    if (scored() === false) {
      // reset currentScore
      // compare if new best score
    } else {
      props.awardPoint();
      setHasBeenClicked(true);
    }
    props.onClick();
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={image.image} alt="insect head" />
    </div>
  );
};

export default Card;

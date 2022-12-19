import React from "react";
import "../styles/card.css";

const Card = (props) => {
  const image = props;

  return(
    <div className="card">
      <img src={image.image} alt="insect head" />
    </div>
  )
}

export default Card
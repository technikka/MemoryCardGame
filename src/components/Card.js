import React from "react";

const Card = (props) => {
  const image = props;

  return(
    <div className="card">
      <img src={image.image} alt="" height="50" width="50" />
    </div>
  )
}

export default Card
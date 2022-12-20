import React, {useState} from "react";
import "../styles/card.css";

const Card = (props) => {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const image = props;

  return(
    <div className="card" onClick={props.onClick}>
      <img src={image.image} alt="insect head" />
    </div>
  )
}

export default Card
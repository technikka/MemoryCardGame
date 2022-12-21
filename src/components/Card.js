import React, {useState} from "react";
import "../styles/card.css";

const Card = (props) => {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const image = props;

  const handleClick = () => {
    setHasBeenClicked(true);
    props.onClick();
  }

  return(
    <div className="card" onClick={handleClick}>
      <img src={image.image} alt="insect head" />
    </div>
  )
}

export default Card
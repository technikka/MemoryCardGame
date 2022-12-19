import React, { useState, useEffect } from "react";

const Gamespace = () => {
  const [cardArrangement, setCardArrangment] = useState([]);

  const shuffle = (cardArrangement) => {
    let arr = cardArrangement;
    let i = arr.length;
    while (--i > 0) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }
    return arr;
  };

  //  useEffect(() => {

  //  }
  //  );

  /* when this component mounts, randomize cards in arrangement */

  return <div>{/* for each card in card arrangement, place card */}</div>;
};

export default Gamespace;

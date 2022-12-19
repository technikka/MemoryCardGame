import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import insect1 from "../images/insect1.jpg";
import insect2 from "../images/insect2.jpg";
import insect3 from "../images/insect3.jpg";
import insect4 from "../images/insect4.jpg";
import insect5 from "../images/insect5.jpg";
import insect6 from "../images/insect6.jpg";
import insect7 from "../images/insect7.jpg";
import insect8 from "../images/insect8.jpg";
import insect9 from "../images/insect9.jpg";
import insect10 from "../images/insect10.jpg";
import insect11 from "../images/insect11.jpg";
import insect12 from "../images/insect12.jpg";
import insect13 from "../images/insect13.jpg";
import insect14 from "../images/insect14.jpg";

import Card from "./Card";

const Gamespace = () => {
  const cardImages = [
    insect1,
    insect2,
    insect3,
    insect4,
    insect5,
    insect6,
    insect7,
    insect8,
    insect9,
    insect10,
    insect11,
    insect12,
    insect13,
    insect14,
  ];
  const [cardArrangement, setCardArrangement] = useState(cardImages);

  const shuffle = (cardArray) => {
    let arr = cardArray;
    let i = arr.length;
    while (--i > 0) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }
    return arr;
  };

  /* useEffect(() => {
    function shuffleOrder() {
      setCardArrangement(shuffle(cardArrangement));
    }
  }, [cardArrangement]); */

  return (
    <div className="gamespace">
      {cardArrangement.map((image) => {
        return (
          <Card key={uniqid()} image={image}/>
        )
      })}
    </div>
  );
};

export default Gamespace;

import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import "../styles/gamespace.css";
import insect1 from "../images/insect1.jpg";
import insect2 from "../images/insect2.jpg";
import insect3 from "../images/insect3.jpg";
import insect4 from "../images/insect4.jpg";
import insect5 from "../images/insect5.jpg";
import insect6 from "../images/insect6.jpg";
import insect7 from "../images/insect7.jpg";
import insect8 from "../images/insect8.jpg";
import insect9 from "../images/insect9.jpg";
import insect11 from "../images/insect11.jpg";
import insect12 from "../images/insect12.jpg";
import insect13 from "../images/insect13.jpg";
import Card from "./Card";

const Gamespace = (props) => {
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
    insect11,
    insect12,
    insect13
  ];

  const createCards = () => {
    let arr = [];
    cardImages.forEach((image) => {
      let card = { id: uniqid(), image: image };
      arr.push(card);
    });
    return arr;
  };

  const [cardArrangement, setCardArrangement] = useState(() => createCards());
  const [round, setRound] = useState(1);

  const newRound = () => {
    setRound(round + 1);
    props.resetScore();
    props.updateBestScore();
  };

  const shuffle = (cardArray) => {
    let arr = cardArray;
    let i = arr.length;
    while (--i > 0) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }
    return arr;
  };

  const handleClick = () => {
    setCardArrangement(shuffle(cardArrangement));
  };

  useEffect(() => {
    setCardArrangement(shuffle(createCards()));
  }, [round]);

  return (
    <div className="gamespace">
      {cardArrangement.map((card) => {
        return (
          <Card
            key={card.id}
            image={card.image}
            onClick={() => {
              handleClick();
            }}
            awardPoint={props.awardPoint}
            newRound={newRound}
          />
        );
      })}
    </div>
  );
};

export default Gamespace;

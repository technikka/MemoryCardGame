import React, {useState} from "react";

const Scoreboard = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const awardPoint = () => {
    setCurrentScore(currentScore + 1);
  }

  return (
    <div className="scoreboard">
      <div>Score: {currentScore}</div>
      <div>Best Score: {bestScore}</div>
    </div>
  )
}

export default Scoreboard;
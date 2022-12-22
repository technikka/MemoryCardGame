import Scoreboard from "./components/Scoreboard";
import Gamespace from "./components/Gamespace";
import React, { useState } from "react";
import "./styles/app.css";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const awardPoint = () => {
    setCurrentScore(currentScore + 1);
  };

  const resetScore = () => {
    setCurrentScore(0);
  };

  const updateBestScore = () => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  };

  return (
    <div>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <Gamespace
        awardPoint={awardPoint}
        resetScore={resetScore}
        updateBestScore={updateBestScore}
      />
    </div>
  );
};

export default App;

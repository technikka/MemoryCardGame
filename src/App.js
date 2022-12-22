import Scoreboard from "./components/Scoreboard";
import Gamespace from "./components/Gamespace";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";
import React, { useState } from "react";
import "./styles/app.css";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameover, setGameover] = useState(false);
  const [pageActive, setPageActive] = useState(true);

  const awardPoint = () => {
    setCurrentScore(currentScore + 1);
  };

  const resetScore = () => {
    setCurrentScore(0);
  };

  const resetBestScore = () => {
    setBestScore(0);
  };

  const updateBestScore = () => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  };

  const win = () => {
    // this should be 12, but awardPoint isnt changing state quick enough
    if (currentScore === 11) {
      return true;
    }
    return false;
  };

  const alertWin = () => {
    setGameover(true);
  };

  const resetGame = () => {
    resetScore();
    resetBestScore();
    setGameover(false);
    if (pageActive === false) {
      setPageActive(true);
    }
  };

  const stopGame = () => {
    setGameover(false);
    setPageActive(false);
  }

  const startGameBtn = <button className="restart-btn" onClick={resetGame}>Start Game</button>

  return (
    <div>
      <h1>Memory Game</h1>
      <p>Click each card only once. </p>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      {pageActive === false && startGameBtn}
      <Gamespace
        awardPoint={awardPoint}
        resetScore={resetScore}
        updateBestScore={updateBestScore}
        win={win}
        alertWin={alertWin}
        pageActive={pageActive}
      />
      {gameover === true && <Backdrop />}
      {gameover === true && <Modal resetGame={resetGame} stopGame={stopGame} />}
    </div>
  );
};

export default App;

import Scoreboard from "./components/Scoreboard";
import Gamespace from "./components/Gamespace";
import React, {useState} from "react";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const awardPoint = () => {
    setCurrentScore(currentScore + 1);
  }

  return (
    <div>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <Gamespace awardPoint={awardPoint} />
    </div>
  )

}


export default App;

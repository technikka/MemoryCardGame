const Scoreboard = (props) => {
  // const [currentScore, setCurrentScore] = useState(0);
  // const [bestScore, setBestScore] = useState(0);

  // const awardPoint = () => {
  //   setCurrentScore(currentScore + 1);
  // }

  return (
    <div className="scoreboard">
      <div>Score: {props.currentScore}</div>
      <div>Best Score: {props.bestScore}</div>
    </div>
  )
}

export default Scoreboard;
import "../styles/scoreboard.css";

const Scoreboard = (props) => {
  return (
    <div className="scoreboard">
      <div className="current-score">Score: {props.currentScore}</div>
      <div>Best: {props.bestScore}</div>
    </div>
  )
}

export default Scoreboard;
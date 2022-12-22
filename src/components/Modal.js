import React from "react";
import "../styles/modal.css";

const Modal = (props) => {
  return (
    <div className="modal">
      <p>Great Job! You won!</p>
      <p>Play again?</p>
      <button onClick={props.resetGame}>Yes</button>
      <button onClick={props.stopGame}>No</button>
    </div>
  )
}

export default Modal
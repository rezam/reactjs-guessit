import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import "./style.css";

function App() {
  const [num, setNum] = useState("");
  const [userChoice, setUserChoice] = useState("");
  const [cmInitialChoice, setCmInitialChoice] = useState(
    Math.floor(Math.random() * 100)
  );
  const [cmChoice, setCmChoice] = useState("");
  const [leg, setLeg] = useState("");
  const [guess, setGuess] = useState('0');
  const [end, setEnd] = useState("");

  const endHander = () => {
    setNum("");
    setGuess('0');
    setUserChoice("");
    setCmInitialChoice(Math.floor(Math.random() * 100));
    setCmChoice("");
    setLeg("");
  };

  React.useEffect(() => {
    if (cmChoice > userChoice) {
      setLeg("hint: u should choose greater number");
    } else if (cmChoice < userChoice) {
      setLeg("hint: u should choose lesser number");
    } else if (cmChoice != "" && cmChoice == userChoice) {
      setLeg("bingo");
    } else {
      setLeg("");
    }
  }, [userChoice]);

  return (
    <div>
      <div className="screen">
        <div className="header">
          <p>Guess the computer choosen number (1 to 100)</p>
        </div>
        <div className="left">
          <div className="phone" />
          <input
            type="number"
            min="1"
            max="100"
            onChange={e => {
              setNum(e.target.value);
            }}
          />
          <button
            className="check"
            onClick={() => {
              setUserChoice(num);
              setGuess(parseInt(guess) + 1);
              setCmChoice(cmInitialChoice);
            }}
          >
            check
          </button>

          <button
            className="end"
            onClick={() => {
              endHander();
            }}
          >
            end
          </button>
        </div>

        <div className="right">
          <p>{num}</p>
          <p>You tried to guess {guess} times</p>
          {leg ? (
            <p className="hint" style={{ fontSize: 12 }}>
              {leg}
            </p>
          ) : (
            <p />
          )}
        </div>
      </div>
    </div>
  );
}

render(<App />, document.getElementById("root"));

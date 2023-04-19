import React, { useEffect, useState } from "react";
import Game from "./Game";
import Title from "./Title";
const items = [
  {
    paper: "images/icon-paper.svg",
  },
  {
    scissors: "images/icon-scissors.svg",
  },
  {
    rock: "images/icon-rock.svg",
  },
];

let score = 0;
function GamePlay(props) {
  const [won, setWinner] = useState(0);

  const [play, changePlay] = useState(false);

  const [showComponent, changeState] = useState(false);

  const selected = Object.keys(items[props.value])[0];

  const [showStyle, setShowStyle] = useState(-1);

  let computer_selected = props.rNum;
  let computer_selected_item = Object.keys(items[computer_selected])[0];

  function updateScore(won) {
    if (won == 1) score++;
    else if (won == 0) score = 0;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStyle(won);
    }, 1000);
  });
  useEffect(() => {
    setTimeout(() => {
      changeState(true);
    }, 1000);
    if (computer_selected_item === "paper" && selected === "rock") {
      setWinner(0);
      updateScore(0);
    } else if (computer_selected_item === "rock" && selected === "paper") {
      setWinner(1);
      updateScore(1);
    } else if (computer_selected_item === "scissors" && selected === "rock") {
      setWinner(1);
      updateScore(1);
    } else if (computer_selected_item === "rock" && selected === "scissors") {
      setWinner(0);
      updateScore(0);
    } else if (computer_selected_item === "scissors" && selected === "paper") {
      setWinner(0);
      updateScore(0);
    } else if (computer_selected_item === "paper" && selected === "scissors") {
      setWinner(1);
      updateScore(1);
    } else {
      setWinner(2);
      updateScore(2);
    }
  }, []);

  function playAgain() {
    changePlay(true);
  }

  if (!play)
    return (
      <div>
        <Title score={score} />
        <div className="gameplay">
          <div className="player">
            <h3 className="picked">You Picked</h3>
            <div className="borderWrap">
              <div  id={selected} className= {`actionBox ${showStyle == 1 ? "winner" : ""}`}>
                <img
                  className="play"
                  src={Object.values(items[props.value])[0]}
                ></img>
              </div>
            </div>
          </div>

          {
            <div
              className="play-again"
              style={{ visibility: showComponent ? "visible" : "hidden" }}
            >
              {won == 1 ? (
                <h3>YOU WIN </h3>
              ) : won == 0 ? (
                <h3>YOU LOOSE</h3>
              ) : (
                <h3>YOU DREW</h3>
              )}
              <button onClick={playAgain} className="btn-play">
                PLAY AGAIN
              </button>
            </div>
          }

          {
            <div className="computer">
              <h3 className="picked">THE HOUSE PICKED</h3>
              <div className="borderWrap">
                <div
                  id={Object.keys(items[computer_selected])[0]}
                  className={`actionBox ${showStyle == 0 ? "winner" : ""}`}
                  style={{ visibility: showComponent ? "visible" : "hidden" }}
                >
                  <img
                    className="play"
                    src={Object.values(items[computer_selected])[0]}
                  ></img>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    );
  else return <Game called={true} score={score} />;
}

export default GamePlay;

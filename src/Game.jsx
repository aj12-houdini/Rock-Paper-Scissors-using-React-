import React, { useState } from "react";
import GamePlay from "./Play_Game";
import Title from "./Title";
const game_items = ["Paper", "Scissors", "Rock"];

const items = [
  {
    paper: "images/icon-paper.svg",
  },
  {
    scissors: "images/icon-scissors.svg",
  },
];
function Game(props) {
  const randomNumber = Math.floor(Math.random() * 3);
  const [gameStarts, changeState] = useState(false);

  const [item_id, changeItem] = useState(0);


  function playGame(key) {
    changeState(true);
    changeItem(key);
  }

  if (!gameStarts)
    return (
      <div>
        <Title score={props.called ? props.score : 0} />
        <div className="gameBox" style={{ visibility: "" }}>
          <img className="triangle" src="images/bg-triangle.svg"></img>
          <div className="top">
            {items.map((item, id) => (
              <div key={id} className="borderWrap">
                <div
                  onClick={() => playGame(id)}
                  id={Object.keys(item)[0]}
                  className="actionBox"
                >
                  <img className="play" src={Object.values(item)[0]}></img>
                </div>
              </div>
            ))}
          </div>
          <div className="bottom">
            <div className="borderWrap">
              <div onClick={() => playGame(2)} id="rock" className="actionBox">
                <img className="play" src="images/icon-rock.svg"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <GamePlay game_starts={gameStarts} value={item_id} rNum={randomNumber} />
  );
}
export default Game;

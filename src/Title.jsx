import React, { useEffect, useState } from "react";

function Title(props) {
  const [time, changeTime] = useState(false);
  const [prevValue, setValue] = useState(props.score);


  useEffect(() => {
    setTimeout(() => {
      changeTime(true);
    }, 1000);
    if (prevValue !== null && prevValue !== props.score) {
    }
    setValue(props.score);
  }, [prevValue]);

  const game_items = ["Rock", "Papers", "Scissors"];
  return (
    <div className="title">
      <div className="titleName">
        {game_items.map((item, id) => (
          <h1 key={id}>{item}</h1>
        ))}
      </div>

      <div className="score">
        <h4>SCORE</h4>
        <h1>{time ? props.score : prevValue}</h1>
      </div>
    </div>
  );
}
export default Title;

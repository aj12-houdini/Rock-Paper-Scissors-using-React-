import React, { useState } from "react";
import RulesModal from "./RulesModal";

function Modal() {
  const [state, changeState] = useState(false);

  function toggleModal() {
    changeState(!state);
  }
  return (
    <div>
      <div className="footer">
        <div onClick={toggleModal} className="rules">
          <h3>Rules</h3>
        </div>
      </div>
      {state ? <RulesModal show={state} showState = {toggleModal} /> : <RulesModal show = {state} showState = {toggleModal} />}
    </div>
  );
}
export default Modal;

import React from "react";
function RulesModal(props) {
  return (
    <div className="ruleBox" id={props.show ? "showModal" : "removeModal"}>
      <div className="rulesModal">
        <div className="heading">
          <h1>Rules</h1>
          <img onClick={props.showState} src="images/icon-close.svg"></img>
        </div>
        <img src="images/image-rules.svg"></img>
      </div>
    </div>
  );
}
export default RulesModal;

import React from "react";
import Buttton from "./Button.js";
import DollarSvg from "../images/DollarSvg.jsx";

function EnterPledgePrompt() {
  return (
    <div className="enter-pledge clr-neutral-500">
      <p className="text-align-center">Enter your pledge</p>
      <div className="pledge-continue">
        <div className="input-dollar">
          <input type="text" />
          <DollarSvg />
        </div>
        <Buttton text={"Continue"} />
      </div>
    </div>
  );
}

export default EnterPledgePrompt;

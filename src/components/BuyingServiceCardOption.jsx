import React from "react";

import "./BuyingServiceCardOption.css";
import EnterPledgePrompt from "./EnterPledgePrompt";

function BuyingServiceCardOption({ cardClick, isSelected, cardData }) {
  const { offer, pledgeWith, offerInfo, daysLeft, id } = cardData;
  return (
    <div
      id={id}
      className={`card-container ${isSelected ? "primary-border-radius" : ""}`}
    >
      <input type="radio" id="radio-one" />
      <label
        htmlFor="radio-one"
        onClick={() => {
          cardClick(id);
        }}
      >
        <div className={`radio-pledge ${isSelected ? "checked" : ""}`}>
          <span className="radio-circle"></span>
          <div>
            <p className="offer fw-700">{offer}</p>
            <p className="clr-primary-400">{pledgeWith}</p>
          </div>
        </div>
        <div>
          <p className="clr-neutral-500">{offerInfo}</p>
        </div>

        <div className="days-left">
          <p className="fs-1p2r fw-700">{daysLeft}</p>
          <p>left</p>
        </div>
      </label>
      {isSelected && <EnterPledgePrompt />}
    </div>
  );
}

export default BuyingServiceCardOption;

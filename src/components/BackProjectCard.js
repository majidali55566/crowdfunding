import React, { useState } from "react";
import "./BackProjectCard.css";
import BuyingServiceCardOption from "./BuyingServiceCardOption.jsx";

function BackProjectCard({ handleBackThisProject }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const handleOptionCardClick = (cardId) => {
    setSelectedCard(cardId);
  };
  const serviceOptions = [
    {
      id: "1",
      offer: "Pledge with no reward",
      pledgeWith: "",
      offerInfo:
        "Choose to support us without a reward if you simply believe in our project.As a backer,you will be signed up to recieve product updates via email.",
      daysLeft: "10",
    },
    {
      id: "2",
      offer: "Bamboo Stand",
      pledgeWith: "Pledge $25 or more",
      offerInfo:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to our a special Backer member list.",
      daysLeft: "101",
    },
    {
      id: "3",
      offer: "Black Edition Stand",
      pledgeWith: "Pledge $75 or more",
      offerInfo:
        "You get a Black Special Edition computer stand and a personal thank you.You'll be added to our Backer member list. Shipping is included.",
      daysLeft: "150",
    },
    {
      id: "4",
      offer: "Mahogany Special Edition`",
      pledgeWith: "Pledge $200 or more",
      offerInfo:
        "You get two Special Edition Mathogany stands , a Backer T-shirt, and a personal thank you. You'll be added to our Backer member list . Shipping is included.",
      daysLeft: "0",
    },
  ];

  return (
    <div className="back-card-background">
      <div className="back-card-container">
        <div className="modal-purpose-cross">
          <p className="clr-neutral-900 fw-700">Back this project</p>
          <svg
            onClick={handleBackThisProject}
            width="15"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
              fill="#000"
              fill-rule="evenodd"
              opacity=".4"
            />
          </svg>
        </div>
        <div className="clr-neutral-500">
          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
        </div>
        <div className="radio-options-container">
          {serviceOptions.map((card) => (
            <BuyingServiceCardOption
              key={card.id}
              cardClick={handleOptionCardClick}
              isSelected={selectedCard === card.id}
              cardData={card}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BackProjectCard;

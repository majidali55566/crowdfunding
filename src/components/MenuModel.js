import React from "react";
import "./MenuModel.css";

function MenuModel() {
  return (
    <div>
      <div className="modal-background">
        <div className="modal-container">
          <div className="menu">
            <a href="/">About</a>
            <a href="/about">Discover</a>
            <a href="/contact">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuModel;

import React from "react";
import MenuModel from "./MenuModel";
import { useState } from "react";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [humbergerIsOpen, setHumbergerIsOpen] = useState(true);
  const [crossIsOpen, setCrossIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setHumbergerIsOpen(!humbergerIsOpen);
    setCrossIsOpen(!crossIsOpen);
  };
  return (
    <header>
      <nav className="logo-nav">
        <h2 className="logo">crowdfund</h2>
        <div className="destop-menu">
          <a href="/">About</a>
          <a href="/about">Discover</a>
          <a href="/contact">Get Started</a>
        </div>
        <button onClick={toggleMenu} type="button">
          {isOpen && <MenuModel isOpen={isOpen} toggleMenu={toggleMenu} />}
          {humbergerIsOpen && (
            <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
              <g fill="#FFF" fill-rule="evenodd">
                <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
              </g>
            </svg>
          )}
          {crossIsOpen && (
            <button>
              <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
                <g fill="#fff" fill-rule="evenodd">
                  <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
                  <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
                </g>
              </svg>
            </button>
          )}
        </button>
      </nav>
    </header>
  );
}

export default Header;

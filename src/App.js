import { useState } from "react";
import "./App.css";
import BackProjectCard from "./components/BackProjectCard";
import Button from "./components/Button";
import Header from "./components/Header";

const App = () => {
  const [backProjectOpened, SetBackProjectOpened] = useState(false);
  const handleBackThisProject = () => {
    SetBackProjectOpened(!backProjectOpened);
  };
  return (
    <>
      <Header />
      <main>
        <div className="main-container">
          <div className="product-intro-card">
            <div className="logo-m">
              <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle fill="#000" cx="28" cy="28" r="28" />
                  <g fill-rule="nonzero">
                    <path
                      d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z"
                      fill="#444"
                    />
                    <path
                      d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z"
                      fill="#FFF"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="grid-flow gap-2">
              <div className="product-intro-info">
                <p className="product-name">Mastercraft Bamboo Monitor Riser</p>
                <p className="info">
                  A beautifylly handcrafted monitor stand to reduce neck and eye
                  strain.
                </p>
              </div>
              <div className="save-to-favourite-container flex-group">
                <Button
                  onClick={handleBackThisProject}
                  text="Back this project"
                />
                {backProjectOpened && (
                  <BackProjectCard
                    handleBackThisProject={handleBackThisProject}
                  />
                )}

                <div className="favourite-bookmark">
                  <svg
                    width="56"
                    height="56"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <circle fill="#3db5ad" cx="28" cy="28" r="28" />
                      <path fill="white" d="M23 19v18l5-5.058L33 37V19z" />
                    </g>
                  </svg>
                  <p className="bookmark">Bookmark</p>
                </div>
              </div>
            </div>
          </div>
          <div className="statics-of-bakers-container">
            <div className="bakers-backed-in-days">
              <div className="number-of-statics-container">
                <p className="number-statics">$89,914</p>
                <p className="total-of">of $100,000 backed</p>
              </div>
              <hr />
              <div className="number-of-statics-container">
                <p className="number-statics">50,007</p>
                <p className="total-of">total backers</p>
              </div>
              <hr />
              <div className="number-of-statics-container">
                <p className="number-statics">56</p>
                <p className="total-of">days left</p>
              </div>
            </div>
            <div class="progress-container">
              <div class="progress-fill"></div>
            </div>
          </div>
          <div className="about-project-section">
            <div className="grid-flow gap-1">
              <p className="fs-1p2r fw-700 clr-neutral-900">
                About this project
              </p>
              <p>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
                platform that elevates your screen to a more comfortable viewing
                height. Placing your monitor at eye level has the potential to
                improve your posture and make you more comfortable while at
                work, helping you stay focused on the task at hand.
              </p>
              <p>
                Featuring artisan craftsmanship, the simplicity of design
                creates extra desk space below your computer to allow notepads,
                pens, and USB sticks to be stored under the stand.
              </p>
            </div>
            <div className="plege-option-container">
              <div className="stand-type-offer-container">
                <p className="clr-neutral-900 fw-700">Bamboo Stand</p>
                <p className="clr-primary-400 fw-500">Pledge $25 or more</p>
              </div>
              <p>
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you’ll be added to a
                special Backer member list.
              </p>
              <div className="left-number-select-reward">
                <div className="flex-group gap-1 align-items-center">
                  <p className="number-statics">101</p>
                  <p>left</p>
                </div>
                <Button text="Select Reward" />
              </div>
            </div>
            <div className="plege-option-container">
              <div className="stand-type-offer-container">
                <p className="clr-neutral-900 fw-700">Black Edition Stand</p>
                <p className="clr-primary-400 fw-500">Pledge $75 or more</p>
              </div>
              <p>
                You get a Black Special Edition computer stand and a personal
                thank you. You’ll be added to our Backer member list. Shipping
                is included.
              </p>
              <div className="left-number-select-reward">
                <div className="flex-group gap-1 align-items-center">
                  <p className="number-statics">64</p>
                  <p>left</p>
                </div>
                <Button text="Select Reward" />
              </div>
            </div>
            <div className="plege-option-container not-available-option">
              <div className="stand-type-offer-container">
                <p className="clr-neutral-900 fw-700">
                  Mahogany Special Edition
                </p>
                <p className="clr-primary-400 fw-500">Pledge $200 or more</p>
              </div>
              <p>
                You get two Special Edition Mahogany stands, a Backer T-Shirt,
                and a personal thank you. You’ll be added to our Backer member
                list. Shipping is included.
              </p>
              <div className="left-number-select-reward">
                <div className="flex-group gap-1 align-items-center">
                  <p className="number-statics">0</p>
                  <p>left</p>
                </div>
                <Button text="Out Of Stock" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;

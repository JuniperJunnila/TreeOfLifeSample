import React from "react";
import "./HomeBody.css";

export default function HomeBody({ appState }) {
  const { adminView } = appState.navState;
  const { homeState } = appState;
  const { body } = homeState;
  const { cards = [], editButtons } = body;
  let currentCards = [];

  const renderCards = () => {
    for (let i = 1; i <= editButtons.length; i++) {
      const currentCard = cards[i - 1];
      currentCards.push(
        <div key={`card ${i}`}>
          {adminView ? editButtons[i] : null}
          {currentCard}
        </div>
      );
    }
  };

  renderCards();

  return (
    <div className="m-md-3 p-md-1 d-flex flex-column text-dark">
      <div className="m-md-0 m-lg-2 text-center rounded row bg-info">
        <h1 className="p-md-3 font-weight-bold text-md-start">Welcome</h1>
      </div>
      <div className="row ">
        <div className="m-3 col col-lg-8 col-md-11 text-dark">
          {adminView ? editButtons[0] : null}
          {body.para}
        </div>
        <div className="m-4 rounded col text-center">{currentCards}</div>
      </div>
    </div>
  );
}

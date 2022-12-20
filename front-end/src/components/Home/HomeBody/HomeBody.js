import React from "react";
import { Row } from "react-bootstrap";
import bootstrapStyles from "../../../utils/BootstrapStyles/BootstrapStyles";

const { homeBody } = bootstrapStyles;
const { wrapper, h1Wrap, h1, p, cardsWrap } = homeBody;

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
    <div className={wrapper} id="wrapper">
      <div className={h1Wrap} id="h1Wrap">
        <h1 className={h1} id="h1">
          Welcome
        </h1>
      </div>
      <Row>
        <p className={p} id="p">
          {adminView ? editButtons[0] : null}
          {body.para}
        </p>
        <div className={cardsWrap} id="cardsWrap">{currentCards}</div>
      </Row>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import Scoreboard from './Scoreboard';
import cards from './cards';
import uniqid from 'uniqid';
import './game.css';

const Game = () => {
  const [currentScore, setCurrentScore] = useState(0);
  useEffect(() => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }, [currentScore]);

  const [bestScore, setBestScore] = useState(0);
  useEffect(() => {
    console.log('Best score updating');
    if (bestScore < currentScore) {
      setBestScore(bestScore + 1);
    }
  }, [currentScore, bestScore]);

  const handleClick = (e) => {
    let targetCard;
    cards.forEach((card) => {
      if (card.text === e.target.nextElementSibling.textContent) {
        targetCard = card;
      }
    });
    if (targetCard.clicked === false) {
      setCurrentScore((currentScore) => currentScore + 1);
      targetCard.clicked = true;
    } else {
      alert('Game over!');
      setCurrentScore(0);
      resetCards();
    }
  };

  const resetCards = () => {
    cards.forEach((card) => {
      card.clicked = false;
    });
  };

  return (
    <div>
      <Scoreboard score={currentScore} bestScore={bestScore} />
      <ul className="cards">
        {cards.map((card) => (
          <li key={uniqid()} >
            <figure onClick={handleClick}>
              <img src={card.imageUrl} alt="" />
              <figcaption>{card.text}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Game;

import React, { useState, useEffect } from 'react';
import Scoreboard from './Scoreboard';
import cards from './cards';
import uniqid from 'uniqid';

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
    if (bestScore < currentScore) {
      setBestScore(bestScore + 1);
    }
  }, [currentScore, bestScore]);

  async function handleClick(e) {
    try {
      let targetCard = await findCard(e);
      if (targetCard.clicked === false) {
        setCurrentScore(currentScore + 1);
        targetCard.clicked = true;
      } else {
        gameOver();
      }
    } catch (error) {
      alert('Oops, something went wrong.');
      console.log(error);
    }
  }

  const findCard = (e) => {
    for (const card of cards) {
      if (card.alt === e.target.alt) {
        return card;
      }
    }
  };

  const gameOver = () => {
    alert('Game over!');
    setCurrentScore(0);
    resetCards();
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
          <li key={uniqid()}>
            <img src={card.imageUrl} alt={card.alt} onClick={handleClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Game;

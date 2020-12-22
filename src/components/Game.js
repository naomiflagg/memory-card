import React, { useState, useEffect } from 'react';
import Scoreboard from './Scoreboard';
import Card from './Card';
import uniqid from 'uniqid';

const Game = () => {
  const [bestScore, incrementBestScore] = useState(0);
  const [currentScore, incrementCurrentScore] = useState(0);

  useEffect(() => {
    if (bestScore < currentScore) {
      incrementBestScore(bestScore + 1);
    }
  }, [currentScore, bestScore]);

  const handleClick = (clicked) => {
    if (clicked === false) {
      //clicked not working
      //shuffle not rendering though array is resorting
      incrementCurrentScore(currentScore + 1);
    } else {
      console.log('game over');
    }
  };

  const [cards, setCards] = useState([
    {
      checkClicked: handleClick,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png',
      text: 'tri'
    },
    {
      checkClicked: handleClick,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png',
      text: 'asdfasd'
    },
    {
      checkClicked: handleClick,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png',
      text: 'square'
    },
    {
      checkClicked: handleClick,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png',
      text: 'tri'
    },
    {
      checkClicked: handleClick,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png',
      text: 'tri'
    },
    {
      checkClicked: handleClick,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png',
      text: 'box'
    },
    {
      checkClicked: handleClick,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png',
      text: 'map'
    },
    {
      checkClicked: handleClick,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png',
      text: 'bean'
    },
    {
      checkClicked: handleClick,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png',
      text: 'tdagdri'
    },
    {
      checkClicked: handleClick,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png',
      text: 'triangel'
    },
    {
      checkClicked: handleClick,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png',
      text: 'tri'
    },
    {
      checkClicked: handleClick,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png',
      text: 'trbbbi'
    },
    {
      checkClicked: handleClick,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png',
      text: 'trdgaei'
    },
    {
      checkClicked: handleClick,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png',
      text: 'tritto'
    },
    {
      checkClicked: handleClick,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png',
      text: 'tri'
    },
    {
      checkClicked: handleClick,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png',
      text: 'trtoiei'
    }
  ]);

  useEffect(() => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    setCards(cards);
  },[currentScore, cards]);

  const CreateCards = () =>
    cards.map((card) => (
      <Card
        key={uniqid()}
        imageUrl={card.imageUrl}
        text={card.text}
        checkClicked={card.checkClicked}
      />
    ));

  // forEach((card) => {
  //   card.checkClicked = handleClick;
  // });

  return (
    <div>
      <Scoreboard score={currentScore} bestScore={bestScore} />
      <section className="cards">
        <CreateCards />
      </section>
    </div>
  );
};

export default Game;

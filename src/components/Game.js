import React, { useState, useEffect } from 'react';
import Scoreboard from './Scoreboard';
import Card from './Card';

const Game = () => {
  const [bestScore, incrementBestScore] = useState(0);
  const [currentScore, incrementCurrentScore] = useState(0);
  // useEffect(() => {
  //   shuffle = () => {
  //     //change cards order
  //   };
  // });

  const handleClick = (clicked) => {
    debugger;
    if (clicked === false) {
      incrementCurrentScore(currentScore + 1);
    } else {
      console.log('game over');
    }
    if (bestScore < currentScore) {
      incrementBestScore(bestScore + 1);
    }
  };

  return (
    <div>
      <Scoreboard score={currentScore} bestScore={bestScore} />
      <Card
        checkClicked={handleClick}
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png"
        text="tri"
      />
      <Card
        checkClicked={handleClick}
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png"
        text="square"
      />
      <Card
        checkClicked={handleClick}
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png"
        text="circle"
      />
      <Card
        checkClicked={handleClick}
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png"
        text="tri"
      />
      <Card
        checkClicked={handleClick}
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png"
        text="tri"
      />
      <Card
        checkClicked={handleClick}
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png"
        text="tri"
      />
      <Card
        checkClicked={handleClick}
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png"
        text="tri"
      />
      <Card
        checkClicked={handleClick}
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png"
        text="tri"
      />
      <Card
        checkClicked={handleClick}
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png"
        text="tri"
      />
      <Card
        checkClicked={handleClick}
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png"
        text="tri"
      />
      <Card
        checkClicked={handleClick}
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png"
        text="tri"
      />
      <Card
        checkClicked={handleClick}
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png"
        text="tri"
      />
      <Card
        checkClicked={handleClick}
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png"
        text="tri"
      />
      <Card
        checkClicked={handleClick}
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png"
        text="tri"
      />
      <Card
        checkClicked={handleClick}
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png"
        text="tri"
      />
      <Card
        checkClicked={handleClick}
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png"
        text="tri"
      />
    </div>
  );
};

export default Game;

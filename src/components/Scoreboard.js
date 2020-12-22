import React from 'react';

const Scoreboard = (props) => {
  return (
    <div>
      <p>Score: {props.score}</p>
      <p>Best score: {props.bestScore}</p>
    </div>
  );
};

export default Scoreboard;

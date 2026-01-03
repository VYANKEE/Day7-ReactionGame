import React from 'react';

const ScoreBoard = ({ lastScore, bestScore }) => {
  return (
    <div className="score-board">
      <div>Last: {lastScore ? `${lastScore} ms` : '-'}</div>
      <div style={{ color: '#f1c40f' }}>Best: {bestScore ? `${bestScore} ms` : '-'}</div>
    </div>
  );
};

export default ScoreBoard;
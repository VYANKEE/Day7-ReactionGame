import React, { useState, useRef } from 'react';
import './styles/globals.css';
import './styles/game.css';
import GameBox from './components/GameBox';
import ScoreBoard from './components/ScoreBoard';

function App() {
  // --- STATES ---
  const [gameState, setGameState] = useState('idle'); // idle, waiting, ready, early, finished
  const [reactionTime, setReactionTime] = useState(null);
  const [bestScore, setBestScore] = useState(() => {
    return localStorage.getItem('bestReactionTime') || null;
  });

  // --- REFS (Values jo re-render nahi karwati) ---
  const timeoutRef = useRef(null); // Timer ID store karne ke liye
  const startTimeRef = useRef(null); // Jab green hua tab ka time

  // --- GAME LOGIC ---

  const handleGameClick = () => {
    
    // 1. START GAME (Blue -> Red)
    if (gameState === 'idle' || gameState === 'finished' || gameState === 'early') {
      setGameState('waiting');
      setReactionTime(null);
      
      // Random delay between 1s (1000ms) and 4s (4000ms)
      const randomDelay = Math.floor(Math.random() * 3000) + 1000;

      timeoutRef.current = setTimeout(() => {
        setGameState('ready');
        startTimeRef.current = Date.now(); // Time note karo
      }, randomDelay);
    }

    // 2. TOO EARLY (Red -> Orange)
    else if (gameState === 'waiting') {
      clearTimeout(timeoutRef.current); // Timer roko
      setGameState('early');
    }

    // 3. SUCCESS CLICK (Green -> Blue Result)
    else if (gameState === 'ready') {
      const endTime = Date.now();
      const score = endTime - startTimeRef.current;
      
      setReactionTime(score);
      setGameState('finished');

      // Best Score Check
      if (!bestScore || score < bestScore) {
        setBestScore(score);
        localStorage.setItem('bestReactionTime', score);
      }
    }
  };

  return (
    <div className="game-container">
      <div style={{ marginBottom: '20px', opacity: 0.7 }}>
        <h2>Reaction Timer</h2>
      </div>

      <ScoreBoard lastScore={reactionTime} bestScore={bestScore} />
      
      <GameBox 
        state={gameState} 
        onClick={handleGameClick} 
        time={reactionTime}
      />

      <div style={{ marginTop: '30px', color: '#666', fontSize: '0.9rem' }}>
        Day 7 • Frontend Challenge
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import { Zap, Hand, Play, AlertCircle } from 'lucide-react';

const GameBox = ({ state, onClick, time }) => {
  
  // State ke hisaab se content decide karo
  let content = {
    idle: { icon: <Play size={60}/>, title: "Click to Start", sub: "Test your reflexes" },
    waiting: { icon: <Hand size={60}/>, title: "Wait for Green...", sub: "Do not click yet!" },
    ready: { icon: <Zap size={60}/>, title: "CLICK NOW!", sub: "" },
    early: { icon: <AlertCircle size={60}/>, title: "Too Early!", sub: "Click to try again" },
    finished: { icon: <Zap size={60}/>, title: `${time} ms`, sub: "Click to play again" }
  };

  const { icon, title, sub } = content[state];

  return (
    <div className={`game-box ${state}`} onClick={onClick}>
      <div style={{ marginBottom: '20px' }}>{icon}</div>
      <h1>{title}</h1>
      <p>{sub}</p>
    </div>
  );
};

export default GameBox;
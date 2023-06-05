import React from 'react';
import Player from './Player'; 
import players from './players'; 
import './App.css';

const PlayerList = () => {
  return (
    <div className="player-list-container">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayerList;

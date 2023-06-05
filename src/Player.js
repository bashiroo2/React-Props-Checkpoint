import React from 'react';
import Card from 'react-bootstrap/Card';
import './App.css';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div className="flip-box">
      <div className="flip-box-inner">
        <div className="flip-box-front">
          <Card className="player-card">
            <Card.Img variant="top" src={imageUrl} className="player-image" />
          </Card>
        </div>
        <div className="flip-box-back">
          <Card className="player-card">
            <Card.Body>
              <Card.Title className="player-name">{name}</Card.Title>
              <Card.Text className="player-details">
                <span className="player-info-title">Team:</span> {team}<br />
                <span className="player-info-title">Nationality:</span> {nationality}<br />
                <span className="player-info-title">Jersey Number:</span> {jerseyNumber}<br />
                <span className="player-info-title">Age:</span> {age}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
// the default Props
Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Unknown Team',
  nationality: 'Unknown Nationality',
  jerseyNumber: 'Unknown',
  age: 'Unknown',
  imageUrl: 'https://st.depositphotos.com/1898481/3884/i/600/depositphotos_38840419-stock-photo-silhouette.jpg',
};


export default Player;

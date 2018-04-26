import React, { Component } from 'react';
//import logo from './logo.svg';
import './score_keeper.css';
import Players from './players/players.js';

class ScoreKeeper extends Component {
  render() {
    return (
      <div id="score-kpr">
        <Players />
      </div>
    );
  }
}

export default ScoreKeeper;

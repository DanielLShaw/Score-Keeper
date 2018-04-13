import React, { Component } from 'react';
//import logo from './logo.svg';
import './score_keeper.css';

class ScoreKeeper extends Component {
  render() {
    return (
      <Players />
    );
  }
}

class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: Array(3).fill(null)
    };
  }
  render() {
    return (
      <div className="players">
        {this.renderPlayer(1)}
      </div>
    )
  }

  renderPlayer(i) {
    return (
      <Player value={i} onClick={this.handleClick} />
    )
  }

  handleClick() {
    alert("click");
  }
}

function Player(props) {
  return (
    <button className="player" onClick={props.onClick}>
      {props.value}
    </button>
  );
}


export default ScoreKeeper;

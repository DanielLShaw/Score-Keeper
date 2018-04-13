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
      players: [{ value: 0 }]
    };
  }
  render() {
    return (
      <div className="players">
        {this.renderPlayer(0)}
      </div>
    )
  }

  renderPlayer(i) {
    return (
      <Player value={this.state.players[i].value} onClick={() => this.handleClick(i)} />
    )
  }

  handleClick(i) {
    const players = this.state.players.slice();
    players[i].value += 1;
  }
}

class Player extends Component {
  render() {
    return (
      <button className="player" onClick={() => this.props.onClick()} >
        {this.props.value}
      </button>
    )
  }
}


export default ScoreKeeper;

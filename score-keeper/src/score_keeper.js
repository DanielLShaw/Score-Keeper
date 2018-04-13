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
      players: [{ value: 0 }, { value: 0 }]
    };
  }
  render() {
    var playerList = []
    for (var i = 0; i < this.state.players.length; i++) {
      playerList.push(this.renderPlayer(i));
    }

    return (
      <div className="players">
        {playerList}
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
    this.setState = { players: players }; //always set sat, never assign to this.state
    this.forceUpdate(); //this probably can be improved...
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

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
      players: [{ value: 9 }, { value: 99 }, { value: 999 }, { value: 9999 }, { value: 99999 }],
      increment: 1,
      buttonPressTimer: 0,
      reverseModeWait: 1000
    };
    this.reverseMode = this.reverseMode.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }
  render() {
    var playerList = [];
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
      <Player key={i.toString()} value={this.state.players[i].value} onClick={() => this.handleClick(i)} onmousedown={() => this.handleMouseDown()} onmouseup={() => this.handleMouseUp()} />
    )
  }

  handleClick(i) {
    const state = this.state;
    state.players.slice()[i].value += this.state.increment;
    this.setState(state);; //always set sat, never assign to this.state
    this.forceUpdate(); //this probably can be improved...
  }

  handleMouseDown() {
    const state = this.state;
    state.buttonPressTimer = setTimeout(this.reverseMode, this.state.reverseModeWait);
    this.setState(state);
  }


  handleMouseUp() {
    const state = this.state;
    state.buttonPressTimer = clearTimeout(state.buttonPressTimer);
    this.setState(state);
  }

  reverseMode() {
    const state = this.state;
    state.increment *= -1;
    this.setState(state);
  }

}

class Player extends Component {
  render() {
    return (
      <button className="player" onClick={() => this.props.onClick()} onMouseDown={() => this.props.onmousedown()} onMouseUp={() => this.props.onmouseup()}>
        {this.props.value}
      </ button>
    )
  }
}


export default ScoreKeeper;

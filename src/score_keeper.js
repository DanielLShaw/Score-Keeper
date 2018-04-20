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
      players: [{ value: 0, reverse: false }, { value: 0, reverse: false }, { value: 0, reverse: false }],
      increment: 1,
      buttonPressTimer: null,
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
      <Player key={i} data-id={i} class={(this.state.players[i].reverse ? 'player invert' : 'player')} value={this.state.players[i].value} onClick={() => this.handleClick(i)} onmousedown={() => this.handleMouseDown(i)} onmouseup={() => this.handleMouseUp()} touchstart={() => this.handleMouseDown(i)} touchend={() => this.handleMouseUp()} />
    )
  }

  handleClick(i) {
    const state = this.state;
    const sign = state.players[i].reverse ? -1 : 1
    state.players[i].value += this.state.increment * sign;
    this.setState(state); //always set sat, never assign to this.state
  }

  handleMouseDown(i) {
    const state = this.state;
    console.log(this.state.reverseModeWait)
    state.buttonPressTimer = setTimeout(function () { this.reverseMode(i) }.bind(this), this.state.reverseModeWait);
    this.setState(state);
  }


  handleMouseUp() {
    const state = this.state;
    state.buttonPressTimer = clearTimeout(state.buttonPressTimer);
    this.setState(state);
  }

  reverseMode(i) {
    const state = this.state;
    state.players[i].reverse = !state.players[i].reverse;
    this.setState(state);
  }

}

class Player extends Component {
  render() {
    return (
      <button id={this.props["data-id"]} className={this.props.class} onClick={() => this.props.onClick()} onMouseDown={() => this.props.onmousedown()} onMouseUp={() => this.props.onmouseup()} onTouchStart={() => this.props.onmousedown()} onTouchEnd={() => this.props.onmouseup()}>
        {this.props.value}
      </ button>
    )
  }
}


export default ScoreKeeper;

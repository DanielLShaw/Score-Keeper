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
      players: [{ value: 0, reverse: false, long_press_time: null }, { value: 0, reverse: false, long_press_time: null }, { value: 0, reverse: false, long_press_time: null }],
      increment: 1,
      reverseModeWait: 1500
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
      <Player key={i} data-id={i} class={(this.state.players[i].reverse ? 'player invert noselect' : 'player noselect')} value={this.state.players[i].value} onClick={() => this.handleClick(i)} onmousedown={() => this.handleMouseDown(i)} onmouseup={() => this.handleMouseUp(i)} touchstart={() => this.handleMouseDown(i)} touchend={() => this.handleMouseUp(i)} onmouseleave={() => this.handleMouseUp(i)} />
    )
  }

  handleClick(i) {
    const state = this.state;
    const sign = state.players[i].reverse ? -1 : 1
    state.players[i].value += this.state.increment * sign;
    state.players[i].long_press = false;
    this.setState(state); //always set sat, never assign to this.state
  }

  handleMouseDown(i) {
    const state = this.state;
    state.players[i].long_press_time = setTimeout(function () { this.reverseMode(i) }.bind(this), this.state.reverseModeWait);
    this.setState(state);
  }


  handleMouseUp(i) {
    const state = this.state;
    clearTimeout(state.players[i].long_press_time);
    this.setState(state);
  }

  reverseMode(i) {
    const state = this.state;
    clearTimeout(state.players[i].long_press_time);
    state.players[i].reverse = !state.players[i].reverse;
    this.setState(state);
  }

}

class Player extends Component {
  render() {
    return (
      <button id={this.props["data-id"]} className={this.props.class} onClick={() => this.props.onClick()} onMouseDown={() => this.props.onmousedown()} onMouseUp={() => this.props.onmouseup()} onTouchStart={() => this.props.onmousedown()} onTouchEnd={() => this.props.onmouseup()} onMouseLeave={() => this.props.onmouseup()}>
        {this.props.value}
      </ button>
    )
  }
}


export default ScoreKeeper;

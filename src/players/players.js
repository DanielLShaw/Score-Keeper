import React, { Component } from 'react';
import './players.css';
import Player from './player.js';
import Menu from '../menu/menu.js';

class Players extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
      unchanged: [],
      increment: 1,
      reverseModeWait: 1500,
      editMode: false
    };

    this.addPlayer();
    this.addPlayer();

    this.reverseMode = this.reverseMode.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.editPlayers = this.editPlayers.bind(this);
    this.savePlayers = this.savePlayers.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
  }
  render() {
    var playerList = [];
    for (var i = 0; i < this.state.players.length; i++) {
      playerList.push(this.renderPlayers(i));
    }

    return (
      <div>
        <Menu addPlayer={this.addPlayer} editPlayers={this.editPlayers} editMode={this.state.editMode} savePlayers={this.savePlayers} />
        <div className="players">
          {playerList}
        </div>
      </div>
    )
  }

  renderPlayers(i, name, color, bgColor) {
    return (
      <Player
        key={i}
        id={i}
        name={this.state.players[i].name}
        color={this.state.players[i].color}
        bgColor={this.state.players[i].bgColor}
        className={this.state.players[i].class}
        value={this.state.players[i].value}
        editMode={this.state.editMode}
        player={this.state.players[i]}
        handleEditChange={this.handleEditChange}
        onClick={() => this.handleClick(i)}
        onmousedown={() => this.handleMouseDown(i)}
        onmouseup={() => this.handleMouseUp(i)}
        touchstart={() => this.handleMouseDown(i)}
        touchend={() => this.handleMouseUp(i)}
        onmouseleave={() => this.handleMouseUp(i)} />
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
    state.players[i].class = state.players[i].reverse ? 'player invert noselect' : 'player noselect'
    this.setState(state);
  }

  addPlayer() {
    const state = this.state;
    const newPlayer = new Player()
    const updatedState = setDefaults(newPlayer.state, state.players.length)
    state.players.push(updatedState);
    state.unchanged.push(updatedState);
    this.setState(state);
  }

  editPlayers() {
    const state = this.state;
    state.editMode = !state.editMode;
    this.setState(state);
  }

  savePlayers() {
    alert("save")
    const state = this.state;
    state.players = state.unchanged
    this.setState(state);
  }

  handleEditChange(event) {
    var field = event.target.name;
    var playerId = event.target.dataset.playerId;
    var value = event.target.value;
    const state = this.state;
    state.players[playerId][field] = value;
    this.setState(state);
  }

}
function setDefaults(playerState, length) {
  var colors = [
    { bgColor: "#a53232", color: "#ffffff" },
    { bgColor: "#3232a5", color: "#ffffff" },
    { bgColor: "#32a575", color: "#000000" },
    { bgColor: "#dcd476", color: "#000000" }
  ];
  playerState.color = colors[length % colors.length].color;;
  playerState.bgColor = colors[length % colors.length].bgColor;;
  playerState.name = "Player " + (length + 1);
  return playerState;
}

export default Players;


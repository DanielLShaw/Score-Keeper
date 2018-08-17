import React, { Component } from 'react';
import './editor.css';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleChange(event) {

        this.props.handleEditChange(event);
    }

    render() {
        return (
            <form class={this.props.editMode ? "editor enabled" : "editor disabled"}>
                <label htmlFor={this.props.playerId + "_name"} >Player Name:</label>
                <input type="text" id={this.props.playerId + "_name"} data-player-id={this.props.playerId} defaultValue={this.props.player.name} onChange={this.handleChange.bind(this)} name="name"></input>
                <label htmlFor={this.props.playerId + "_colour"} >Colour</label>
                <input type="color" id={this.props.playerId + "_colour"} data-player-id={this.props.playerId} defaultValue={this.props.player.bgColor} onChange={this.handleChange.bind(this)} name="bgColor" ></input>
                <label htmlFor={this.props.playerId + "_text"}>Text</label>
                <input type="color" id={this.props.playerId + "_text"} data-player-id={this.props.playerId} defaultValue={this.props.player.color} onChange={this.handleChange.bind(this)} name="color"></input>
            </form >
        );
    }
}

export default EditForm;
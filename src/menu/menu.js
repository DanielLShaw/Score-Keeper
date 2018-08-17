import React, { Component } from 'react';
import './menu.css';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="menu">
                <button className={this.props.editMode ? "add-player disabled" : "add-player enabled"} onClick={() => this.props.addPlayer()}>
                    <i className="fas fa-user-plus" role="button" aria-label="Add Player" />
                </button>
                <button className="edit-player enabled" onClick={() => this.props.editPlayers()}>
                    <i className={this.props.editMode ? "fas fa-check" : "fas fa-user-edit"} role="button" aria-label="Edit Players" />
                </button>
            </div>
        )
    }
}

export default Menu;
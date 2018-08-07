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
                <button className="addPlayer" onClick={() => this.props.addPlayer()}>
                    <i className="fas fa-user-plus" role="button" aria-label="Add Player" />
                </button>
                <button className="editPlayers" onClick={() => this.props.editPlayers()}>
                    <i className="fas fa-user-edit" role="button" aria-label="Edit Players" />
                </button>
            </div>
        )
    }
}

export default Menu;
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
                <button className="addPlayer" onClick={() => this.props.addPlayer()}><i className="fas fa-user-plus"></i>

                </button>
            </div>
        )
    }
}

export default Menu;
import React, { Component } from 'react';



class Player extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0, reverse: false, long_press_time: null }
    }

    render() {
        return (
            <button id={this.props["data-id"]} className={this.props.class} onClick={() => this.props.onClick()} onMouseDown={() => this.props.onmousedown()} onMouseUp={() => this.props.onmouseup()} onTouchStart={() => this.props.onmousedown()} onTouchEnd={() => this.props.onmouseup()} onMouseLeave={() => this.props.onmouseup()}>
                {this.props.value}
            </ button>
        )
    }
}

export default Player;
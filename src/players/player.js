import React, { Component } from 'react';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = { reverse: false, long_press_time: null, name: null, color: null, bgColor: null, class: "player noselect", value: 0 }
    }

    render() {
        return (
            <div class="player">
                <button
                    id={this.props.id}
                    class={this.props.className}
                    onClick={() => this.props.onClick()}
                    onMouseDown={() => this.props.onmousedown()}
                    onMouseUp={() => this.props.onmouseup()}
                    onTouchStart={() => this.props.onmousedown()}
                    onTouchEnd={() => this.props.onmouseup()}
                    onMouseLeave={() => this.props.onmouseup()}
                    role="button"
                    aria-label="player"
                    style={{ backgroundColor: this.props.bgColor, color: this.props.color }}>
                    {this.props.value}
                </button>
                <p>{this.props.name}</p>
            </div >
        )
    }

}

export default Player;
import React from 'react';
import {cellSize} from '../../Config';

require('./style.less');

export default React.createClass({

    getDefaultProps: function () {
        return {
            position: {
                x: 0,
                y: 0
            },
            direction: 'east'
        }
    },

    _getDynamicStyling: function () {
        return {
            width: cellSize,
            height: cellSize,
            top: this.props.position.y * cellSize,
            left: this.props.position.x * cellSize
        };
    },

    render: function () {
        return (
            <div className="robot" style={this._getDynamicStyling()}>
                {this.props.direction}
            </div>
        )
    }
});

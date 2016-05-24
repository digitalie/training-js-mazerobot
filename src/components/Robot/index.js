import React from 'react';
import {cellSize} from '../../map';

require('./style.less');

export default React.createClass({

    getDefaultProps: function () {
        return {
            position: {
                x: 0,
                y: 0
            }
        }
    },

    _getDynamicStyling: function () {
        return {
            width: cellSize,
            height: cellSize,
            top: this.props.position.x * cellSize,
            left: this.props.position.y * cellSize
        };
    },

    render: function () {
        return (
            <div className="robot" style={this._getDynamicStyling()}></div>
        )
    }
});

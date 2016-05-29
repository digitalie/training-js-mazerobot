import React from 'react';
import {size} from '../../Config';

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
            width: size,
            height: size,
            top: this.props.position.y * size,
            left: this.props.position.x * size
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

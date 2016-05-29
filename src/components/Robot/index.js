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

    _getClasses: function() {
        return 'robot robot--' + this.props.direction;
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
            <div className={this._getClasses()} style={this._getDynamicStyling()}></div>
        )
    }
});

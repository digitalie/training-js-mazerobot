import React from 'react';
import {types, size} from '../../Config';

require('./style.less');

export default React.createClass({

    getDefaultProps: function () {
        return {
            type: 0
        }
    },

    _getType: function() {
        return types[this.props.type]
    },

    _getClasses: function() {
        return 'cell cell--' + this._getType();
    },

    _getDynamicStyling: function () {
        return {
            width: size,
            height: size
        };
    },

    render: function () {
        return (
            <div className={this._getClasses()} style={this._getDynamicStyling()}></div>
        )
    }
});

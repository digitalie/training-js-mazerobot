import React from 'react';
import {cellTypes, cellSize} from '../../map.js';

require('./style.less');

export default React.createClass({

    getDefaultProps: function () {
        return {
            type: 0
        }
    },

    _getType: function() {
        return cellTypes[this.props.type]
    },

    _getClasses: function() {
        return 'cell cell--' + this._getType();
    },

    _getDynamicStyling: function () {
        return {
            width: cellSize,
            height: cellSize
        };
    },

    render: function () {
        return (
            <div className={this._getClasses()} style={this._getDynamicStyling()}></div>
        )
    }
});

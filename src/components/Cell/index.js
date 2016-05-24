import React from 'react';
import {cellTypes} from '../../map.js';

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

    render: function () {
        return <div className={this._getClasses()}>
        </div>
    }
});

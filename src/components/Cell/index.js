import React from 'react';

require('./style.less');

export default React.createClass({

    getDefaultProps: function () {
        return {
            type: 'path'
        }
    },

    _getType: function() {
        switch (this.props.type) {
            case 1:
                return 'fence';
            case 0:
            default:
                return 'path';
        }
    },

    _getClasses: function() {
        return 'cell cell--' + this._getType();
    },

    render: function () {
        return <div className={this._getClasses()}>
            Cell
        </div>
    }
});

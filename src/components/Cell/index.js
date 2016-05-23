import React from 'react';

require('./style.less');

export default React.createClass({

    getDefaultProps: function () {
        return {
            type: 'path'
        }
    },

    _getClasses: function() {
        return 'cell cell-' + this.props.type;
    },

    render: function () {
        return <div className={this._getClasses()}>
            Hello
        </div>
    }
});

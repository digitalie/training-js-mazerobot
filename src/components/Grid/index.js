import React from 'react';

export default React.createClass({

    getDefaultProps: function () {
        return {
            alive: false
        }
    },

    _getState: function () {
        if (this.props.alive == 'true') {
            return 'Alive';
        } else {
            return 'Dead';
        }
    },

    render: function () {
        return <div class="cell">
            {this._getState()}
        </div>
    }
});

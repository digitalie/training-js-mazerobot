import React from 'react';

require('./style.less');

export default React.createClass({

    getDefaultProps: function () {
        return {
            from: 'console',
            message: ''
        };
    },

    render: function () {
        return (
            <div className="console-log">
                {this.props.from}: {this.props.message}
            </div>
        );
    }
});

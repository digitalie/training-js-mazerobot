import React from 'react';
import ConsoleLog from '../ConsoleLog';

require('./style.less');

export default React.createClass({

    getDefaultProps: function () {
        return {
            logs: []
        };
    },

    render: function () {
        return (
            <div className="console">
                {this.props.logs.map(log => {
                    return <ConsoleLog message={log} />
                })}
            </div>
        );
    }
});

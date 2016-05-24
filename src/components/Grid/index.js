import React from 'react';
import Cell from '../Cell'

require('./style.less');

export default React.createClass({

    getDefaultProps: function () {
        return {
            size: 10
        }
    },

    render: function () {
        let sizeArray = Array.from(new Array(this.props.size));
        return (
            <div className="grid">
                {sizeArray.map(function() {
                    return (
                        <div className="grid__row">
                            {sizeArray.map(function() {
                                return <Cell type="path" />;
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
});

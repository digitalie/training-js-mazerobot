import React from 'react';
import Cell from '../Cell'

require('./style.less');

export default React.createClass({

    getDefaultProps: function () {
        return {
            map: [[]]
        };
    },

    render: function () {
        return (
            <div className="grid">
                {this.props.map.map(function(row, rowId) {
                    return (
                        <div key={rowId} className="grid__row">
                            {row.map(function(cell, cellId) {
                                return <Cell key={String(rowId).concat(cellId)} type={cell} />;
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
});

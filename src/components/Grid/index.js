import React from 'react';
import Cell from '../Cell';
import {cellSize} from '../../map';

require('./style.less');

export default React.createClass({

    getDefaultProps: function () {
        return {
            map: [[]]
        };
    },

    _getDynamicStyling: function () {
        return {
            width: this.props.map.length * cellSize,
            height: this.props.map.length * cellSize
        };
    },

    render: function () {
        return (
            <div className="grid" style={this._getDynamicStyling()}>
                {this.props.map.map(function (row, rowId) {
                    return (
                        <div key={rowId} className="grid__row">
                            {row.map(function (cell, cellId) {
                                return <Cell key={String(rowId).concat(cellId)} type={cell}/>;
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
});

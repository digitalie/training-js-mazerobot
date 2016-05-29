import React from 'react';
import ReactDOM from 'react-dom';
import ReactInterval from 'react-interval';
import Grid from './components/Grid';
import Robot from './components/Robot';
import Controller from './Controller';
import {matrix} from './Config';

require('./style.less');

let App = React.createClass({
    getInitialState() {
        return {
            playback: {
                enabled: false,
                timeout: 1000,
                callback: this._moveRobot
            },
            robot: {
                position: {
                    x: 0,
                    y: 0
                },
                direction: 'east'
            }
        };
    },

    _toggleEnabled: function () {
        this.setState({
            playback: {
                enabled: !this.state.playback.enabled,
                timeout: this.state.playback.timeout,
                callback: this._moveRobot
            }
        });
    },

    _moveRobot: function () {
        this.setState({
            robot: Controller(this.state.robot)
        });
    },

    render: function () {
        return (
            <div id="root">
                <div id="field">
                    <Grid map={matrix}/>
                    <Robot {...this.state.robot} />
                </div>
                <div id="sidebar">
                    <button onClick={this._toggleEnabled}>Enable</button>
                </div>
                <ReactInterval {...this.state.playback} />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

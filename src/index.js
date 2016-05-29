import React from 'react';
import ReactDOM from 'react-dom';
import ReactInterval from 'react-interval';
import Grid from './components/Grid';
import Robot from './components/Robot';
import Console from './components/Console';
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
                direction: 'east',
                log: 'Just started'
            },
            logs: []
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
        let command = Controller(this.state.robot);
        this.state.logs.push(command.log);
        this.setState({
            robot: command,
            logs: this.state.logs
        });
    },

    render: function () {
        return (
            <div id="root" className="row">
                <div className="col-sm-6 panel panel-default">
                    <div className="panel-body">
                        <div id="field">
                            <Grid map={matrix}/>
                            <Robot {...this.state.robot} />
                        </div>
                    </div>
                </div>
                <div id="sidebar" className="col-sm-4 col-sm-offset-1 panel panel-default">
                    <div className="panel-body">
                        <button onClick={this._toggleEnabled}
                                className={this.state.playback.enabled ? 'btn btn-danger' : 'btn btn-success'}>{this.state.playback.enabled ? 'Stop' : 'Start'}</button>
                        <Console logs={this.state.logs} />
                    </div>
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

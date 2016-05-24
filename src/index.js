import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/Grid';
import Robot from './components/Robot';
import {matrix} from './Config';

require('./style.less');

let App = React.createClass({
    render: function () {
        return (
            <div id="root">
                <Grid map={matrix}/>
                <Robot />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

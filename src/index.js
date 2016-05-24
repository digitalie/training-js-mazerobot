import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/Grid';
import {gridMatrix} from './map.js';

let App = React.createClass({
    render: function () {
        return <div id="root">
            <Grid map={gridMatrix}/>
        </div>;
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

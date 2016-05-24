import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/Grid';
import Map from './map.json';

let App = React.createClass({
    render: function () {
        return <div id="root">
            <Grid map={Map} />
        </div>;
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

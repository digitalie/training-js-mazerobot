import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/Grid';

let App = React.createClass({
    render: function () {
        return <div id="root">
            <Grid size={10} />
        </div>;
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

import React from 'react';
import ReactDOM from 'react-dom';
import Cell from './components/Cell';

let App = React.createClass({
    render: function () {
        return <div id="root">
            <Cell type="path"/>
        </div>;
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

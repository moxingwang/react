import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {QueryList} from '../src/components/QueryOrder/QueryList';

function App() {
    return (
        <div>
            <QueryList/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('app'));

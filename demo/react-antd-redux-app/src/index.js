import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Alert} from 'antd';
import {QueryOrder} from '../src/components/QueryOrder/QueryOrder';

function App() {
    return (

        <div>
            <Alert
                message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
                type="warning"
            />
            <QueryOrder/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('app'));

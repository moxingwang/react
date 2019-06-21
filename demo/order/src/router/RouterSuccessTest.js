import React from 'react';
import AntdTest from './components/AntdTest';
import NumberList from './components/NumberList';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


const RouterSuccessTest = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                    <li>
                        <Link to="/users/">Users</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={AntdTest}/>
            <Route path="/about/" component={AntdTest}/>
            <Route path="/users/" component={NumberList}/>
        </div>
    </Router>
);

export default RouterSuccessTest;
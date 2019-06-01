import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Reducers';
import App from './Component/App';
import GamePage from './Component/GamePage';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
    <Provider store = {createStore(reducer)}>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/GamePage/" component={GamePage} />
            </Switch>
        </Router>
    </Provider>
    ,
    document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"

import 'antd/dist/antd.css';

import Home from './us';
import store from "./store";

const App = (
    <Provider store={store}>
        <Home/>
    </Provider>
)

ReactDOM.render(
    App,
    document.getElementById('breadth')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"

import 'antd/dist/antd.css';

import SP500 from './us';
import store from "./store";

const App = (
    <Provider store={store}>
        <SP500/>
    </Provider>
)

ReactDOM.render(
    App,
    document.getElementById('breadth')
);

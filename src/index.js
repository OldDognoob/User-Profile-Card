import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import {store} from './store';

const render =() =>ReactDOM.render(<App />,document.getElementById('app'));
store.subscribe(render);
render();



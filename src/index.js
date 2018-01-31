import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Connexion = () => (
    <div>
        <App/>
    </div>    
)

ReactDOM.render(
    (<BrowserRouter>
        <Route path='/' component={Connexion}/> 
    </BrowserRouter>)
    , document.getElementById('root'));
registerServiceWorker();

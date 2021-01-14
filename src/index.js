import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* font code from http://skyentific.me/adding-fonts-to-create-react-app/*/
import './fonts/ProximaNova-Regular.ttf';
import './fonts/ProximaNova-Reg-It.otf';
import './fonts/ProximaNova-Semibold.ttf';
import './fonts/ProximaNova-Bold.otf';
import './fonts/ProximaNova-Extrabld.ttf';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* font code from http://skyentific.me/adding-fonts-to-create-react-app/*/
import './fonts/WorkSans-Italic-VariableFont_wght.ttf';
import './fonts/WorkSans-VariableFont_wght.ttf';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

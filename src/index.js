import React , { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style'
import Router from './router';
import * as serviceWorker from './serviceWorker';

const Apps = () => {
    return (
      <Fragment>
        <GlobalStyle />
        <Router />
      </Fragment>
    )
}

ReactDOM.render(<Apps />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

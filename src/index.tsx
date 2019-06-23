import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BASE_URL } from 'constants/url';
import Pokemon from 'pages/Pokemon';
import AllPokemons from 'pages/AllPokemons';
import * as serviceWorker from './serviceWorker';

import 'normalize.css';
import 'styles/base.scss';

ReactDOM.render(
  <Router basename={BASE_URL}>
    <Switch>
      <Route exact path="/" component={AllPokemons} />
      <Route path="/pokemon/:nameOrId" component={Pokemon} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

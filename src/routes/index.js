import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import history from './history';

import Main from '../pages/Main';
import SignIn from '../pages/SignIn';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route exact path="/" component={Main} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;

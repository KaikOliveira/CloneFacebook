import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import Welcome from '../pages/Welcome';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/welcome" component={Welcome} />
      </Switch>
    </BrowserRouter>
  )
}
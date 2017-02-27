import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';
import AppLayout from './main/AppLayout';
import Home from './main/Home';
import NewsIndex from './news/NewsIndex';

/* eslint react/prop-types:0 */
export default ({ history }) => (
  <Router history={history}>
    <Route path="/site" component={AppLayout}>
      <IndexRedirect to="main" />
      <Route path="main" component={Home} />
      <Route path="news">
        <IndexRedirect to="index" />
        <Route path="index" component={NewsIndex} />
      </Route>
    </Route>
  </Router>
);

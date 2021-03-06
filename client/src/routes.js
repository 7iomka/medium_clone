import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalFeed from 'pages/globalFeed';
import Article from 'pages/article';
import Auth from 'pages/auth';

export default () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact />
      <Route path="/articles/:slug" component={Article} />
      <Route path="/login" component={Auth} />
      <Route path="/register" component={Auth} />
    </Switch>
  );
};

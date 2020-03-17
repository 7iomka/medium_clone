import React from "react";
import { Switch, Route } from 'react-router-dom';
import GlobalFeed from 'pages/globalFeed';
import Article from 'pages/article';

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact></Route>
      <Route path="/articles/:slug" component={Article} exact></Route>
    </Switch>
  );
};

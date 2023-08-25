import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Scene from './Scene';
import SceneList from './SceneList';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/scenes" component={SceneList} />
        <Route path="/scene/:id" component={Scene} />
        {/* Additional routes can be added here */}
      </Switch>
    </Router>
  );
}

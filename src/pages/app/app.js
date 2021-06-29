import React from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { StyledApp } from 'pages/app/styled-app';
import PageSearch from 'pages/search/search';
import PagePlaylist from 'pages/playlist/playlist';

const App = () => {
  return (
    <Router>
      <StyledApp>
        <Switch>
          <Route path="/" exact component={PageSearch} />
          <Route path="/playlist" exact component={PagePlaylist} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </StyledApp>
    </Router>
  );
};

export default App;

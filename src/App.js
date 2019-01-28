import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Header from './components/Header';
import DashboardContainer from './containers/DashboardContainer';
import PostContainer from './containers/PostContainer';
import UserContainer from './containers/UserContainer';
import DataService from './services/dataService';

class App extends Component {
  dataService = new DataService();

  render() {
    return (
      <Router>
        <div>
          <Header />
            <div className="container">
            <Switch>
                <Route exact path="/page/:page" component={DashboardContainer}  />
                <Route path="/user/:id" component={UserContainer} />
                <Route path="/post/:id" component={PostContainer} />
                <Redirect from="/" to="/page/1" />
            </Switch>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;

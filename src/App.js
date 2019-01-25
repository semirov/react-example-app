import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import getUsersFromJsonPlaceholder from './api/getUsersFromJsonPlaceholder';
import getPostsFromJsonPlaceholder from './api/getPostsFromJsonPlaceholder';
import store from './store/store';
import * as actionTypes from './store/action-types';

import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/dashboard/Dashboard';
import PostDetail from './components/PostDetail';
import UserDetail from './components/UserDetail';

class App extends Component {

  componentDidMount() {
    this.getUserList();
    this.getPostsList();
  }

  async getUserList() {
    const users = await getUsersFromJsonPlaceholder();
    store.dispatch({type: actionTypes.ADD_USERS, users })
  }

  async getPostsList() {
    const posts = await getPostsFromJsonPlaceholder();
    store.dispatch({type: actionTypes.ADD_POSTS, posts })
  }


  render() {
    return (
      <Router>
        <div>
          <Header />
            <div className="container">
              <Switch>
                <Route path="/" component={Dashboard}  />
                <Route path="/user/:id" component={UserDetail} />
                <Route path="/post/:id" component={PostDetail} />
                <Route component = {Dashboard}/>
              </Switch>
            </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

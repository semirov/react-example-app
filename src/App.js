import React, { Component } from 'react';
import getUsersFromJsonPlaceholder from './api/getUsersFromJsonPlaceholder';
import getPostsFromJsonPlaceholder from './api/getPostsFromJsonPlaceholder';

import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/dashboard/Dashboard';

// for test
import PostDetail from './components/PostDetail';
import UserDetail from './components/UserDetail';

class App extends Component {
  state = {
    posts: [],
    users: []
  };
  componentDidMount() {
    this.getUserList();
    this.getPostsList();
  }

  async getUserList() {
    const userList = await getUsersFromJsonPlaceholder();
    const newState = Object.assign({}, this.state, {
      users: userList
    });
    this.setState(newState);
  }

  async getPostsList() {
    const postsList = await getPostsFromJsonPlaceholder();
    const newState = Object.assign({}, this.state, {
      posts: postsList
    })
    this.setState(newState);
  }


  render() {
    return (
      <div>
        <div className="container">
          <Header />
          <div className="container">
            <Dashboard />
          </div>

          <div className="container">
            <PostDetail />
          </div>
          <div className="container">
            <UserDetail />
          </div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

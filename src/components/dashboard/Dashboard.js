import React, { Component } from 'react';
import Paginator from './Paginator';
import PostCard from './PostCard';


class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1 className="my-4">
          Title
        </h1>
        <div className="row">
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          
        </div>
        <Paginator />
      </div>

    );
  }
}

export default Dashboard;

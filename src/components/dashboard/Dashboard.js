import React, { Component } from 'react';
import Paginator from './Paginator';
import PostCard from './PostCard';


class Dashboard extends Component {

  getPostCardList() {
    const posts = this.props.posts;
    if(posts.length === 0) {
      return <p>Loading....</p>
    }
    return this.props.posts.map(post => {
      return <PostCard key = {post.id} post = {post}/>
    });
  }

  render() {
    return (
      <div>
        <h1 className="my-4">
          Posts
        </h1>
        <div className="row">
            {this.getPostCardList()}
        </div>
        <Paginator />
      </div>

    );
  }
}

export default Dashboard;

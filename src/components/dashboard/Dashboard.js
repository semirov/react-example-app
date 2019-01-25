import React, { Component } from 'react';
import PostCard from './PostCard';
import InfiniteScroll from 'react-infinite-scroll-component';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        posts: [],
        hasMore: true
    };
  }

  testPosts = [1];
  getPostCardList() {
    const posts = this.props.posts;
    if(posts.length === 0) {
      return <p>Loading....</p>
    }
    return this.props.posts.map(post => {
      return <PostCard key = {post.id} post = {post}/>
    });
  }

  fetchMoreData() {
    console.log('loadData');
  }

  render() {
    if(this.props.posts.length === 0) {
      return <h4>Loading......</h4>
    }
    return (
      <div>
        <h1 className="my-4">Posts</h1>
        <div className="row">
            {/* {this.getPostCardList()} */}

            <InfiniteScroll
              dataLength={this.props.posts.length}
              next={this.fetchMoreData}
              hasMore={true}
              loader={<h4>Loading...</h4>}>
              <div>
                <p>test123 {this.props.posts.length}</p>
              </div>
            </InfiniteScroll>
        </div>
      </div>

    );
  }
}

export default Dashboard;

import React, { Component } from 'react';
import PostCard from './PostCard';
import InfiniteScroll from 'react-infinite-scroller';
import  ReactDOM  from 'react-dom';

class Dashboard extends Component {


  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasMoreItems: true,
      postPerPage: 6,
      loadPage: this.props.match.params.page
    };
  }
  componentDidMount() {
    this.loadPosts.call(this, this.state.loadPage);
  }

  componentDidUpdate() {
    if(this.state.posts.length === 0) {
      this.loadPosts.call(this, this.state.loadPage)
    } 
  }


  loadPosts = (page) => {
    let posts = this.props.posts.slice(0, this.state.postPerPage * page).map(post => {
      return <PostCard key={post.id} post={post}  />
    });
    if (posts.length !== 0) {
      this.setState({
        posts: posts,
        hasMoreItems: this.state.posts.length < this.props.posts.length,
      });
      let pageNum = Math.floor(this.state.posts.length / this.state.postPerPage);
      pageNum = pageNum == 0 ? page : pageNum;
      this.props.history.push('/page/' + pageNum);
    }
  }


  render() {
    const loader = <div className="loader" key={0}>Loading ...</div>
    return (
      <div>
        <h1 className="my-4">
          Posts
        </h1>
        <InfiniteScroll
          pageStart={Number(this.props.match.params.page)  || 1}
          loadMore={this.loadPosts}
          hasMore={this.state.hasMoreItems}
          loader={loader}
          initialLoad={false}
        >
          <div className="row">
            {this.state.posts}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default Dashboard;

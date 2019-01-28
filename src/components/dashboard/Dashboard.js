import React, { Component } from 'react';
import PostCard from './PostCard';
import InfiniteScroll from 'react-infinite-scroller';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasMoreItems: true,
      showedPostCount: 0,
      postPerPage: 6,
      loadPage: this.props.match.params.page
    };
  }


  loadPosts = (page) => {
    let posts = this.props.posts.slice(0, this.state.postPerPage * page).map(post => {
      return <PostCard key={post.id} post={post} ref = {React.createRef()} />
    });
    if (posts.length !== 0) {
      this.setState({
        posts: posts,
        showedPostCount: posts.length,
        hasMoreItems: posts.length < this.props.posts.length,
        currentPage: page
      });
      this.props.history.push('/page/' + page);
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
          pageStart={Number(this.props.match.params.page)}
          loadMore={this.loadPosts}
          hasMore={this.state.hasMoreItems}
          loader={loader}
          initialLoad={true}
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

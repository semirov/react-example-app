import React, { Component } from 'react';
import PostCard from './PostCard';
import InfiniteScroll from 'react-infinite-scroller';
import  ReactDOM  from 'react-dom';

class Dashboard extends Component {

  postCardRefs;

  constructor(props) {
    super(props);
    this.postCardRefs = [];
    this.state = {
      posts: [],
      hasMoreItems: true,
      postPerPage: 6,
      loadPage: Number(this.props.match.params.page) || 1,
      currentPage: 0,
      firstNavigateComplete: false
    };
  }
  componentDidMount() {
    // firt initial post load
    this.initialLoad(true);
  }

  componentDidUpdate() {
    // initiall call pageloader and navigate to page if needed
    this.initialLoad();
    this.navigateToPostIfPageIsPresent();
  }


  initialLoad(checkIfExist = false) {
    if(this.state.posts.length === 0 || checkIfExist) {
      this.loadPosts.call(this, this.state.loadPage)
    } 
  }

  navigateToPostIfPageIsPresent() {
    // get post index in refArray
    let index  = this.state.loadPage * this.state.postPerPage - (this.state.postPerPage - 1);
    // if the page number is greater than the maximum
    if (index > this.postCardRefs.length && this.state.loadPage !== 1) {
      index = this.postCardRefs.length - 1;
    }
    let cardRef = this.postCardRefs[index];
    // if first navigation not complete
    if (cardRef && !this.state.firstNavigateComplete) {
      let node = ReactDOM.findDOMNode(cardRef);
      node.scrollIntoView({block: 'end', behavior: 'smooth'});
      this.setState({ firstNavigateComplete: true });
    }
  }


  loadPosts = (page) => {
    let posts = this.props.posts.slice(0, this.state.postPerPage * page).map(post => {
      return <PostCard key={post.id} post={post} ref = {(ref) => this.postCardRefs[post.id] = ref}  />
    });
    if (posts.length !== 0) {
      let pageNum = Math.floor(this.state.posts.length / this.state.postPerPage);
      pageNum = pageNum == 0 ? page : pageNum;
      this.props.history.push('/page/' + pageNum);
      this.setState({
        posts: posts,
        hasMoreItems: this.state.posts.length < this.props.posts.length,
        currentPage: pageNum
      });
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

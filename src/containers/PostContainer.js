import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostDetail from '../components/PostDetail';



class PostContainer extends Component{

  render() {
    return <PostDetail {...this.props} posts={this.props.posts} postId = {this.props.match.params.id} />
  }
};



const mapStateToProps = function(store) {
  return {
    posts: store.postState.posts
  };
};


export default connect(mapStateToProps)(PostContainer);
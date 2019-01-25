import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dasboard from '../components/dashboard/Dashboard'

class DashboardContainer extends Component{

  render() {
    return <Dasboard posts={this.props.posts} />
  }

};

const mapStateToProps = function(store) {
  return {
    posts: store.postState.posts
  };
};

export default connect(mapStateToProps)(DashboardContainer);
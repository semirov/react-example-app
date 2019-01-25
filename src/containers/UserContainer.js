import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserDetail from '../components/UserDetail';

class UserContaner extends Component{

  render() {
    return <UserDetail {...this.props} users={this.props.users} userId = {this.props.match.params.id} />
  }
};

const mapStateToProps = function(store) {
  return {
    users: store.userState.users
  };
};


export default connect(mapStateToProps)(UserContaner);
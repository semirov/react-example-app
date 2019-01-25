import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PostCard extends Component {

    getUserName() {
        const post = this.props.post;
            return 'by ' + post.user.name + ' (' + post.user.username + ')';
    }

    render() {
        return (
            <div className="col-lg-6 card-post-item">
                <div className="card h-100">
                    <h5 className="card-header">{this.props.post.title}</h5>
                    <div className="card-body">
                        <p className="card-text">{this.props.post.body}</p>

                        <div className="row  align-items-end">
                            <div className="col-md-6">
                                <Link to={'/post/'+ this.props.post.id}>Read more</Link>
                            </div>
                            <div className="col-md-6">
                                <small className="text-right">
                                        {this.getUserName()}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostCard;

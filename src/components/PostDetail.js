import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PostDetail extends Component {

    getPost() {
        const postList = this.props.posts;
        const postId = this.props.postId;
        const post = postList.filter(post => post.id == postId)[0];
        return post;
    }

    render() {
        const post = this.getPost();
        if (post) {
            return (
                <div className='container user-detail'>
                    <div>
                        <h1 className="my-4">
                            {post.title}
                        </h1>
                        <p>
                            {post.body}
                        </p>
                        <p>
                            <Link to={"/user/"+ post.userId} className="nav-link">by {post.user.name} ({post.user.username})</Link>
                        </p>
                    </div>
                    <div>
                        <button
                        onClick={this.props.history.goBack}
                        type="button" className="btn btn-outline-secondary">go back</button>
                    </div>
                </div>
            );
        }
        return <div className='container user-detail'><p>Loading...</p> </div>
        
    }
}

export default PostDetail;

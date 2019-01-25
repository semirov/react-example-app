import React, { Component } from 'react';

class PostDetail extends Component {
    render() {
        return (
            <div className='container user-detail'>
                <div>
                    <h1 className="my-4">
                        Post title
                    </h1>
                    <p>
                        post body
                    </p>
                    <p>
                        <a href="#">by name (username)</a>
                    </p>
                </div>
                <div>
                    <button type="button" className="btn btn-outline-secondary">go back</button>
                </div>
            </div>
        );
    }
}

export default PostDetail;

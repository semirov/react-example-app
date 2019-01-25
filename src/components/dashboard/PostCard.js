import React, { Component } from 'react';

class PostCard extends Component {
    render() {
        return (
            <div className="col-lg-6 card-post-item">
                <div className="card h-100">
                    <h5 className="card-header">Post title</h5>
                    <div className="card-body">
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>

                        <div className="row  align-items-end">
                            <div className="col-md-6">
                                <a href="#" className="card-link">Read more</a>
                            </div>
                            <div className="col-md-6">
                                <small className="text-right">
                                    by Name (username looooooooong teeeeeeeext)
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

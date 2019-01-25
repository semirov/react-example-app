import React, { Component } from 'react';

class UserDetail extends Component {
    render() {
        console.log(this.props);
        return (
            <div className='container post-detail'>
                <div>
                    <h1 className="my-4">
                        User detail (username)
                    </h1>
                    <p>
                        name
                    </p>
                    <p>
                        email
                    </p>
                    <p>
                        website
                    </p>
                </div>
                <div>
                    <button type="button" className="btn btn-outline-secondary">go back</button>
                </div>
            </div>
        );
    }
}

export default UserDetail;

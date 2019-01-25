import React, { Component } from 'react';

class UserDetail extends Component {
    getUser() {
        const userList = this.props.users;
        const userId = this.props.userId;
        const user = userList.filter(user => user.id == userId)[0];
        return user;
    }
    render() {
        const user = this.getUser();
        console.log(user);
        if(user) {
            return (
                <div className='container post-detail'>
                    <div>
                        <h1 className="my-4">
                            @{user.username} ({user.name})
                        </h1>
                        <dl className="row">
                            <dt className="col-sm-3">Name</dt>
                            <dd className="col-sm-9">{user.name}</dd>

                            <dt className="col-sm-3">Email</dt>
                            <dd className="col-sm-9">{user.email}</dd>

                            <dt className="col-sm-3">Website</dt>
                            <dd className="col-sm-9">{user.website}</dd>
                        </dl>
                    </div>
                    <div>
                        <button
                            onClick={this.props.history.goBack}
                            type="button" className="btn btn-outline-secondary">go back
                        </button>
                    </div>
                </div>
            );

        }
        return <div className='container user-detail'><p>Loading...</p> </div>
    }
}

export default UserDetail;

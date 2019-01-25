import getUsersFromJsonPlaceholder from '../api/getUsersFromJsonPlaceholder';
import getPostsFromJsonPlaceholder from '../api/getPostsFromJsonPlaceholder';
import store from '../store/store';
import * as actionTypes from '../store/action-types';

class DataService {
    constructor(){
        this.getData();
    }

    async getData() {
        const users = await getUsersFromJsonPlaceholder();
        const posts = await getPostsFromJsonPlaceholder();
        const postWithUser = posts.map(post => {
            let user = users.filter(user => user.id === post.userId)[0];
            post.user = user;
            return post;
        });

        this.dispatchStore(users, postWithUser);
    }

    getStore() {
        return store;
    }

    dispatchStore(users, posts) {
        store.dispatch({type: actionTypes.ADD_USERS, users })
        store.dispatch({type: actionTypes.ADD_POSTS, posts })
    }

}


export default DataService;
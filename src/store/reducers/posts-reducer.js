import * as actionTypes from '../action-types';

const initialState = {
    posts: []
}

const postReducer = function(state = initialState, action) {
    if(action.type === actionTypes.ADD_POSTS) {
        return Object.assign({}, state, { posts: action.posts });
    }
    return state;
}

export default postReducer;
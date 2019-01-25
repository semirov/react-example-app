import * as actionTypes from '../action-types';


const initialState = {
    users: []
}

const userReducer = function(state = initialState, action) {
    if(action.type === actionTypes.ADD_USERS) {
        return Object.assign({}, state, { users: action.users });
    }
    return state;
}

export default userReducer;
import { createStore, combineReducers } from 'redux';

import postReducer from './reducers/posts-reducer';
import userReducer from './reducers/users-reducer';

const reducers = combineReducers({
    postState: postReducer,
    userState: userReducer
  });
  
  const store = createStore(reducers);

  export default store;
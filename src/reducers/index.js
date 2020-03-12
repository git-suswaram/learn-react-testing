import { combineReducers } from "redux";
import posts from '../reducers/posts/reducer'
const RootReducer = combineReducers({
    posts
});

export default RootReducer;

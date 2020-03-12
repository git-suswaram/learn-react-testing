import { types } from "../../../actions/types";
import postsReducer from '../reducer';
describe("Posts Reducer", () => {

    it("should return default state when action does not match", () => {
        
        // pass state as undefined so that default empty array state is considered
        // pass empty object '{}' for action to ensure it does not match any values from types

        const newState = postsReducer(undefined, {}); 
        expect(newState).toEqual([]);
    });

    it("should return new state corresponding to recived action-type", () => {
        const posts = [{title: 'Test 1'}, {title: 'Test 2'}, {title: 'Test 3'}];
        const newState = postsReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        });
        expect(newState).toEqual(posts);
    });

});

import { combineReducers } from "redux";
import postReducers from "../postReducers/postReducers"


// rootReducer is a place where you want to combine your reducers using combineReducers. Like you can see
// here we introduced postReducers which will have all the postReducers logic. 
const rootReducer = combineReducers({
    posts: postReducers
})
// We are exporting the type of the reducer as well so that we can use it for typescript
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

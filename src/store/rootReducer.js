import candidateReducer from "./reducers/candidateReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    candidate:candidateReducer
})
export default rootReducer;
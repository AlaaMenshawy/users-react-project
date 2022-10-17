import { combineReducers } from "redux";
import {ListUsers} from "./users-reducer";


let rootUsersReducer =  combineReducers({
    ListUsers : ListUsers
});

export default rootUsersReducer;
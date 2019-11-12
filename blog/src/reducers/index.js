import {combineReducers} from "redux"
import postsreducer from "./postsreducer"
import userReducer from "./usersReducer"





















export default combineReducers(
    {posts:postsreducer,
        users:userReducer
    }
    )
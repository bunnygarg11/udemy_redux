import Jsonplaceholder from "../apis"



export const fetchPosts=()=> async dispatch=>{
        const response=await Jsonplaceholder.get("/posts")


        dispatch({type:"FETCH_POSTS",payload:response})
    }

import Jsonplaceholder from "../apis"


export const fetchPosts=()=>{
    return async function(dispatch,getState){
        const response=await Jsonplaceholder.get("/posts")


        dispatch({tyoe:"FETCH_POSTS",payload:response})
    }
}
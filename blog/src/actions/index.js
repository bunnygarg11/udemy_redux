
import _ from "lodash"
import Jsonplaceholder from "../apis/jsonPlaceholder"
import jsonPlaceholder from "../apis/jsonPlaceholder"
// import jsonPlaceholder from "../apis/jsonPlaceholder";
// import jsonPlaceholder from "../apis/jsonPlaceholder"



export const fetchPosts=()=> async dispatch=>{
        const response=await Jsonplaceholder.get("/posts")


        dispatch({type:"FETCH_POSTS",payload:response.data})
    }
// export const fetchUser=(id)=>{

//     return async(dispatch)=>{
//         const response= await jsonPlaceholder.get(`/users/${id}`)

//         dispatch({type:"FETCH_USER",payload:response.data})
//     }
// }

// export const fetchUser = id => async dispatch => {
//     const response = await Jsonplaceholder.get(`/users/${id}`);
  
//     dispatch({ type: 'FETCH_USER', payload:response.data });
//   };

const _fetchUser=_.memoize(async(id,dispatch)=>{
    const response=await jsonPlaceholder.get(`/users/${id}`)
    dispatch({type:"FETCH_USER",payload:response.data})
})

export const fetchUser=id=>dispatch=>{
    _fetchUser(id,dispatch)
}

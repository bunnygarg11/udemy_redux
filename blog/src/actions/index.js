
import _ from "lodash"
import Jsonplaceholder from "../apis/jsonPlaceholder"
import jsonPlaceholder from "../apis/jsonPlaceholder"
// import jsonPlaceholder from "../apis/jsonPlaceholder";
// import jsonPlaceholder from "../apis/jsonPlaceholder"

export const FetchPostsAndUsers=()=>async (dispatch,getState)=>{
    await dispatch(fetchPosts())
    // const userIds=_.uniq(_.map(getState().posts,"userId"))
    // userIds.forEach(id=>dispatch(fetchUser(id)))
    _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id=>dispatch(fetchUser(id)))
    .value()
}
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

export const fetchUser = id => async (dispatch,getState) => {
    const response = await Jsonplaceholder.get(`/users/${id}`);
  
    dispatch({ type: 'FETCH_USER', payload:response.data });
    // console.log(getState())
  };

// const _fetchUser=_.memoize(async(id,dispatch)=>{
//     const response=await jsonPlaceholder.get(`/users/${id}`)
//     dispatch({type:"FETCH_USER",payload:response.data})
// })

// export const fetchUser=id=>dispatch=>{
//     _fetchUser(id,dispatch)
// }

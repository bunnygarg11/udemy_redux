import React from "react"
import {connect} from "react-redux"

import {fetchPosts } from "../actions"

class PostList extends React.Component{
    componentDidMount(){

        this.props.fetchPosts()
        console.log(this.props)
    }
    render(){
        return (
            <div>POSTLIST</div>
        )
    }
}
const mapStatetoProps=(state)=>{

    return {posts:state.posts}
}
export default connect(mapStatetoProps,{fetchPosts})(PostList)
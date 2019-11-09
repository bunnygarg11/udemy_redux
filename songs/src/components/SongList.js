import React from "react"
import {connect  } from "react-redux"
import {SelectSong} from "../actions"

class SongList extends React.Component{
    renderList(){
        return this.props.songs.map((song)=>{
        return (
            <div className="item" key={song.title}>
                <div className="right floated content">
                    <button className="ui button primary"onClick={()=>this.props.SelectSong(song)}>
                        select
                    </button>
                </div>
        <div className="content">{song.title}</div>

            </div>
        )
        })
    }
    render(){
        console.log(this.props)
        return (<div className="ui divided list">
            {this.renderList()}
        </div>)
    }
}
const mapStatetoProps=(state)=>{
    console.log(state)
    // return {
    //     songs:state.songs
    // }
    return {
        songs:state.songs
    }
}

export default connect(mapStatetoProps,{SelectSong})(SongList)
// export default connect(mapStatetoProps)(SongList)

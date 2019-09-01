import React, {Component} from 'react'
import {connect} from 'react-redux'
import {SongSelector} from '../actions'
class SongList extends Component{
    constructor(props){
        super(props)
        this.songsList = this.songsList.bind(this)
    }
    songsList(songObj){
        return songObj.map((song)=>{
            return(
                <div key={song.title} className="item">
                    <div className ="right floated content">
                        <button className = "ui button primary"
                            onClick={()=>{this.props.SongSelector(song)}}>
                            SELECT
                        </button>
                    </div>
                    <div className="content">
                        <p>{song.title}</p>
                    </div>
                </div>
            )
        })
    }
    render(){
        return(
            <div className="ui divided list">{this.songsList(this.props.songs)}</div>
        )
    }
}
const mapStatetoProps =(state)=>{
    return {songs: state.songs}
}
export default connect(mapStatetoProps, {SongSelector})(SongList)
import React,{Component} from 'react'
import {connect} from 'react-redux'
class SongDetails extends Component{
    details = (song)=>{
        if(!song){
            return(
                <div><h1>Please Select a Song</h1></div>
            )}
        else{
            return(
                <div>
                    <h2>Song Details:</h2>
                    <p>Title: {song.title}</p>
                    <p>Duration: {song.duration}</p>
                </div>
            )
        }
    }
    render(){
        return(
            <div>{this.details(this.props.SongDetails)}</div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {SongDetails:state.selected}
}
export default connect(mapStateToProps)(SongDetails)
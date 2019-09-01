import React, {Component} from 'react'
import {connect} from 'react-redux'
import {decrement} from '../actions'
class Decrement extends Component{
    render(){
        return(
            <div>
                <button className="ui primary button"
                    onClick={()=>{this.props.decrement()}}>
                    Dncrement
                </button>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{coun : state}
}
export default connect(mapStateToProps,{decrement})(Decrement)
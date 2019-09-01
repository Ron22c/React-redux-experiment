import React, {Component} from 'react'
import {connect} from 'react-redux'
import {increment} from '../actions'
class Increment extends Component{
    render(){
        return(
            <div>
                <button className="ui primary button"
                    onClick={()=>{this.props.increment()}}>
                    Increment
                </button>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        cou:state
    }
    
}
export default connect(mapStateToProps,{increment})(Increment)
import React, {Component} from 'react'
import {connect} from 'react-redux'
class Count extends Component{
    render(){
        return(
            <div>
                <h1>Count: {this.props.cou.edit}</h1>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        cou:state
    }
    
}
export default connect(mapStateToProps)(Count)
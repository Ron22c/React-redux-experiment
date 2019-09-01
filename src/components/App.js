import React, {Component} from 'react'
import SongList from './SongList'
import SongDetails from './SongDetails'
import Incremment from './Increment'
import Decrement from './Decrement'
import Count from './Count'
class App extends Component{
    render(){
        return(
            <div>
            <div className="ui container grid">
                <div className="ui row">
                <div className="column eight wide"><SongList/></div>
                <div className="column eight wide"><SongDetails/></div>
                </div>
            </div>
                <div className="ui container grid">
                <div className="ui row">
                <div className="column five wide"><Incremment/></div>
                <div className="column five wide"><Decrement/></div>
                <div className="column five wide"><Count/></div>
                </div>
            </div>
            </div>
        )
    }
}
export default App
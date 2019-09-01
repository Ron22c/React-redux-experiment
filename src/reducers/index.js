import {combineReducers} from 'redux'
const ListofSongsReducer = ()=>{
    return [
        {title: "sweet child of mine", duration: "3.50"},
        {title: "summer of 69", duration: "4.21"},
        {title: "i like it that way", duration: "5.56"},
        {title: "i will now bow", duration: "3.00"}
    ]
}
const selectedSongReducer = (selectedSong = null, action)=>{
    if (action.type === "SELECT_SONG"){
        return action.payload
    }
    return selectedSong
}
const editCountReducer = (count = 0, action)=>{
    if(action.type==='INCREMENT'){
        return count+1
    }
    if(action.type === 'DECREMENT'){
        return count-1
    }
    return count
}
const allReducers = combineReducers({
    songs: ListofSongsReducer,
    selected: selectedSongReducer,
    edit: editCountReducer
})

export default allReducers
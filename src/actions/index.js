export const SongSelector =(song)=>{
    return{
        type:"SELECT_SONG",
        payload:song
    }
}
export const increment=(count)=>{
    return{
        type:'INCREMENT',
        payload:count
    }
}
export const decrement=(count)=>{
    return{
        type:'DECREMENT',
        payload:count
    }
}
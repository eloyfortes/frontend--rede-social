const INITIAL_STATE = {


    posts:[],
    text: ""
    
}

export default (state = INITIAL_STATE,action) => {

    switch(action.type){

        case 'LOAD_FEED':
        return {...state,posts: action.payload.data.response}
        default:
        return state
    }
}
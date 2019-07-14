const INITIAL_STATE = {
    results:[],
    isLoading: false, 
     value: '',
     selected: false
}


export default (state = INITIAL_STATE,action) => {

    switch(action.type){

        case 'LOAD_USERS':
            return {...state,results: action.payload.data.response}
        
        default:
        return state
    }
    
}

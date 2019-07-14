import axios from 'axios'
import { stringify } from 'querystring';
const userKey = '_fatec_social'

const URL = 'http://localhost:3003/api/getPost'
const URL2 = 'http://localhost:3003/api/setPost'

export const loadFeed =(event) => {
    const id = JSON.parse(localStorage.getItem(userKey)).id
    
   
    return dispatch => {

        axios.post(URL,{id}).then(resp => {
            
            dispatch(
      
      {type: 'LOAD_FEED', payload: resp}
    
      )
      })
}
}

export const setPost =(text) => {
    
    
   
    return dispatch => {
        const userID = JSON.parse(localStorage.getItem(userKey)).id
    
        axios.post(URL2,{userID,text})
      .then(resp => {
        
          dispatch(
    loadFeed()
      )
      })
}
}        

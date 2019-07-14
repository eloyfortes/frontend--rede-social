const URL3 = 'http://localhost:3003/api/getUsers'
import axios from 'axios'

export const searchUsers =(event) =>{

    return dispatch => {

        axios.post(URL3).then(resp =>{
                       
            dispatch(
                           

                  {type: 'LOAD_USERS', payload: resp}
    
              )
                  })
            }
            }
            



import React from 'react'
import axios from 'axios'
import Reader from '../header/header.jsx'
import {Responsive, Container,Card,Button} from 'semantic-ui-react'
import { compose } from 'redux';

const URL = 'http://localhost:3003/getUserByName'
const URL2 ='http://localhost:3003/addToF'
class Users extends React.Component {
 
   
  constructor(props){
      super(props)
      this.state = {name: '',id: '',email: ''}
  }
addFriends(){
console.log(this.state)
const Id = localStorage.getItem('userID');
const idU = this.state

axios.post(URL2,{Id,idU}).then(resp => console.log(resp.data.response))

}
  componentWillMount(){
    const id = this.props.match.params.name
    axios.post(URL,{id}).then(r =>
        {
       
        this.setState({...this.state,name: r.data.response[0].usuario, id: r.data.response[0].id,email:r.data.response[0].email})
    
    })
       

  }
  componentDidUpdate(){
      const id = this.props.match.params.name
axios.post(URL,{id}).then(r =>
    {
   
    this.setState({...this.state,name: r.data.response[0].usuario, id: r.data.response[0].id,email:r.data.response[0].email})

})
   
  }



    render(){
return(
            <div>
                <Reader/>

                <Responsive>
<Container style = {{ marginTop: '10em'}}> 
<Card style={{ marginTop: '1em', width:'50em',marginLeft: '10em'}}>
    
                  <Card.Content style={{paddingLeft: '30px',paddingRight: '30px'}}>
                  <Card.Header>{this.props.match.params.name}</Card.Header>

 <Card.Description>{this.state.email}</Card.Description>


                  </Card.Content>


                  <Card.Content extra>
                    
                   <Button onClick={this.addFriends}> Adicionar aos amigos </Button>
                   
                  </Card.Content>
                </Card>
</Container>
</Responsive>
                 </div>
        )
    }
}
export default Users
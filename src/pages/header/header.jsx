import _ from 'lodash'
import React from 'react'
import { Responsive ,Button,Icon,Input, Menu,Container, Search, Grid, Header, Segment } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {searchUsers} from './headerActions'
import {Redirect,Link} from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { userInfo } from 'os';

var dados = [];
const URL = 'http://localhost:3003/api/getUsers'
 class Reader extends React.Component{

 
 componentWillMount(){
   
this.props.searchUsers()
 }
  

 
  
   render(){

  
    return(

<div>  

   
    <Menu secondary fixed='top' inverted color='blue'  >
    <Container >
    <Menu.Item header  >
    <Link to="/feed"><Icon name='gem' size='big'  />
             Fatec Social
             </Link>
     </Menu.Item>
      
      <Menu.Item >
      <Grid>
        <Grid.Column width={3}>
          <Search
            
          />
        </Grid.Column>
        
      </Grid>
      </Menu.Item>
   <Menu.Menu position='right'>
       <Menu.Item>
         <Icon name='mail' size='big'/> 
        
       </Menu.Item>
   
         <Menu.Item>
   <Icon name='product hunt' size='big'/>
          </Menu.Item>
      
      <Menu.Item>
         <Icon name='bell' size='big'/> 
        
        </Menu.Item> 
     
        <Menu.Item>
         <Icon name='user circle' size='big'/> 
        
        </Menu.Item>  
         </Menu.Menu>
   
      
         </Container>
   
         </Menu>

</div>

    )
   }
}

const mapStateToProps = state => ({head: state.head})
const mapDispatchToProps = dispatch => bindActionCreators({searchUsers},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(Reader)

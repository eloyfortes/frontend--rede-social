import React from 'react'
import Reader from '../header/header.jsx'
import axios from 'axios'
import {connect} from 'react-redux'
import { Responsive ,Button,Icon,Input, Menu,Grid,Image,Container,Card,Form,TextArea } from 'semantic-ui-react'
import {loadFeed,setPost} from './mainActions.js'
import { bindActionCreators } from 'redux'

const URLP = 'http://localhost:3003/api/setPost'


 class Main extends React.Component {

      
      componentWillMount(){
this.props.loadFeed()
     
   
      }
     constructor(props){
super(props)
this.setPost = this.setPost.bind(this)


     }
setPost(){
  let text = document.getElementById('campoP').value
  this.props.setPost(text)

}

handle(e){


}

   

      renderPosts(){
   
            const post = this.props.main.posts
            return post.map(posts => (

                  <Card id={posts.id_tweet} style={{ width:'50em',marginLeft: '10em'}}>
    
                  <Card.Content style={{paddingLeft: '30px',paddingRight: '30px'}}>
                    <Card.Header>{posts.usuario}</Card.Header>
                    <Card.Meta>
                      <span className='date'></span>
                    </Card.Meta>
                    <Card.Description>{posts.tweet}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    
                      <Icon name='like' />
                      Supimpa
                    
                  </Card.Content>
                </Card>
              ))


                 
            
            
            } 

render(){
   
return(
<div>
<Reader/>
<Responsive>
<Container style = {{ marginTop: '10em'}} >
<Card style={{ marginTop: '1em', width:'50em',marginLeft: '10em'}}>
    
                  <Card.Content style={{paddingLeft: '30px',paddingRight: '30px'}}>
                 
                  <Form>
    <TextArea id='campoP' autoHeight rows={3}  placeholder='Bosteje aqui' onChange={this.handle} />
  </Form>
                   
                  </Card.Content>
                  <Card.Content extra>
                    
                   <Button onClick={this.setPost}> Bostar </Button>
                   
                  </Card.Content>
                </Card>
</Container>

  <Container style = {{ marginTop: '3em'}} >
 {this.renderPosts()}
  </Container>
  </Responsive>
</div>




      )
             }




}

const mapStateToProps = state => ({main: state.main})
const mapDispatchToprops = dispatch =>  bindActionCreators ({loadFeed,setPost},dispatch)

export default connect(mapStateToProps,mapDispatchToprops)(Main)
import React from 'react'
import LoginForm from './loginForm.jsx'
import axios from 'axios'

import {connect} from 'react-redux'
import {login} from '../../auth/authActions.js'
import { bindActionCreators } from 'redux'


const URL = 'http://localhost:3003/oapi/login'

 class Login extends React.Component{


constructor(props){
    
super(props)
this.state = {
    data:{Email: '',Senha:''},
    aut:false,errors:{}
}
this.handleChanged = this.handleChanged.bind(this)
this.logarUsuario = this.logarUsuario.bind(this)



}


validate(data) {
 

const errors = {};

if(!data.Senha){
    errors.Senha = "Por favor, preencha a senha.";
 


}




return errors;


}
logarUsuario(){



this.props.login(this.state.data);

  

      
    
} 
    


handleChanged(e){

if(e.target.id == 'email'){
    
    this.setState({

        data:{...this.state.data, Email: e.target.value}
    });
}

if(e.target.id == 'pass'){
    this.setState({

        data: {...this.state.data, Senha: e.target.value}
    });
}


}

render(){

return(
    <div>

  
<LoginForm errors={this.state.errors} email={this.state.data.Email} pass={this.state.data.Senha} handleChanged={this.handleChanged} login={this.logarUsuario}/>
 </div>
)

}

}

const mapDispatchToProps = dispatch => bindActionCreators({ login },
    dispatch)

export default connect(null,mapDispatchToProps) (Login)
import React from 'react'

import CadUserForm from './cadUserForm.jsx'

export default class CadUser extends React.Component {
constructor(props){

    super(props)

    this.state = {
        data:{Email: '',Senha:''},
        aut:false,errors:{}
    }
}
    render(){

        return(
            <CadUserForm errors={this.state.errors} Email={this.state.data.Email} Senha={this.state.data.Senha}/>
        )


    }


     


}
